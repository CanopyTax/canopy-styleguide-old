import React from "react";
import CodeExample from "../../code-example.component.js";

module.exports = class extends React.Component {
	render() {
		return (
			<div>
				<div className="cps-flexible-focus cps-card cps-margin-bottom-16">
					<div className="cps-card__header cps-subheader">Banners</div>
				</div>
				<CodeExample>
					<div className="cps-banner-inline">
						<div className="cps-banner-inline__title">Welcome back!</div>
						<div className="cps-banner-inline__content">
							Here is my message to you!
						</div>
						<a className="cps-banner-inline__action">Take Action</a>
					</div>
				</CodeExample>
			</div>
		);
	}
};
