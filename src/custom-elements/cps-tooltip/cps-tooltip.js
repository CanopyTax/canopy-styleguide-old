import preact, {h, Component} from 'preact';
import {preactToCustomElement} from '../preact-to-custom-element.js';
import {customElementToReact} from '../react-interop.js';
import styles from './cps-tooltip.css';
import {throttle, isEqual} from 'lodash';

class CpsTooltip extends Component {
	static state = {
		renderTooltip: false,
	}
	componentDidMount() {
		this.props.customElement.addEventListener('mouseover', throttle(this.mousedOver, 10));
		this.props.customElement.addEventListener('mouseleave', throttle(this.mouseLeave, 10));
	}
	render() {
		if (!this.tooltipContainer && this.state.renderTooltip) {
			this.tooltipContainer = document.createElement('div');
			this.tooltipContainer.classList.add(styles.tooltipContainer);
			document.body.appendChild(this.tooltipContainer);
		}

		const props = {...this.props, tooltipShown: this.tooltipShown};
		const thingToRender = this.state.renderTooltip ? h(Tooltip, props) : '';
		this.preactTooltip = preact.render(thingToRender, this.tooltipContainer, this.preactTooltip);

		// Don't return anything, we don't care about innerHTML of the custom element
		return undefined;
	}
	componentWillUnmount() {
		preact.render('', document.body, this.tooltipContainer);
		document.body.removeChild(this.tooltipContainer);
	}
	mousedOver = evt => {
		this.setState({renderTooltip: true});
	}
	mouseLeave = evt => {
		this.setState({renderTooltip: false}, () => {
			this.tooltipContainer.parentNode.removeChild(this.tooltipContainer);
			delete this.tooltipContainer;
			this.props.customElement.dispatchEvent(new CustomEvent('cps-tooltip:hidden'));
		});
	}
	tooltipShown = el => {
		this.props.customElement.dispatchEvent(new CustomEvent('cps-tooltip:shown', {detail: {tooltipEl: el}}));
	}
	tooltipHidden = () => {
		this.props.customElement.dispatchEvent(new CustomEvent('cps-tooltip:hidden'));
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
		return this.state.waitingForDelayTime
			? null
			: <div className={styles.tooltip} style={{top: `${this.state.top}px`, left: `${this.state.left}px`}} ref={el => this.el = el} dangerouslySetInnerHTML={{__html: this.props.html}} />
	}
	componentDidUpdate() {
		const newPosition = this.getPositionStyles();
		const tolerance = 3; // Num pixels to not care about updating for
		if (this.state.showAbove !== newPosition.showAbove || Math.abs(newPosition.top - this.state.top) > tolerance || Math.abs(newPosition.left - this.state.left) > tolerance) {
			this.setState(newPosition);
		}
	}
	getPositionStyles = () => {
		const verticalMargin = 8;

		const targetEl = this.props.customElement;
		const targetRect = targetEl.getBoundingClientRect();

		const tooltipCenter = targetRect.left + (targetEl.offsetWidth / 2);
		const left = Math.max(0, this.el ? tooltipCenter - (this.el.offsetWidth / 2) : targetRect.left);

		let top;
		if (this.state.showAbove) {
			// Show tooltip above target
			top = targetEl.offsetTop - verticalMargin - this.el.offsetHeight;
		} else {
			// Show tooltip below target
			top = document.body.scrollTop + targetRect.bottom + verticalMargin;
		}

		const showAbove = this.state.showAbove || Boolean(this.el && !this.showAbove && this.el.getBoundingClientRect().bottom > window.innerHeight)
		
		return {top, left, showAbove};
	}
}

const customElement = preactToCustomElement(CpsTooltip, {parentClass: HTMLElement, properties: ['html', 'delayTime']});
customElements.define('cps-tooltip', customElement);
export const CprTooltip = customElementToReact({name: 'cps-tooltip'});
