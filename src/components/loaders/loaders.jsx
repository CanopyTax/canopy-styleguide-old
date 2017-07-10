var React = require('react');

module.exports = React.createClass({
	render: function () {
		return (
			<div>
				<div className="cps-flexible-focus cps-card">
					<div className="cps-card__header cps-subheader">
						Loading indicators: 
						<p className="cps-body">
						These will work although they are depricated now in favor of the custom element <a href="https://github.com/CanopyTax/canopy-styleguide/blob/master/src/custom-elements/cps-loader"> CprLoader</a> 
						</p>
					</div>
				</div>

				<cp-edit-render-code dangerouslySetInnerHTML={{
					__html:
					`<button class="cps-btn +primary">
	<span class="cps-loader">
		<span></span>
		<span></span>
		<span></span>
	</span>
</button>
<button class="cps-btn +primary +large">
	<span class="cps-loader">
		<span></span>
		<span></span>
		<span></span>
	</span>
</button>`}} />

				<cp-edit-render-code dangerouslySetInnerHTML={{
					__html:
					`<div class="cps-loader +page">
	<span></span>
	<span></span>
	<span></span>
</div>` }} />
			</div>
		)
	}
});
