import { Component, h } from 'preact';
import styles from './cps-icon.styles.css';
import { customElementToReact } from '../react-interop.js';
import { preactToCustomElement } from '../preact-to-custom-element.js';

class CpsIcon extends Component {

	render() {

		const { whichOne } = this.props;

		return
		{
			/*
				Some browsers treat the 'viewBox' attribute in a case sensitive manner. E.g.,'viewbox' !== 'viewBox'
				JSX transpilation lowercases the 'viewBox' attribute, which causes browsers to not respect the attribute.
				'viewBox' is used for scaling the SVG.
			*/
		}
		<span dangerouslySetInnerHTML={{
			__html: `
				<svg class="${styles.icon}" viewBox="0 0 24 24">
					<use xlink:href="#${whichOne}" />
				</svg>
			`}}
		/>
	}
}

const elementName = 'cps-icon';
const customElement = preactToCustomElement(CpsIcon, { parentClass: HTMLElement, properties: ['whichOne'] });
customElements.define(elementName, customElement);
export const CprIcon = customElementToReact({ name: elementName });