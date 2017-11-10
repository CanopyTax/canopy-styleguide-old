import React from "react";
import CodeExample from "../../code-example.component.js";

module.exports = class extends React.Component {
	render() {
		return (
			<div>
				<div className="cps-flexible-focus cps-card">
					<div className="cps-card__header cps-subheader">
						Loading indicators:
						<p className="cps-body">
							These will work although they are deprecated now in favor of the
							custom element{" "}
							<a href="https://github.com/CanopyTax/canopy-styleguide/blob/master/src/custom-elements/cps-loader">
								{" "}
								CprLoader
							</a>
						</p>
					</div>
				</div>

				<CodeExample>
					<div>
						<button className="cps-btn +primary">
							<span className="cps-loader">
								<span />
								<span />
								<span />
							</span>
						</button>
						<button className="cps-btn +primary +large">
							<span className="cps-loader">
								<span />
								<span />
								<span />
							</span>
						</button>
					</div>
				</CodeExample>

				<CodeExample>
					<div style={{ display: "flex" }} className="cps-loader +page">
						<span />
						<span />
						<span />
					</div>
				</CodeExample>
			</div>
		);
	}
};
