import { Component, h } from 'preact';
import color from 'color';
import { styles } from './colorpicker.styles.css';

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
					const hue = Math.floor(((e.x - rect.left) / rect.width) * 360);
					this.props.barClick(color(`hsl(${hue}, 90%, 50%)`));
				}}
				class={`${styles.bar}`}>
			</div>
		)
	}
}

const colorGrad = [
	`hsl(0, 90%, 50%) 0%`,
	`hsl(60, 90%, 50%) 16%`,
	`hsl(120, 90%, 50%) 33%`,
	`hsl(180, 90%, 50%) 50%`,
	`hsl(240, 90%, 50%) 66%`,
	`hsl(300, 90%, 50%) 83%`,
	`hsl(360, 90%, 50%) 100%`,
];
