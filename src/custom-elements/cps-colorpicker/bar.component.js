import { Component, h } from 'preact';
import color from 'color';
import styles from './colorpicker.styles.css';
import { lightness, saturation } from './colorpicker.helper.js';

export default class ColorBar extends Component {
	render() {
		return (
			<div
				style={{
					height: this.props.barHeight + 'px',
					background: `linear-gradient(to right, ${colorGrad[0]}, ${colorGrad[1]}, ${colorGrad[2]}, ${colorGrad[3]}, ${colorGrad[4]}, ${colorGrad[5]}, ${colorGrad[6]})`,
				}}
				ref={ref => this.bar = ref}
				onClick={e => {
					const rect = this.bar.getBoundingClientRect();
					const hue = Math.floor(((e.pageX - rect.left) / rect.width) * 360);
					this.props.barClick(color(`hsl(${hue}, ${saturation}%, ${lightness}%)`));
				}}
				class={`${styles.bar}`}>
			</div>
		)
	}
}

const colorGrad = [
	`hsl(0, ${saturation}%, ${lightness}%) 0%`,
	`hsl(60, ${saturation}%, ${lightness}%) 16%`,
	`hsl(120, ${saturation}%, ${lightness}%) 33%`,
	`hsl(180, ${saturation}%, ${lightness}%) 50%`,
	`hsl(240, ${saturation}%, ${lightness}%) 66%`,
	`hsl(300, ${saturation}%, ${lightness}%) 83%`,
	`hsl(360, ${saturation}%, ${lightness}%) 100%`,
];
