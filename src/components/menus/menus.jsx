var React = require('react');
var Highlight = require('react-highlight');

module.exports = React.createClass({
	render: function() {
		return (
		<div>
			<div className="bss-flexible-focus bss-card ">
				<div className="bss-card__header bss-subheader">
					Menus
				</div>
			</div>
				<Highlight className="html ">
				{
`<div class="bss-dropdown bss-open">
  <a href class="bss-btn +primary">
   New <span class="bss-caret"></span>
  </a>
  <ul class="bss-dropdown-menu" role="menu">
    <li><a href>My Profile</a></li>
    <li><a href>Team Members</a></li>
    <li><a href>Company Profile</a></li>

    <li class="bss-divider"></li>
    <li><a href="https://beanstalk.reamaze.com" target="_blank">Help</a>
    </li>
    <li class="bss-divider"></li>
    <li><a href="/signout">Sign out</a>
    </li>
  </ul>
</div>`
				}
				</Highlight>
			<div className="bss-flexible-focus bss-card">
				<div className="bss-card__body">
					<div className="bss-row">
						<div className="bss-col-xs-2">
							<div className="bss-dropdown bss-open">
								<a href className="bss-btn +primary">
								 New <span className="bss-caret"></span>
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
						<div className="bss-col-xs-2">
							<div className="bss-dropdown bss-open">
								<div className="bss-btn-icon">
									<a href className="bss-link">
										<span className="bss-icon bss-icon-cog"></span>
									</a>
								</div>
								<ul className="bss-dropdown-menu" role="menu">
									<li><a href><i className="bss-icon bss-icon-add-person bss-dropdown-menu__icon"></i>Share</a></li>
									<li><a href><i className="bss-icon bss-icon-download bss-dropdown-menu__icon"></i>Download</a></li>
									<li><a href><i className="bss-icon bss-icon-notes bss-dropdown-menu__icon"></i>Rename</a></li>
									<li><a href><i className="bss-icon bss-icon-trash bss-dropdown-menu__icon"></i>Delete</a></li>

								</ul>
							</div>
						</div>
						<div className="bss-col-xs-2">
							<div className="bss-dropdown bss-pull-right bss-open">
								<div className="bss-btn-icon">
									<a href className="bss-link">
										<span className="bss-icon bss-icon-cog"></span>
									</a>
								</div>
								<ul className="bss-dropdown-menu bss-pull-right" role="menu">
									<li><a href><i className="bss-icon bss-icon-add-person bss-dropdown-menu__icon"></i>Share</a></li>
									<li><a href><i className="bss-icon bss-icon-download bss-dropdown-menu__icon"></i>Download</a></li>
									<li><a href><i className="bss-icon bss-icon-notes bss-dropdown-menu__icon"></i>Rename</a></li>
									<li><a href><i className="bss-icon bss-icon-trash bss-dropdown-menu__icon"></i>Delete</a></li>

								</ul>
							</div>
						</div>
						<div className="bss-col-xs-2">
							<div className="bss-dropdown">
								<a href className="bss-link">
								 Settings <span className="bss-caret"></span>
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
						<div className="bss-col-xs-2">
							<div className="bss-dropdown bss-open">
								<a href className="bss-link">
									Settings <span className="bss-caret"></span>
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
						<div className="bss-col-xs-2">
							<div className="bss-dropdown bss-pull-right bss-open">
								<a href className="bss-link">
									Settings <span className="bss-caret"></span>
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
