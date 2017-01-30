import {Component, h} from 'preact';
import styles from './cps-button.css';
import {customElementToReact} from '../react-interop.js';
import {preactToCustomElement} from '../preact-to-custom-element.js';

class CpsButton extends Component {
	static state = {
		disabled: false,
	}
	componentDidMount() {
		this.props.customElement.addEventListener('click', this.onClick);
	}
	componentWillReceiveProps(nextProps) {
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
		this.props.customElement.classList.add(styles.button);
		this.props.customElement.classList.toggle(styles.primary, this.props.actionType === 'primary');
		this.props.customElement.classList.toggle(styles.secondary, this.props.actionType === 'secondary');

		if (this.state.disabled) {
			this.props.customElement.disabled = this.state.disabled;
		}

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
