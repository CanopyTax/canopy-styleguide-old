var React = require('react');

module.exports = class extends React.Component{
	render() {
		return (
			<div>
				<div className="cps-flexible-focus cps-card">
					<div className="cps-card__header">
						<h3 className="cps-subheader">Textareas</h3>
					</div>
				</div>

				<cp-edit-render-code section-title="Textarea with top-aligned label" dangerouslySetInnerHTML={ {__html:
`<form>
	<div class="cps-form-group">
		<label htmlFor="exampleInputEmail1">Email address</label>
		<textarea class="cps-form-control"></textarea>
	</div>
</form>`} } />


				<cp-edit-render-code section-title="Textarea with left-aligned label and no resize handle" dangerouslySetInnerHTML={ {__html:
`<form class="cps-form-horizontal">
	<div class="cps-form-group">
		<label htmlFor="exampleInputEmail1" class="cps-col-xs-1">Full Name</label>
		<div class="cps-col-xs-3">
			<textarea class="cps-form-control +no-resize"></textarea>
		</div>
	</div>
</form>`} } />

			</div>
		)
	}
};
