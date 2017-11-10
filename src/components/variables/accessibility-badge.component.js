import React from 'react';
import Badge from './badge.component.js';
import chroma from 'chroma-js';

const AccessibilityBadge = ({ level }) => {
	let text;
	switch (true) {
		case level.aaa:
			text = 'AAA';
			break;
		case level.aa:
			text = 'AA';
			break;
		case level.aaLarge:
			text = 'AA Large';
			break;
		default:
			text = null;
	}
	return text && <Badge>{text}</Badge>;
};

const getColorObject = hex => {
	const contrastMinimums = {
		aa: 4.5,
		aaLarge: 3,
		aaa: 7,
		aaaLarge: 4.5,
	};

	const contrast = chroma.contrast(hex, 'white');

	return {
		hex,
		contrast,
		accessibility: {
			aa: contrast >= contrastMinimums.aa,
			aaLarge: contrast >= contrastMinimums.aaLarge,
			aaa: contrast >= contrastMinimums.aaa,
			aaaLarge: contrast >= contrastMinimums.aaaLarge,
		},
	};
};

export { AccessibilityBadge, getColorObject };
