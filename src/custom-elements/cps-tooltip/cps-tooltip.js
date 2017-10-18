import preact, {h, Component} from 'preact';
import {preactToCustomElement} from '../preact-to-custom-element.js';
import {customElementToReact} from '../react-interop.js';
import styles from './cps-tooltip.styles.css';
import {throttle, isEqual} from 'lodash';
import TooltipPopup from './tooltip-popup.component.js';

class TooltipTargetElement extends Component {
	static state = {
		renderTooltip: false,
	}
	componentDidMount() {
		this.mouseOverListener = throttle(this.mousedOver, 10);
		this.mouseLeaveListener = throttle(this.mouseLeave, 10);
		this.mouseOutListener = throttle(this.mouseLeave, 10);

		this.props.customElement.addEventListener('mouseover', this.mouseOverListener);
		// I think IE11 has a bug where mouseleave doesn't always get fired for inline styled elements. So we do both mouseout and mouseleave
		this.props.customElement.addEventListener('mouseleave', this.mouseLeaveListener);
		this.props.customElement.addEventListener('mouseout', this.mouseOutListener);

		// Custom elements default to inline, but inline-block is necessary to calculate height/width correctly
		this.props.customElement.classList.add(styles.inlineBlock)
	}
	render() {
		const offsetParent = this.props.customElement.offsetParent;

		if (this.props.disabled) {
			this.hideTooltip();
			return null;
		}

		/* Sometimes render is invoked before tooltip element is connected to the DOM, In these cases offsetParent is null.
		Render will always be called when tooltip is actually connected to the DOM.
		This statement checks for existence of offsetParent (i.e. tooltip is connected) and updates connected element.
		If offsetParent is null, it is not important to run this conditional statement which can sometimes throw an error. */
		if (offsetParent) {
			if (!this.preactContainer && this.state.renderTooltip) {
				this.preactContainer = document.createElement('div');
				// Put the tooltip element into the nearest positioned ancestor, so that offsetTop works.
				this.positionedAncestor = this.props.tooltipContainer || offsetParent;
				this.positionedAncestor.appendChild(this.preactContainer);
			}

			const startingLeft = this.props.tooltipContainer ? offsetParent.getBoundingClientRect().left : 0;
			const startingTop = this.props.tooltipContainer ? offsetParent.getBoundingClientRect().top : 0;
			const props = {...this.props, tooltipShown: this.tooltipShown, startingLeft, startingTop, keepTooltipOpen: this.keepTooltipOpen, closeTooltipNow: this.hideTooltip};
			const thingToRender = this.state.renderTooltip ? h(TooltipPopup, props) : '';
			this.preactTooltip = preact.render(thingToRender, this.preactContainer, this.preactTooltip);
		}

		// Don't return anything, we don't care about innerHTML of the custom element
		return null;
	}
	componentWillUnmount() {
		clearTimeout(this.hideTooltipTimeout);
		this.deleteTooltipElement();

		this.props.customElement.removeEventListener('mouseover', this.mouseOverListener);
		this.props.customElement.removeEventListener('mouseleave', this.mouseLeaveListener);
		this.props.customElement.removeEventListener('mouseout', this.mouseOutListener);

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
		if (this.state.renderTooltip === false) return;

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

const customElement = preactToCustomElement(
	TooltipTargetElement,
	{
		parentClass: HTMLElement,
		properties: [
			'html',
			'disabled',
			'delayTime',
			'tooltipContainer',
			'useFixedPosition',
			'left',
			'top',
			'allowInteraction',
			'caretOnBottom',
			'caretLeft',
			'caretMiddle',
			'caretRight',
		]
	}
);
customElements.define('cps-tooltip', customElement);
export const CprTooltip = customElementToReact({name: 'cps-tooltip'});
