var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="cps-flexible-focus cps-card">
				<div className="cps-card__header cps-subheader">
					Angular Animations
				</div>
				<div className="cps-card__body">
					<ul>
						<li>cps-animate-repeat</li>
						<li>cps-animate-fade</li>
						<li>cps-animate-slide</li>
						<li>cps-animate-if, cps-animate-if-100, cps-animate-if-300, cps-animate-if-500 - These animate a container by changing it's height.
							This has to be done with the max-height attribute because you cannot animate to height auto. Pick the container size that you most
							expect the element to expand to.</li>
					</ul>
				</div>
			</div>
		)
	}
});
