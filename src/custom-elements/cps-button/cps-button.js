import {Component, h} from 'preact';
import styles from './cps-button.css';
import {customElementToReact} from '../react-interop.js';
import {preactToCustomElement} from '../preact-to-custom-element.js';

class CpsButton extends Component {
	static state = {
		disabled: false,
	}
	componentDidMount() {
		// Used for disableOnClick
		this.props.customElement.addEventListener('click', this.onClick);
	}
	componentWillReceiveProps(nextProps) {
		/* When showLoader is set to true, we want to hide whatever text is in the button, but unhide it when
		 * showLoader is set back to false. Unfortunately, you can't set display: none on text nodes, so we have to
		 * remove the text nodes in order to achieve the same effect.
		 */
		if (!this.props.showLoader && nextProps.showLoader) {
			this.textNodes = Array.prototype.filter.call(this.props.customElement.childNodes, childNode => childNode.nodeType === 3);
			Array.prototype.forEach.call(this.textNodes, textNode => textNode.parentNode.removeChild(textNode));
		}

		if (this.props.showLoader && !nextProps.showLoader) {
			Array.prototype.forEach.call(this.textNodes, textNode => this.props.customElement.appendChild(textNode));
			delete this.textNodes;
		}
	}
	render() {
		// Update the classes on the custom element itself
		this.props.customElement.classList.add(styles.button);
		toggleClass(this.props.customElement, styles.primary, this.props.actionType === 'primary');
		toggleClass(this.props.customElement, styles.secondary, this.props.actionType === 'secondary');

		if (this.state.disabled) {
			this.props.customElement.disabled = this.state.disabled;
		}

		// Only return something if we want to completely overwrite the innerHTML
		if (this.props.showLoader) {
			return (
				<span className={`cps-loader ${styles.loader}`}>
					<span />
					<span />
					<span />
				</span>
			)
		}
	}
	onClick = () => {
		if (this.props.disableOnClick) {
			this.setState({disabled: true});
		}
	}
}

const customElement = preactToCustomElement(CpsButton, {parentClass: HTMLButtonElement, properties: ['actionType', 'disableOnClick', 'showLoader']});
customElements.define('cps-button', customElement, {extends: 'button'});
export const CprButton = customElementToReact({name: 'cps-button', extends: 'button'});

function toggleClass(element, className, condition) {
	if (condition) {
		element.classList.add(className);
	} else {
		element.classList.remove(className);
	}
}
