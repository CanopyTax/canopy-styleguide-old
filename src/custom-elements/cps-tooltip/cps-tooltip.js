import preact, {h, Component} from 'preact';
import {preactToCustomElement} from '../preact-to-custom-element.js';
import {customElementToReact} from '../react-interop.js';
import styles from './cps-tooltip.styles.css';
import {throttle, isEqual} from 'lodash';

class CpsTooltip extends Component {
	static state = {
		renderTooltip: false,
	}
	componentDidMount() {
		this.props.customElement.addEventListener('mouseover', throttle(this.mousedOver, 10));

		// I think IE11 has a bug where mouseleave doesn't always get fired for inline styled elements. So we do both mouseout and mouseleave
		this.props.customElement.addEventListener('mouseleave', throttle(this.mouseLeave, 10));
		this.props.customElement.addEventListener('mouseout', throttle(this.mouseLeave, 10));

		// Custom elements default to inline, but inline-block is necessary to calculate height/width correctly
		this.props.customElement.classList.add(styles.inlineBlock)
	}
	render() {
		const offsetParent = this.props.customElement.offsetParent;

		/* Sometimes render is invoked before tooltip element is connected to the DOM, In these cases offsetParent is null.
		Render will always be called when tooltip is actually connected to the DOM.
		This statement checks for existence of offsetParent (i.e. tooltip is connected) and updates connected element.
		If offsetParent is null, it is not important to run this conditional statement which can sometimes throw an error. */
		if(offsetParent) {
			if (!this.preactContainer && this.state.renderTooltip) {
				this.preactContainer = document.createElement('div');
				// Put the tooltip element into the nearest positioned ancestor, so that offsetTop works.
				this.positionedAncestor = this.props.tooltipContainer || offsetParent;
				this.positionedAncestor.appendChild(this.preactContainer);
			}

			const startingLeft = this.props.tooltipContainer ? offsetParent.getBoundingClientRect().left : 0;
			const startingTop = this.props.tooltipContainer ? offsetParent.getBoundingClientRect().top : 0;
			const props = {...this.props, tooltipShown: this.tooltipShown, startingLeft, startingTop, keepTooltipOpen: this.keepTooltipOpen, closeTooltipNow: this.hideTooltip};
			const thingToRender = this.state.renderTooltip ? h(Tooltip, props) : '';
			this.preactTooltip = preact.render(thingToRender, this.preactContainer, this.preactTooltip);
		}

		// Don't return anything, we don't care about innerHTML of the custom element
		return <div style={{height: 0, width: 0}} />;
	}
	componentWillUnmount() {
		clearTimeout(this.hideTooltipTimeout);
		this.deleteTooltipElement();
		if (this.positionedAncestor) {
			preact.render('', this.positionedAncestor, this.preactContainer);
			delete this.positionedAncestor;
		}
	}
	mousedOver = evt => {
		clearTimeout(this.hideTooltipTimeout);
		delete this.hideTooltipTimeout;
		this.setState({renderTooltip: true});
	}
	mouseLeave = evt => {
		const timeToWait = this.props.allowInteraction ? 500 : 0;
		if (this.hideTooltipTimeout) {
			clearTimeout(this.hideTooltipTimeout);
		}
		this.hideTooltipTimeout = setTimeout(this.hideTooltip, timeToWait);
	}
	tooltipShown = el => {
		this.props.customElement.dispatchEvent(new CustomEvent('cps-tooltip:shown', {detail: {tooltipEl: el}}));
	}
	keepTooltipOpen = () => {
		clearTimeout(this.hideTooltipTimeout);
		delete this.hideTooltipTimeout;
	}
	hideTooltip = () => {
		this.setState({renderTooltip: false}, () => {
			this.deleteTooltipElement();
			this.props.customElement.dispatchEvent(new CustomEvent('cps-tooltip:hidden'));
		});
	}
	deleteTooltipElement = () => {
		if (this.preactContainer) {
			this.preactContainer.parentNode.removeChild(this.preactContainer);
			delete this.preactContainer;
		}
	}
}

class Tooltip extends Component {
	state = {
		top: window.innerHeight,
		left: window.innerWidth,
		waitingForDelayTime: true,
		showAbove: false,
	}
	componentDidMount() {
		this.setState(this.getPositionStyles());
		setTimeout(() => {
			this.setState({waitingForDelayTime: false}, () => {
				this.props.tooltipShown(this.el);
			});
		}, Number(this.props.delayTime || 0));
	}
	render() {
		const style = {top: `${this.state.top}px`, left: `${this.state.left}px`};
		if (this.props.useFixedPosition) {
			style.position = 'fixed';
		}

		return this.state.waitingForDelayTime
			? null
			: <div className={styles.tooltip} style={style} ref={this.handleRef} dangerouslySetInnerHTML={{__html: this.props.html}} />
	}
	componentDidUpdate() {
		const newPosition = this.getPositionStyles();
		const tolerance = 3; // Num pixels to not care about updating for
		if (this.state.showAbove !== newPosition.showAbove || Math.abs(newPosition.top - this.state.top) > tolerance || Math.abs(newPosition.left - this.state.left) > tolerance) {
			this.setState(newPosition);
		}
	}
	handleRef = el => {
		this.el = el;
		if (this.props.allowInteraction && !this.mouseEventsAdded) {
			this.el.addEventListener('mouseover', this.props.keepTooltipOpen);
			this.el.addEventListener('mouseleave', this.props.closeTooltipNow);
			this.mouseEventsAdded = true;
		}
	}
	getPositionStyles = () => {
		const verticalMargin = 8;

		const targetEl = this.props.customElement;

		const tooltipCenter = targetEl.offsetLeft + (targetEl.offsetWidth / 2);
		let left;
		if (this.el) {
			left = tooltipCenter - (this.el.offsetWidth / 2);
			const numPixelsTooFarRight = (left + this.el.offsetWidth) - window.innerWidth;
			if (numPixelsTooFarRight > 0) {
				left -= numPixelsTooFarRight;
			}
		} else {
			left = targetEl.offsetLeft;
		}
		left = Math.max(0, left + this.props.startingLeft);

		let top;
		if (this.state.showAbove) {
			// Show tooltip above target
			top = targetEl.offsetTop - verticalMargin - this.el.offsetHeight;
		} else {
			// Show tooltip below target
			top = targetEl.offsetTop + targetEl.offsetHeight + verticalMargin;
		}

		top += this.props.startingTop;

		top = typeof this.props.top === 'number' ? this.props.top : top;
		left = typeof this.props.left === 'number' ? this.props.left : left;

		const showAbove = this.state.showAbove || Boolean(this.el && !this.showAbove && this.el.getBoundingClientRect().bottom > window.innerHeight)
		
		return {top, left, showAbove};
	}
}

const customElement = preactToCustomElement(
	CpsTooltip,
	{parentClass: HTMLElement, properties: ['html', 'delayTime', 'tooltipContainer', 'useFixedPosition', 'left', 'top', 'allowInteraction']}
);
customElements.define('cps-tooltip', customElement);
export const CprTooltip = customElementToReact({name: 'cps-tooltip'});
