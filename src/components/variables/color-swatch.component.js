import React from 'react';
import { AccessibilityBadge, getColorObject } from './accessibility-badge.component.js';

export default class ColorSwatch extends React.PureComponent {
	render() {
		const { name, cssclass, hex } = this.props;
		const colorObj = getColorObject(hex);
		return <div className="cps-col-xs-2">
				<div style={{ borderRadius: '8px', width: '116px', height: '116px', backgroundColor: hex, marginBottom: '16px', marginRight: '24px' }} />
				<strong>class:</strong> .{cssclass}
				<br />
				<strong>hex</strong>: {hex}
				<br />
				{name}
				<br />
				<AccessibilityBadge level={colorObj.accessibility} />
			</div>;
	}
}
