var React = require('react');

module.exports = React.createClass({
	render: function () {
		return (
			<div>
				<div className="cps-flexible-focus cps-card">
					<div className="cps-card__header cps-subheader">
						Lists
					</div>
				</div>

				<cp-edit-render-code section-title="Inline lists" dangerouslySetInnerHTML={{
					__html:
					`<div class="cps-col-xs-4 cps-clear-top">
	<ul class="cps-list-inline +pipes +underline">
		<li><a>active</a></li>
		<li><a>archived</a></li>
		<li><a>deleted</a></li>
	</ul>
</div>
<div class="cps-col-xs-4">
	<ul class="cps-list-inline">
		<li><a><i class="cps-icon cps-icon-list"></i></a></li>
		<li><a><i class="cps-icon cps-icon-grid-view"></i></a></li>
	</ul>
</div>`}} />
			</div>
		);
	}
});
