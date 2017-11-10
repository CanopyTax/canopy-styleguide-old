import React from "react";
import CodeExample from "../../code-example.component.js";

module.exports = class extends React.Component {
	render() {
		return (
			<div>
				<div className="cps-flexible-focus cps-card">
					<div className="cps-card__header cps-subheader">Lists</div>
				</div>

				<CodeExample title="Inline lists">
					<div style={{ display: "flex" }}>
						<div className="cps-col-xs-4 cps-clear-top">
							<ul className="cps-list-inline +pipes +underline">
								<li>
									<a>active</a>
								</li>
								<li>
									<a>archived</a>
								</li>
								<li>
									<a>deleted</a>
								</li>
							</ul>
						</div>
						<div className="cps-col-xs-4">
							<ul className="cps-list-inline">
								<li>
									<a>
										<i className="cps-icon cps-icon-list" />
									</a>
								</li>
								<li>
									<a>
										<i className="cps-icon cps-icon-grid-view" />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</CodeExample>
			</div>
		);
	}
};
