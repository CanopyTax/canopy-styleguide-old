import React from 'react';

const Badge = ({ children, filled }) => (
	<div
		style={{
			borderRadius: 4,
			backgroundColor: filled ? '#333' : 'transparent',
			paddingLeft: 8,
			paddingRight: 8,
			border: 'solid 1px #333',
		}}>
		<div
			style={{
				color: filled ? '#fff' : '#333',
			}}>
			{children}
		</div>
	</div>
);

export default Badge;
