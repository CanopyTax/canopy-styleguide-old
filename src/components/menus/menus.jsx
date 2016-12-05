var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
		<div>
			<div className="cps-flexible-focus cps-card ">
				<div className="cps-card__header cps-subheader">
					Menus
				</div>
			</div>
			
			<cp-edit-render-code section-title="Examples" dangerouslySetInnerHTML={ {__html:
`<div class="cps-row" style="height: 27.5rem;">
	<div class="cps-col-xs-2">
		<ul class="cps-list-unstyled">
			<li class="cps-dropdown cps-open">
				<a class="cps-btn +primary cps-white">
					New <span class="cps-caret"></span>
				</a>
				<ul class="cps-dropdown-menu" role="menu">
					<li><a>My Profile</a>
					</li>
					<li><a>Team Members</a>
					</li>
					<li><a>Company Profile</a>
					</li>

					<li class="cps-divider"></li>
					<li><a>Help</a>
					</li>

					<li class="cps-divider"></li>
					<li><a href="/signout">Sign out</a>
					</li>
				</ul>
			</li>
		</ul>
	</div>
	<div class="cps-col-xs-2">
		<div class="cps-dropdown cps-open">
			<div class="cps-btn-icon">
				<a class="cps-link">
					<span class="cps-icon cps-icon-cog"></span>
				</a>
			</div>
			<ul class="cps-dropdown-menu" role="menu">
				<li><a><i class="cps-icon cps-icon-add-person cps-dropdown-menu__icon"></i>Share</a></li>
				<li><a><i class="cps-icon cps-icon-download cps-dropdown-menu__icon"></i>Download</a></li>
				<li><a><i class="cps-icon cps-icon-notes cps-dropdown-menu__icon"></i>Rename</a></li>
				<li><a><i class="cps-icon cps-icon-trash cps-dropdown-menu__icon"></i>Delete</a></li>
			</ul>
		</div>
	</div>
	<div class="cps-col-xs-2">
		<div class="cps-dropdown cps-pull-right cps-open">
			<div class="cps-btn-icon">
				<a class="cps-link">
					<span class="cps-icon cps-icon-cog"></span>
				</a>
			</div>
			<ul class="cps-dropdown-menu cps-pull-right" role="menu">
				<li><a><i class="cps-icon cps-icon-add-person cps-dropdown-menu__icon"></i>Share</a></li>
				<li><a><i class="cps-icon cps-icon-download cps-dropdown-menu__icon"></i>Download</a></li>
				<li><a><i class="cps-icon cps-icon-notes cps-dropdown-menu__icon"></i>Rename</a></li>
				<li><a><i class="cps-icon cps-icon-trash cps-dropdown-menu__icon"></i>Delete</a></li>
			</ul>
		</div>
	</div>
	<div class="cps-col-xs-2">
		<div class="cps-dropdown cps-open">
			<a class="cps-link">
				Settings <span class="cps-caret"></span>
			</a>
			<ul class="cps-dropdown-menu" role="menu">
				<li><a>My Profile</a></li>
				<li><a>Team Members</a></li>
				<li><a>Company Profile</a></li>

				<li class="cps-divider"></li>
				<li><a>Help</a></li>

				<li class="cps-divider"></li>
				<li><a href="/signout">Sign out</a></li>
			</ul>
		</div>
	</div>
	<div class="cps-col-xs-2">
		<div class="cps-dropdown cps-open">
			<a class="cps-link">
				Settings <span class="cps-caret"></span>
			</a>
			<ul class="cps-dropdown-menu" role="menu">
				<li><a>My Profile</a></li>
				<li><a>Team Members</a></li>
				<li><a>Company Profile</a></li>

				<li class="cps-divider"></li>
				<li><a>Help</a></li>

				<li class="cps-divider"></li>
				<li><a href="/signout">Sign out</a></li>
			</ul>
		</div>
	</div>
	<div class="cps-col-xs-2">
		<div class="cps-dropdown cps-pull-right cps-open">
			<a class="cps-link">
				Settings <span class="cps-caret"></span>
			</a>
			<ul class="cps-dropdown-menu cps-pull-right" role="menu">
				<li><a>My Profile</a></li>
				<li><a>Team Members</a></li>
				<li><a>Company Profile</a></li>

				<li class="cps-divider"></li>
				<li><a>Help</a></li>

				<li class="cps-divider"></li>
				<li><a href="/signout">Sign out</a></li>
			</ul>
		</div>
	</div>
</div>`} } />
		</div>
		)
	}
});
