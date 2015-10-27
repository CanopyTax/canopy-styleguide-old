var React = require('react');
var _ = require('lodash');

var icons = require('canopy-iconography/.fontcustom-manifest.json').glyphs;
icons = _.map(icons, function(icon, name) {
	return 'cps-icon-' + name;
});

module.exports = React.createClass({
	render: function() {

		icons.sort();

		var iconGroups = _.groupBy(icons, function(icon, i) {
			return i % 3;
		});

		return (
			<div>
				<div className="cps-flexible-focus cps-card">
					<div className="cps-card__header cps-subheader">
						Icons &amp; Labels
					</div>
				</div>
			
				<div className="cps-flexible-focus cps-card">
					<div className="cps-card__header ">
						Canopy Font Icons
					</div>
					<div className="cps-card__body">
						<div className="cps-row">
							{_.map(iconGroups, function(group, i) {
								return <div className="cps-col-xs-4" key={i}>
										{group.map(function(obj, j) {
											return <div className="cps-row cps-padding-top-8" key={j}>
												<div className="cps-col-xs-6 cps-center-vertical">
													<span className="cps-pull-right">
														{obj}
													</span>
												</div>
												<div className="cps-col-xs-6 cps-center-vertical">
													<i className={"cps-icon " + obj}></i>
												</div>
											</div>
										})}
								</div>
							})}
						</div>
					</div>
					<div className="cps-card__hr"></div>
					<div className="cps-card__header ">
						Other Icons
					</div>
					<div className="cps-card__body">
						<div className="cps-row">
						{/** first column **/}
							<div className="cps-col-xs-4">
								<div className="cps-row">
									<div className="cps-col-xs-6 cps-center-vertical">
										<span className="cps-pull-right">
											.cps-icon-sm-caret-left
										</span>
									</div>
									<div className="cps-col-xs-6 cps-center-vertical">
										<i className="cps-icon  cps-icon-sm-caret-left"></i>
									</div>
									<div className="cps-col-xs-6 cps-center-vertical">
										<span className="cps-pull-right">
											.cps-icon-sm-caret-right
										</span>
									</div>
									<div className="cps-col-xs-6 cps-center-vertical">
										<i className="cps-icon  cps-icon-sm-caret-right"></i>
									</div>
									<div className="cps-col-xs-6 cps-center-vertical">
										<span className="cps-pull-right">
											.cps-icon-sm-caret-up
										</span>
									</div>
									<div className="cps-col-xs-6 cps-center-vertical">
										<i className="cps-icon  cps-icon-sm-caret-up"></i>
									</div>
									<div className="cps-col-xs-6 cps-center-vertical">
										<span className="cps-pull-right">
											.cps-icon-sm-caret-down
										</span>
									</div>
									<div className="cps-col-xs-6 cps-center-vertical">
										<i className="cps-icon  cps-icon-sm-caret-down"></i>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<cp-edit-render-code section-title="Icon usage" dangerouslySetInnerHTML={ {__html:
`<ul class="cps-list-inline">
	<li>
		<div class="cps-center-vertical">
			<i class="cps-icon cps-icon-cog"></i>
		</div>
	</li>
	<li>
		<div class="cps-center-vertical">
			<i class="cps-icon cps-icon-items"></i>
		</div>
	</li>
	<li>
		<div class="cps-center-vertical">
			<i class="cps-icon cps-icon-transfer"></i>
		</div>
	</li>
	<li>
		<div class="cps-center-vertical">
			<i class="cps-icon cps-icon-license cps-primary-green"></i>
		</div>
	</li>
	<li>
		<div class="cps-center-vertical">
			<i class="cps-icon cps-icon-flag cps-red"></i>
		</div>
	</li>
</ul>`} } />

				<cp-edit-render-code section-title="Wrapped icons" dangerouslySetInnerHTML={ {__html:
`<ul class="cps-list-inline">
	<li>
		<div class="cps-center-vertical">
			<i class="cps-icon +round cps-bg-primary-green cps-white cps-icon-taxes"></i>
		</div>
	</li>
	<li>
		<div class="cps-center-vertical">
			<i class="cps-icon +round cps-bg-primary-green cps-white cps-icon-lg-check"></i>
		</div>
	</li>
</ul>`} } />

				<cp-edit-render-code section-title="Canopy labels" dangerouslySetInnerHTML={ {__html:
`<ul class="cps-list-inline">
	<li>
		<div class="cps-label-square +x-large">
			<div class="cps-center-vertical">AC</div>
		</div>
	</li>
	<li>
		<div class="cps-label-square +medium">
			<div class="cps-center-vertical">AC</div>
		</div>
	</li>

	<li>
		<div class="cps-label-square +medium +active">
			<div class="cps-center-vertical">AC</div>
		</div>
	</li>
	<li>
		<div class="cps-label-square__add +medium">
			<div class="cps-center-vertical"><i class="cps-icon cps-icon-add-person"></i></div>
		</div>
	</li>
</ul>`} } />


				<cp-edit-render-code section-title="Icons with inline text" dangerouslySetInnerHTML={ {__html: `<i class="cps-icon cps-icon-visible cps-warning"><span>Hello</span></i>`} } />
			</div>

		)
	}
});
