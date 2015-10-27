var React = require('react');
var Highlight = require('react-highlight');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<div className="cps-flexible-focus cps-card">
					<div className="cps-card__header cps-subheader">
						Loading indicators
					</div>
				</div>

				<cp-edit-render-code dangerouslySetInnerHTML={ {__html:
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
</button>`} } />

<cp-edit-render-code dangerouslySetInnerHTML={ {__html:
`<div class="cps-loader +page">
	<span></span>
	<span></span>
	<span></span>
</div>` } } />
			</div>
		)
	}
});
