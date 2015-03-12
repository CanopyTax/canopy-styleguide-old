var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="bss-fixed-focus bss-card">
				<div className="bss-card__header bss-subheader">
					Color Palette
				</div>
				<div className="bss-card__body">
					<div className="bss-subheader-sm padding-bottom-20">Contextual Colors</div>
					<br/>
					<div className="left-md-space">
						<div className="row">
							<div className="bss-bg-warning col-xs-2 bss-sm-padding bss-light center-vertical"><span className="pull-right">.bss-bg-warning</span>
							</div>
							<div className="col-xs-2 center-vertical bss-warning">.bss-warning</div>
							<div className="col-xs-2 center-vertical">@warning</div>
						</div>
						<div className="row">
							<div className="bss-bg-info col-xs-2 bss-sm-padding bss-light center-vertical"><span className="pull-right">.bss-bg-info</span>
							</div>
							<div className="col-xs-2 center-vertical bss-info">.bss-info</div>
							<div className="col-xs-2 center-vertical">@info</div>
						</div>
						<div className="row">
							<div className="bss-bg-general col-xs-2 bss-sm-padding bss-light center-vertical"><span className="pull-right">.bss-bg-general</span>
							</div>
							<div className="col-xs-2 center-vertical bss-general">.bss-general</div>
							<div className="col-xs-2 center-vertical">@general</div>
						</div>
						<div className="row">
							<div className="bss-bg-success col-xs-2 bss-sm-padding bss-light center-vertical"><span className="pull-right">.bss-bg-success</span>
							</div>
							<div className="col-xs-2 center-vertical bss-success">.bss-success</div>
							<div className="col-xs-2 center-vertical">@success</div>
						</div>
					</div>
					<div className="bss-subheader-sm padding-bottom-20">Greens</div>
					<br/>
					<div className="left-md-space">
						<div className="row">
							<div className="bss-bg-d-green col-xs-2 bss-sm-padding bss-light center-vertical"><span className="pull-right">.bss-bg-d-green</span>
							</div>
							<div className="col-xs-2 center-vertical bss-d-green">.bss-d-green</div>
							<div className="col-xs-2 center-vertical">@dark-green</div>
						</div>
						<div className="row">
							<div className="bss-bg-m-green col-xs-2 bss-sm-padding bss-light center-vertical"><span className="pull-right">.bss-bg-m-green</span>
							</div>
							<div className="col-xs-2 center-vertical bss-m-green">.bss-m-green</div>
							<div className="col-xs-2 center-vertical">@medium-green</div>
						</div>
						<div className="row">
							<div className="bss-bg-p-green col-xs-2 bss-sm-padding bss-light center-vertical"><span className="pull-right">.bss-bg-p-green</span><span className="pull-left">PRIMARY</span>
							</div>
							<div className="col-xs-2 center-vertical bss-p-green">.bss-p-green</div>
							<div className="col-xs-2 center-vertical">@primary-green</div>
						</div>
						<div className="row">
							<div className="bss-bg-l-green col-xs-2 bss-sm-padding bss-light center-vertical"><span className="pull-right">.bss-bg-l-green</span>
							</div>
							<div className="col-xs-2 center-vertical bss-l-green">.bss-l-green</div>
							<div className="col-xs-2 center-vertical">@light-green</div>
						</div>
					</div>
					<div className="bss-subheader-sm padding-bottom-20">Greyscales</div>
					<br/>
					<div className="left-md-space">
						<div className="row">
							<div className="bss-bg-d-gray col-xs-2 bss-sm-padding bss-light center-vertical"><span className="pull-right">.bss-bg-d-gray</span><span className="pull-left">FONT COLOR</span>
							</div>
							<div className="col-xs-2 center-vertical bss-d-gray">.bss-d-gray</div>
							<div className="col-xs-2 center-vertical">@dark-gray</div>
						</div>
						<div className="row">
							<div className="bss-bg-m-gray col-xs-2 bss-sm-padding bss-light center-vertical"><span className="pull-right">.bss-bg-m-gray</span>
							</div>
							<div className="col-xs-2 center-vertical bss-m-gray">.bss-m-gray</div>
							<div className="col-xs-2 center-vertical">@medium-gray</div>
						</div>
						<div className="row">
							<div className="bss-bg-l-gray col-xs-2 bss-sm-padding bss-light center-vertical"><span className="pull-right">.bss-bg-l-gray</span><span className="pull-left">ICONOGRAPHY</span>
							</div>
							<div className="col-xs-2 center-vertical bss-l-gray">.bss-l-gray</div>
							<div className="col-xs-2 center-vertical">@light-gray</div>
						</div>
					</div>
					<br/>
					<div className="left-md-space">
						<div className="row">
							<div className="bss-bg-gray-1 col-xs-2 bss-sm-padding center-vertical"><span className="pull-right">.bss-bg-gray-1</span>
							</div>
							<div className="bss-bg-l-gray bss-sm-padding col-xs-2 center-vertical bss-gray-1">.bss-gray-1</div>
							<div className="col-xs-2 center-vertical">@gray1</div>
						</div>
						<div className="row">
							<div className="bss-bg-gray-2 col-xs-2 bss-sm-padding center-vertical"><span className="pull-right">.bss-bg-gray-2</span>
							</div>
							<div className="bss-bg-l-gray bss-sm-padding col-xs-2 center-vertical bss-gray-2">.bss-gray-2</div>
							<div className="col-xs-2 center-vertical">@gray2</div>
						</div>
						<div className="row">
							<div className="bss-bg-gray-3 col-xs-2 bss-sm-padding center-vertical"><span className="pull-right">.bss-bg-gray-3</span>
							</div>
							<div className="bss-bg-l-gray bss-sm-padding col-xs-2 center-vertical bss-gray-3">.bss-gray-3</div>
							<div className="col-xs-2 center-vertical">@gray3</div>
						</div>
						<div className="row">
							<div className="bss-bg-gray-4 col-xs-2 bss-sm-padding center-vertical"><span className="pull-right">.bss-bg-gray-4</span><span className="pull-left">HOVER</span>
							</div>
							<div className="bss-bg-l-gray bss-sm-padding col-xs-2 center-vertical bss-gray-4">.bss-gray-4</div>
							<div className="col-xs-2 center-vertical">@gray4</div>
						</div>
						<div className="row">
							<div className="bss-bg-gray-5 col-xs-2 bss-sm-padding center-vertical"><span className="pull-right">.bss-bg-gray-5</span>
							</div>
							<div className="bss-bg-l-gray bss-sm-padding col-xs-2 center-vertical bss-gray-5">.bss-gray-5</div>
							<div className="col-xs-2 center-vertical">@gray5</div>
						</div>
						<div className="row">
							<div className="bss-bg-gray-6 col-xs-2 bss-sm-padding center-vertical"><span className="pull-right">.bss-bg-gray-6</span><span className="pull-left">BREAKLINES</span>
							</div>
							<div className="bss-bg-l-gray bss-sm-padding col-xs-2 center-vertical bss-gray-6">.bss-gray-6</div>
							<div className="col-xs-2 center-vertical">@gray6</div>
						</div>
						<div className="row">
							<div className="bss-bg-gray-7 col-xs-2 bss-sm-padding center-vertical"><span className="pull-right">.bss-bg-gray-7</span>
							</div>
							<div className="bss-bg-l-gray bss-sm-padding col-xs-2 center-vertical bss-gray-7">.bss-gray-7</div>
							<div className="col-xs-2 center-vertical">@gray7</div>
						</div>
						<div className="row">
							<div className="bss-bg-gray-8 col-xs-2 bss-sm-padding center-vertical"><span className="pull-right">.bss-bg-gray-8</span><span className="pull-left">BREAKLINES</span>
							</div>
							<div className="bss-bg-l-gray bss-sm-padding col-xs-2 center-vertical bss-gray-8">.bss-gray-8</div>
							<div className="col-xs-2 center-vertical">@gray8</div>
						</div>
						<div className="row">
							<div className="bss-bg-gray-9 col-xs-2 bss-sm-padding center-vertical"><span className="pull-right">.bss-bg-gray-9</span>
							</div>
							<div className="bss-bg-l-gray bss-sm-padding col-xs-2 center-vertical bss-gray-9">.bss-gray-9</div>
							<div className="col-xs-2 center-vertical">@gray9</div>
						</div>
						<div className="row">
							<div className="bss-bg-gray-10 col-xs-2 bss-sm-padding center-vertical"><span className="pull-right">.bss-bg-gray-10</span>
							</div>
							<div className="bss-bg-l-gray bss-sm-padding col-xs-2 center-vertical bss-gray-10">.bss-gray-10</div>
							<div className="col-xs-2 center-vertical">@gray10</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
});
