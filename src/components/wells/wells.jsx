import React from "react";
import CodeExample from "../../code-example.component.js";

module.exports = class extends React.Component {
	render() {
		return (
			<div>
				<div className="cps-flexible-focus cps-card cps-margin-bottom-16">
					<div className="cps-card__header cps-subheader">Wells</div>
				</div>

				<CodeExample>
					<div>
						<p className="cps-well__light cps-padding-32">
							This is a p tag with the 'cps-well__light' class applied.
						</p>

						<div className="cps-well cps-padding-32">
							This is the default well.
						</div>

						<p className="cps-well__dark cps-padding-32">
							Well, well well... a p tag with the 'cps-well__dark' class
							applied..
						</p>
					</div>
				</CodeExample>
			</div>
		);
	}
};
