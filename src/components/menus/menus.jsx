import React from "react";
import CodeExample from "../../code-example.component.js";

module.exports = class extends React.Component {
	render() {
		return (
			<div>
				<div className="cps-flexible-focus cps-card ">
					<div className="cps-card__header cps-subheader">Menus</div>
				</div>

				<CodeExample title="Examples">
					<div className="cps-row" style={{ height: "27.5rem" }}>
						<div className="cps-col-xs-2">
							<ul className="cps-list-unstyled">
								<li className="cps-dropdown cps-open">
									<a className="cps-btn +primary cps-white">
										New <span className="cps-caret" />
									</a>
									<ul className="cps-dropdown-menu" role="menu">
										<li>
											<a>My Profile</a>
										</li>
										<li>
											<a>Team Members</a>
										</li>
										<li>
											<a>Company Profile</a>
										</li>

										<li className="cps-divider" />
										<li>
											<a>Help</a>
										</li>

										<li className="cps-divider" />
										<li>
											<a href="/signout">Sign out</a>
										</li>
									</ul>
								</li>
							</ul>
						</div>
						<div className="cps-col-xs-2">
							<div className="cps-dropdown cps-open">
								<div className="cps-btn-icon">
									<a className="cps-link">
										<span className="cps-icon cps-icon-cog" />
									</a>
								</div>
								<ul className="cps-dropdown-menu" role="menu">
									<li>
										<a>
											<i className="cps-icon cps-icon-add-person cps-dropdown-menu__icon" />Share
										</a>
									</li>
									<li>
										<a>
											<i className="cps-icon cps-icon-download cps-dropdown-menu__icon" />Download
										</a>
									</li>
									<li>
										<a>
											<i className="cps-icon cps-icon-notes cps-dropdown-menu__icon" />Rename
										</a>
									</li>
									<li>
										<a>
											<i className="cps-icon cps-icon-trash cps-dropdown-menu__icon" />Delete
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="cps-col-xs-2">
							<div className="cps-dropdown cps-pull-right cps-open">
								<div className="cps-btn-icon">
									<a className="cps-link">
										<span className="cps-icon cps-icon-cog" />
									</a>
								</div>
								<ul className="cps-dropdown-menu cps-pull-right" role="menu">
									<li>
										<a>
											<i className="cps-icon cps-icon-add-person cps-dropdown-menu__icon" />Share
										</a>
									</li>
									<li>
										<a>
											<i className="cps-icon cps-icon-download cps-dropdown-menu__icon" />Download
										</a>
									</li>
									<li>
										<a>
											<i className="cps-icon cps-icon-notes cps-dropdown-menu__icon" />Rename
										</a>
									</li>
									<li>
										<a>
											<i className="cps-icon cps-icon-trash cps-dropdown-menu__icon" />Delete
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="cps-col-xs-2">
							<div className="cps-dropdown cps-open">
								<a className="cps-link">
									Settings <span className="cps-caret" />
								</a>
								<ul className="cps-dropdown-menu" role="menu">
									<li>
										<a>My Profile</a>
									</li>
									<li>
										<a>Team Members</a>
									</li>
									<li>
										<a>Company Profile</a>
									</li>

									<li className="cps-divider" />
									<li>
										<a>Help</a>
									</li>

									<li className="cps-divider" />
									<li>
										<a href="/signout">Sign out</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="cps-col-xs-2">
							<div className="cps-dropdown cps-open">
								<a className="cps-link">
									Settings <span className="cps-caret" />
								</a>
								<ul className="cps-dropdown-menu" role="menu">
									<li>
										<a>My Profile</a>
									</li>
									<li>
										<a>Team Members</a>
									</li>
									<li>
										<a>Company Profile</a>
									</li>

									<li className="cps-divider" />
									<li>
										<a>Help</a>
									</li>

									<li className="cps-divider" />
									<li>
										<a href="/signout">Sign out</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="cps-col-xs-2">
							<div className="cps-dropdown cps-pull-right cps-open">
								<a className="cps-link">
									Settings <span className="cps-caret" />
								</a>
								<ul className="cps-dropdown-menu cps-pull-right" role="menu">
									<li>
										<a>My Profile</a>
									</li>
									<li>
										<a>Team Members</a>
									</li>
									<li>
										<a>Company Profile</a>
									</li>

									<li className="cps-divider" />
									<li>
										<a>Help</a>
									</li>

									<li className="cps-divider" />
									<li>
										<a href="/signout">Sign out</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</CodeExample>
			</div>
		);
	}
};
