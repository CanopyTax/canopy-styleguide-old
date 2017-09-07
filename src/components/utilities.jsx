var React = require('react');

module.exports = class extends React.Component{
	render() {
		return (
			<div className="cps-flexible-focus cps-card">
				<div className="cps-card__header cps-subheader">
					Utility Classes - use with prudence
				</div>
				<div className="cps-card__body">
					<div>cps-clearfix</div>
					<div>cps-cursor-pointer</div>
					<div>cps-pull-right</div>
					<div>cps-pull-left</div>
					<div>cps-center-block</div>
					<div>cps-text-center</div>
					<div>cps-text-right</div>
					<div>cps-text-left</div>
					<div>cps-inline-block</div>
					<div>cps-center-vertical</div>
					<div>cps-show</div>
					<div>cps-hidden</div>
					<div>cps-ellipsis</div>
					<div>+noclick</div>
				</div>
				<hr/>
				<div className="cps-card__header cps-subheader">
					Depth classes
				</div>
				<div className="cps-card__body">
					<div>cps-depth-1</div>
					<div>cps-depth-2</div>
					<div>cps-depth-3</div>
					<div>cps-depth-4</div>
					<div>cps-depth-5</div>
				</div>
				<hr/>
				<div className="cps-card__header cps-subheader">
					Spacing Classes
				</div>
				<div className="cps-card__body">
					<div>All of the following classes the 0 can be replaced with: 0, 4, 8, 12, 16, 24, 32</div>
					<div>cps-margin-0</div>
					<div>cps-margin-left-0</div>
					<div>cps-margin-right-0</div>
					<div>cps-margin-top-0</div>
					<div>cps-margin-bottom-0</div>
					<div>cps-padding-0</div>
					<div>cps-padding-left-0</div>
					<div>cps-padding-right-0</div>
					<div>cps-padding-top-0</div>
					<div>cps-padding-bottom-0</div>
				</div>
			</div>
		)}
};
