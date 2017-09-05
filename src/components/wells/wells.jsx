var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<div className="cps-flexible-focus cps-card cps-margin-bottom-16">
					<div className="cps-card__header cps-subheader">Wells</div>
				</div>

				<cp-edit-render-code
					dangerouslySetInnerHTML={{
						__html: `<p class="cps-well L1 cps-padding-32">
	This is an L1 well.
</p>

<div class="cps-well L2 cps-padding-32">
	This is an L2 well.
</div>

<p class="cps-well L3 cps-padding-32">
	Well, well well... an L3 well.
</p>`,
					}}
				/>
			</div>
		);
	},
});
