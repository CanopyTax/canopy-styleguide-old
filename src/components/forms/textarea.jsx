import React from "react";
import CodeExample from "../../code-example.component.js";

module.exports = class extends React.Component {
	render() {
		return (
			<div>
				<div className="cps-flexible-focus cps-card">
					<div className="cps-card__header">
						<h3 className="cps-subheader">Textareas</h3>
					</div>
				</div>

				<CodeExample title="Textarea with top-aligned label">
					<form>
						<div className="cps-form-group">
							<label htmlFor="exampleInputEmail1">Email address</label>
							<textarea className="cps-form-control" />
						</div>
					</form>
				</CodeExample>

				<CodeExample title="Textarea with left-aligned label and no resize handle">
					<form className="cps-form-horizontal">
						<div className="cps-form-group">
							<label htmlFor="exampleInputEmail1" className="cps-col-xs-1">
								Full Name
							</label>
							<div className="cps-col-xs-3">
								<textarea className="cps-form-control +no-resize" />
							</div>
						</div>
					</form>
				</CodeExample>
			</div>
		);
	}
};
