import { h, Component } from 'preact';
import { colorToPosition } from './colorpicker.helper.js';
import Color from 'color';
import styles from './colorpicker.styles.css';
import { saturation, lightness } from './colorpicker.helper.js';

export default class ColorSlider extends Component {
	constructor() {
		super();
		this.state = {
			dragging: false,
		}
	}
	componentWillUnmount() {
		window.removeEventListener('mousemove', this.mousemove);
		window.removeEventListener('mouseup', this.mouseup);
	}
	render(props, state) {
		return (
			<div
				onMouseDown={e => {
					e.preventDefault();
					this.xStart = e.clientX;
					this.setState({
						dragging: true,
					})
					window.addEventListener('mousemove', this.mousemove);
					window.addEventListener('mouseup', this.mouseup);
				}}
				style={{
					top: `-${(props.sliderSize / 2) - (props.barHeight / 2)}px`,
					height: `${props.sliderSize}px`,
					width: `${props.sliderSize}px`,
					left: `calc(${colorToPosition(props.color)}% - ${props.sliderSize / 2}px)`,
					background: `${props.color.hsl().string()}`,
				}}
				class={`${styles.slider} ${this.state.dragging ? styles.grabbing : styles.grab}`}>
			</div>
		)
	}
	mousemove = e => {
		const hue = Math.floor(((e.clientX - this.props.barStart) / this.props.barWidth) * 360);
		this.props.setColor(Color(`hsl(${hue >= 360 ? 359 : hue < 0 ? 0 : hue}, ${saturation}%, ${lightness}%)`));
	}
	mouseup = e => {
		window.removeEventListener('mousemove', this.mousemove);
		window.removeEventListener('mouseup', this.mouseup);
		this.setState({
			dragging: false,
		})
	}
}
