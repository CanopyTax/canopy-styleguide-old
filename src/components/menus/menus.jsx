var React = require('react');
var Highlight = require('react-highlight');

module.exports = React.createClass({
	render: function() {
		return (
		<div>
			<div className="bss-fixed-focus bss-card">
				<div className="bss-card__header bss-subheader">
					Menus
				</div>
				<div className="bss-card__body">
					<div className="bss-row">
						<div className="bss-col-xs-3">
							<div className="bss-dropdown bss-open">
								<a href className="bss-btn +primary dropdown-toggle">
								 New <i className="bs-icon bs-caret-down"></i>
								</a>
								<ul className="bss-dropdown-menu" role="menu">
									<li><a href>My Profile</a></li>
									<li><a href>Team Members</a></li>
									<li><a href>Company Profile</a></li>

									<li className="bss-divider"></li>
									<li><a href="https://beanstalk.reamaze.com" target="_blank">Help</a>
									</li>
									<li className="bss-divider"></li>
									<li><a href="/signout">Sign out</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="bss-col-xs-3">
							<div className="bss-dropdown bss-open">
								<a href className="bss-link">
								 Settings
								</a>
								<ul className="bss-dropdown-menu" role="menu">
									<li><a href>My Profile</a></li>
									<li><a href>Team Members</a></li>
									<li><a href>Company Profile</a></li>

									<li className="bss-divider"></li>
									<li><a href="https://beanstalk.reamaze.com" target="_blank">Help</a>
									</li>
									<li className="bss-divider"></li>
									<li><a href="/signout">Sign out</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="bss-col-xs-3">
							<div className="bss-dropdown bss-open">
								<a href className="bss-link">
								 Settings
								</a>
								<ul className="bss-dropdown-menu" role="menu">
									<li><a href>My Profile</a></li>
									<li><a href>Team Members</a></li>
									<li><a href>Company Profile</a></li>

									<li className="bss-divider"></li>
									<li><a href="https://beanstalk.reamaze.com" target="_blank">Help</a>
									</li>
									<li className="bss-divider"></li>
									<li><a href="/signout">Sign out</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="bss-col-xs-3">
							<div className="bss-dropdown bss-pull-right bss-open">
								<a href className="bss-link">
								 Settings
								</a>
								<ul className="bss-dropdown-menu bss-pull-right" role="menu">
									<li><a href>My Profile</a></li>
									<li><a href>Team Members</a></li>
									<li><a href>Company Profile</a></li>

									<li className="bss-divider"></li>
									<li><a href="https://beanstalk.reamaze.com" target="_blank">Help</a>
									</li>
									<li className="bss-divider"></li>
									<li><a href="/signout">Sign out</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
		)
	}
});
