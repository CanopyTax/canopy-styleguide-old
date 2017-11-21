import React from 'react';
import { map } from 'lodash';
import ColorSwatch from './color-swatch.component.js';

const colorCategories = {
	brand: 'Brand',
	accents: 'Accents',
	gray: 'Gray',
	base: 'Base',
};

const colors = {
	[colorCategories.brand]: {
		Canopy: { hex: '#00BF4B', cssclass: 'green' },
		'Vibrant Ocean': { hex: '#3399FF', cssclass: 'blue' },
		Sandstorm: { hex: '#F0D800', cssclass: 'yellow' },
		'Cool Gray': { hex: '#52555A', cssclass: 'gray' },
	},
	[colorCategories.accents]: {
		'Canopy Shade': { hex: '#009E38', cssclass: 'accent-green' },
		Mandy: { hex: '#FF345E', cssclass: 'red' },
		Monsoon: { hex: '#777777', cssclass: 'gray1' },
		Slate: { hex: '#919191', cssclass: 'gray2' },
	},
	[colorCategories.gray]: {
		Athens: { hex: '#DFDFDF', cssclass: 'gray3' },
		Silver: { hex: '#E9E9E9', cssclass: 'gray4' },
		Chrome: { hex: '#F3F3F3', cssclass: 'gray5' },
		Ash: { hex: '#F9F9F9', cssclass: 'gray6' },
	},
	[colorCategories.base]: {
		'Blue Smoke': { hex: '#F4F5F8', cssclass: 'background' },
		Bumble: { hex: '#FFFFFF', cssclass: 'white' },
	},
};

module.exports = class extends React.Component {
	render() {
		return (
			<div className="cps-flexible-focus cps-card">
				<div className="cps-card__header cps-subheader">Color Palette</div>
				<div className="cps-card__body cps-padding-top-32">
					{map(colors, (category, key, orig) => (
						<div className="cps-row cps-padding-bottom-32" key={key}>
							<div className="cps-col-xs-2 cps-subheader">{key}</div>
							{map(category, (color, colorKey) => (
								<ColorSwatch key={colorKey} name={colorKey} {...color} />
							))}
						</div>
					))}
				</div>
			</div>
		);
	}
};
