import React from "react";
import CodeExample from "../../code-example.component.js";
import { groupBy, indexOf, map } from "lodash";

let icons = require("../../../.fontcustom-manifest.json").glyphs;
icons = map(icons, (icon, name) => "cps-icon-" + name);

module.exports = class extends React.Component {
	render() {
		icons.sort();

		let i = 0;
		const iconGroups = groupBy(icons, icon => indexOf(icons, icon) % 3);

		return (
			<div>
				<div className="cps-flexible-focus cps-card">
					<div className="cps-card__header cps-subheader">
						Icons &amp; Labels
					</div>
				</div>

				<div className="cps-flexible-focus cps-card">
					<div className="cps-card__header ">Canopy Font Icons</div>
					<div className="cps-card__body">
						<div className="cps-row">
							{map(iconGroups, function(group, i) {
								return (
									<div className="cps-col-xs-4" key={i}>
										{group.map(function(obj, j) {
											return (
												<div className="cps-row cps-padding-top-8" key={j}>
													<div className="cps-col-xs-8 cps-center-vertical">
														<span className="cps-pull-right">{obj}</span>
													</div>
													<div className="cps-col-xs-4 cps-center-vertical">
														<i className={"cps-icon " + obj} />
													</div>
												</div>
											);
										})}
									</div>
								);
							})}
						</div>
					</div>
				</div>

				<CodeExample title="Icon usage">
					<ul className="cps-list-inline">
						<li>
							<div className="cps-center-vertical">
								<i className="cps-icon cps-icon-cog" />
							</div>
						</li>
						<li>
							<div className="cps-center-vertical">
								<i className="cps-icon cps-icon-items" />
							</div>
						</li>
						<li>
							<div className="cps-center-vertical">
								<i className="cps-icon cps-icon-transfer" />
							</div>
						</li>
						<li>
							<div className="cps-center-vertical">
								<i className="cps-icon cps-icon-license cps-primary-green" />
							</div>
						</li>
						<li>
							<div className="cps-center-vertical">
								<i className="cps-icon cps-icon-flag cps-red" />
							</div>
						</li>
					</ul>
				</CodeExample>

				<CodeExample title="Wrapped icons">
					<ul className="cps-list-inline">
						<li>
							<div className="cps-center-vertical">
								<i className="cps-icon +round cps-bg-primary-green cps-white cps-icon-taxes" />
							</div>
						</li>
						<li>
							<div className="cps-center-vertical">
								<i className="cps-icon +round cps-bg-primary-green cps-white cps-icon-lg-check" />
							</div>
						</li>
					</ul>
				</CodeExample>

				<CodeExample title="Canopy labels">
					<ul className="cps-list-inline">
						<li>
							<div className="cps-label-square +x-large">
								<div className="cps-center-vertical">AC</div>
							</div>
						</li>
						<li>
							<div className="cps-label-square +medium">
								<div className="cps-center-vertical">AC</div>
							</div>
						</li>

						<li>
							<div className="cps-label-square +medium +active">
								<div className="cps-center-vertical">AC</div>
							</div>
						</li>
						<li>
							<div className="cps-label-square__add +medium">
								<div className="cps-center-vertical">
									<i className="cps-icon cps-icon-add-person" />
								</div>
							</div>
						</li>
						<li>
							<div className="cps-bg-gray-6 cps-label-square +no-hover-effect +medium">
								<div className="cps-center-vertical">
									<i className="cps-icon cps-icon-client-no-access" />
								</div>
							</div>
						</li>
					</ul>
				</CodeExample>

				<CodeExample title="Icons with inline text">
					<i className="cps-icon cps-icon-visible cps-warning">
						<span>Hello</span>
					</i>
				</CodeExample>
			</div>
		);
	}
};
