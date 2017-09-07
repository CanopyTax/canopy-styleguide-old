var React = require('react');

module.exports = class extends React.Component{
	render() {
		return (
			<div>
				<div className="cps-flexible-focus cps-card cps-margin-bottom-16">
					<div className="cps-card__header cps-subheader">Wells</div>
				</div>

				<cp-edit-render-code
					dangerouslySetInnerHTML={{
						__html: `<p class="cps-well__light cps-padding-32">
	This is a p tag with the 'cps-well__light' class applied.
</p>

<div class="cps-well cps-padding-32">
	This is the default well.
</div>

<p class="cps-well__dark cps-padding-32">
	Well, well well... a p tag with the 'cps-well__dark' class applied..
</p>`,
					}}
				/>
			</div>
		);
	}
};
