import {Component, h} from 'preact';
import {customElementToReact} from '../react-interop.js';
import {preactToCustomElement} from '../preact-to-custom-element.js';
import styles from './cps-loader.styles.css';
import {makeDots} from './cps-loader.helper.js';

class CpsLoader extends Component {
	render(){
		return (
			<span className={`${styles.loader} ${this.props.customElement.page ? styles.page : ''}`}>
				{
					makeDots(this.props.customElement)
				}
			</span>
		)
    }
}  

const customElement = preactToCustomElement(CpsLoader, {parentClass: HTMLSpanElement, properties: ['page', 'dotSize', 'color']});
customElements.define('cps-loader', customElement, {extends: 'span'});
export const CprLoader = customElementToReact({name: 'cps-loader', extends: 'span'});
