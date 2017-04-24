import { h, render, Component } from 'preact';
import Color from 'color';
import {customElementToReact} from '../react-interop.js';
import {preactToCustomElement} from '../preact-to-custom-element.js';
import { colorToPosition, saturation, lightness } from './colorpicker.helper.js';
import styles from './colorpicker.styles.css';

import ColorBar from './bar.component.js';
import ColorSlider from './slider.component.js';

class CpsColorpicker extends Component {
	constructor(props) {
		super();
		this.state = {
			width: 0,
		};
	}
	componentDidMount() {
		window.addEventListener('resize', this.handleResize);
		const rect = this.colorpicker.getBoundingClientRect();
		this.setState({
			width: rect.width,
			start: rect.left,
		});
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize);
		if (this.resizeTimer)
			clearTimeout(this.resizeTimer);
	}
	render() {
		const color = this.props.color ? Color(this.props.color) : Color(`hsl(0, ${saturation}%, ${lightness}%)`);
		return (
			<div
				ref={ref => this.colorpicker = ref}
				class={`${styles.colorpicker}`}>
				<ColorBar
					barHeight={this.state.width * .09}
					barClick={this.setColor.bind(this)}/>
				<ColorSlider
					barHeight={this.state.width * .09}
					barStart={this.state.start}
					setColor={this.setColor.bind(this)}
					barWidth={this.state.width}
					sliderSize={this.state.width * .16}
					color={color}/>
			</div>
		)
	}
	setColor = color => {
		this.props.customElement.dispatchEvent(new CustomEvent('colorchange', {
			detail: color[this.props.format || 'hex']().toString(),
		}));
	}
	handleResize = () => {
		if (this.resizeTimer) {
			clearTimeout(this.resizeTimer);
		}
		this.resizeTimer = setTimeout(() => {
			const rect = this.colorpicker.getBoundingClientRect();
			this.setState({
				width: rect.width,
				start: rect.left,
			});
		}, 1000);
	}
}

const cpsColorpickerProps = [
	"color", "format"
];

const customElement = preactToCustomElement(
	CpsColorpicker,
	{
		parentClass: HTMLElement,
		properties: cpsColorpickerProps
	}
);
customElements.define('cps-colorpicker', customElement);
export const CprColorpicker = customElementToReact({name: 'cps-colorpicker'});
