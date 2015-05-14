var React = require('react');
var _ = require('lodash');
var Highlight = require('react-highlight');

module.exports = React.createClass({
	render: function() {
		var icons = [
			'bss-icon-email',
			'bss-icon-cash',
			'bss-icon-license',
			'bss-icon-sm-close',
			'bss-icon-client-access',
			'bss-icon-client-no-access',
			'bss-icon-credits',
			'bss-icon-grid-view',
			'bss-icon-invoices',
			'bss-icon-items',
			'bss-icon-payments',
			'bss-icon-reports',
			'bss-icon-statements',
			'bss-icon-sm-check',
			'bss-icon-sm-caret-down',
			'bss-icon-sm-caret-left',
			'bss-icon-sm-caret-right',
			'bss-icon-sm-caret-up',
			'bss-icon-add-person',
			'bss-icon-add',
			'bss-icon-archive',
			'bss-icon-arrow-left',
			'bss-icon-attachment',
			'bss-icon-bell',
			'bss-icon-billing',
			'bss-icon-business',
			'bss-icon-calendar',
			'bss-icon-center-aligned',
			'bss-icon-client',
			'bss-icon-clients',
			'bss-icon-close',
			'bss-icon-cloud',
			'bss-icon-cog',
			'bss-icon-compass',
			'bss-icon-download',
			'bss-icon-duplicate',
			'bss-icon-error',
			'bss-icon-expand',
			'bss-icon-files',
			'bss-icon-filter',
			'bss-icon-folder',
			'bss-icon-help',
			'bss-icon-hidden',
			'bss-icon-home',
			'bss-icon-information',
			'bss-icon-lg-check',
			'bss-icon-left-aligned',
			'bss-icon-lg-left-caret',
			'bss-icon-list',
			'bss-icon-location',
			'bss-icon-lock',
			'bss-icon-more',
			'bss-icon-move',
			'bss-icon-nav',
			'bss-icon-notes',
			'bss-icon-number',
			'bss-icon-pending',
			'bss-icon-phone',
			'bss-icon-print',
			'bss-icon-projects',
			'bss-icon-right-aligned',
			'bss-icon-lg-right-caret',
			'bss-icon-search',
			'bss-icon-sort',
			'bss-icon-taxes',
			'bss-icon-tile-view',
			'bss-icon-trash',
			'bss-icon-upload',
			'bss-icon-valid',
			'bss-icon-visible',
			'bss-icon-work',
			'bss-icon-wrench'
		];

		icons.sort();

		var iconGroups = _.groupBy(icons, function(icon, i) {
			return i % 3;
		});

		return (
			<div>
				<div className="bss-flexible-focus bss-card">
					<div className="bss-card__header ">
						Beanstalk Font Icons
					</div>
					<div className="bss-card__body">
						<div className="bss-row">
							{_.map(iconGroups, function(group, i) {
								return <div className="bss-col-xs-4">
										{group.map(function(obj) {
											return <div className="bss-row bss-padding-top-8">
												<div className="bss-col-xs-6 bss-center-vertical">
													<span className="bss-pull-right">
														{obj}
													</span>
												</div>
												<div className="bss-col-xs-6 bss-center-vertical">
													<i className={"bss-icon " + obj}></i>
												</div>
											</div>
										})}
								</div>
							})}
						</div>
					</div>
					<div className="bss-card__hr"></div>
					<div className="bss-card__header ">
						Other Icons
					</div>
					<div className="bss-card__body">
						<div className="bss-row">
						{/** first column **/}
							<div className="bss-col-xs-4">
								<div className="bss-row">
									<div className="bss-col-xs-6 bss-center-vertical">
										<span className="bss-pull-right">
											.bss-icon-sm-caret-left
										</span>
									</div>
									<div className="bss-col-xs-6 bss-center-vertical">
										<i className="bss-icon  bss-icon-sm-caret-left"></i>
									</div>
									<div className="bss-col-xs-6 bss-center-vertical">
										<span className="bss-pull-right">
											.bss-icon-sm-caret-right
										</span>
									</div>
									<div className="bss-col-xs-6 bss-center-vertical">
										<i className="bss-icon  bss-icon-sm-caret-right"></i>
									</div>
									<div className="bss-col-xs-6 bss-center-vertical">
										<span className="bss-pull-right">
											.bss-icon-sm-caret-up
										</span>
									</div>
									<div className="bss-col-xs-6 bss-center-vertical">
										<i className="bss-icon  bss-icon-sm-caret-up"></i>
									</div>
									<div className="bss-col-xs-6 bss-center-vertical">
										<span className="bss-pull-right">
											.bss-icon-sm-caret-down
										</span>
									</div>
									<div className="bss-col-xs-6 bss-center-vertical">
										<i className="bss-icon  bss-icon-sm-caret-down"></i>
									</div>
									<div className="bss-col-xs-6 bss-center-vertical">
										<span className="bss-pull-right">
											Wrapped Icons
										</span>
									</div>
									<div className="bss-col-xs-6 bss-center-vertical">
										<i className="bss-icon +round bss-bg-primary-green bss-white bss-icon-taxes"></i>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="bss-flexible-focus bss-card bss-margin-top-24">
					<div className="bss-card__header ">
						Beanstalk Labels
					</div>
					<div className="bss-card__body">
						<div className="bss-row">
							<div className="bss-col-xs-12">
								<ul className="bss-list-inline">
									<li>
										<div className="bss-label-square +x-large">
											<div className="bss-center-vertical">AC</div>
										</div>
									</li>
									<li>
										<div className="bss-label-square +medium">
											<div className="bss-center-vertical">AC</div>
										</div>
									</li>

									<li>
										<div className="bss-label-square +medium +active">
											<div className="bss-center-vertical">AC</div>
										</div>
									</li>
									<li>
										<div className="bss-label-square__add +medium">
											<div className="bss-center-vertical"><i className="bss-icon bss-icon-add-person"></i></div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>



				<Highlight className="html">
				{
`<div class="bss-label-square +x-large">
  <div class="bss-center-vertical">AC</div>
</div>
<div class="bss-label-square +medium">
  <div class="bss-center-vertical">AC</div>
</div>
<div class="bss-label-square +medium +active">
  <div class="bss-center-vertical">AC</div>
</div>
`
				}
				</Highlight>

				<div className="bss-fixed-focus bss-card bss-margin-top-24">
					<div className="bss-card__header ">
						Icons with inline text
					</div>
					<div className="bss-card__body">
						<i className="bss-icon bss-icon-visible bss-warning"><span>Hello</span></i>
					</div>
				</div>



				<Highlight className="html">
				{
					`<i className="bss-icon bss-icon-visible bss-warning"><span>Hello</span></i>`
				}
				</Highlight>
			</div>

		)
	}
});
