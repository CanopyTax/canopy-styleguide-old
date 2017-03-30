import Color from 'color';

export function colorToPosition(color) {
	return Math.floor((color.hsl().hue() / 360) * 100);
}

export const lightness = "45";
export const saturation = "100";
