var React = require('react');
var Highlight = require('react-highlight');

module.exports = React.createClass({
	render: function() {
		return (
		<div>
			<div className="bss-fixed-focus bss-card ">
				<div className="bss-card__header bss-subheader">
					Menus
				</div>
			</div>
				<Highlight className="html ">
				{
`<div className="bss-dropdown bss-open">
  <a href className="bss-btn +primary dropdown-toggle">
   New <i className="bss-icon-sm-caret-down bss-dropdown__icon +white"></i>
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
</div>`
				}
				</Highlight>
			<div className="bss-fixed-focus bss-card">
				<div className="bss-card__body">
					<div className="bss-row">
						<div className="bss-col-xs-3">
							<div className="bss-dropdown bss-open">
								<a href className="bss-btn +primary dropdown-toggle">
								 New <i className="bss-icon-sm-caret-down bss-dropdown__icon +white"></i>
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
									<i className="bss-icon bss-icon-cog"></i>
								</a>
								<ul className="bss-dropdown-menu" role="menu">
									<li><a href><i className="bss-icon bss-icon-add-person bss-dropdown-menu__icon"></i>Share</a></li>
									<li><a href><i className="bss-icon bss-icon-download bss-dropdown-menu__icon"></i>Download</a></li>
									<li><a href><i className="bss-icon bss-icon-notes bss-dropdown-menu__icon"></i>Rename</a></li>
									<li><a href><i className="bss-icon bss-icon-trash bss-dropdown-menu__icon"></i>Delete</a></li>

								</ul>
							</div>
						</div>

						<div className="bss-col-xs-3">
							<div className="bss-dropdown">
								<a href className="bss-link">
								 Settings <i className="bss-icon-sm-caret-down bss-dropdown__icon"></i>
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
									Settings <i className="bss-icon-sm-caret-down bss-dropdown__icon"></i>
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
