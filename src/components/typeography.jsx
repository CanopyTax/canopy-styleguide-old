var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="bss-fixed-focus bss-card">
				<div className="bss-card__header bss-subheader">
					Typeography
				</div>
				<div className="bss-card__body">
					<div className="row bss-light bottom-md-space">
						<div className="col-xs-2"><span className="pull-right">LIGHT</span>
						</div>
						<div className="col-xs-2"><span className="pull-right">.bss-light</span>
						</div>
						<div className="col-xs-8 bss-text-muted-dark">An economy based on endless growth is unsustainable</div>
					</div>
					<div className="row bss-regular bottom-md-space">
						<div className="col-xs-2"><span className="pull-right">REGULAR</span>
						</div>
						<div className="col-xs-2"><span className="pull-right">.bss-regular</span>
						</div>
						<div className="col-xs-8 bss-text-muted-dark">
							<div>
								An economy based on endless growth is unsustainable
							</div>
							<div>
								Regular is the standard weight throughout the app
							</div>
						</div>
					</div>
					<div className="row bss-semibold bottom-md-space">
						<div className="col-xs-2"><span className="pull-right">SEMIBOLD</span>
						</div>
						<div className="col-xs-2"><span className="pull-right">.bss-semibold</span>
						</div>
						<div className="col-xs-8 bss-text-muted-dark">An economy based on endless growth is unsustainable</div>
					</div>
				</div>
				<div className="bss-card__hr"></div>
				<div className="bss-card__body">
					<div className="row bottom-md-space">
						<div className="col-xs-2"><span className="pull-right">LARGE HEADER</span>
						</div>
						<div className="col-xs-2"><span className="pull-right">.bss-header</span>
						</div>
						<div className="col-xs-8 bss-header bss-text-muted-dark">
							<div>Font Size 40px</div>
							<div>Line Height 52px</div>
						</div>
					</div>
					<div className="row bottom-md-space">
						<div className="col-xs-2"><span className="pull-right">HEADER</span>
						</div>
						<div className="col-xs-2"><span className="pull-right">.bss-header-sm</span>
						</div>
						<div className="col-xs-8 bss-header-sm bss-text-muted-dark">
							<div>Font Size 32px</div>
							<div>Line Height 44px</div>
						</div>
					</div>
					<div className="row bottom-md-space">
						<div className="col-xs-2"><span className="pull-right">SUBHEADER</span>
						</div>
						<div className="col-xs-2"><span className="pull-right">.bss-subheader</span>
						</div>
						<div className="col-xs-8 bss-subheader bss-text-muted-dark">
							<div>Font Size 24px</div>
							<div>Line Height 32px</div>
						</div>
					</div>
					<div className="row bottom-md-space">
						<div className="col-xs-2"><span className="pull-right">SUBHEADER 2</span>
						</div>
						<div className="col-xs-2"><span className="pull-right">.bss-subheader-sm</span>
						</div>
						<div className="col-xs-8 bss-subheader-sm bss-text-muted-dark">
							<div>Font Size 18px</div>
							<div>Line Height 28px</div>
						</div>
					</div>
					<div className="row bottom-md-space">
						<div className="col-xs-2"><span className="pull-right">BODY</span>
						</div>
						<div className="col-xs-2"><span className="pull-right">.bss-body</span>
						</div>
						<div className="col-xs-8 bss-body bss-text-muted-dark">
							<div>Font Size 16px</div>
							<div>Line Height 24px</div>
						</div>
					</div>
					<div className="row bottom-md-space">
						<div className="col-xs-2"><span className="pull-right">BODY 2</span>
						</div>
						<div className="col-xs-2"><span className="pull-right">.bss-body-sm</span>
						</div>
						<div className="col-xs-8 bss-body-sm bss-text-muted-dark">
							<div>Font Size 14px</div>
							<div>Line Height 20px</div>
						</div>
					</div>
					<div className="row bottom-md-space">
						<div className="col-xs-2"><span className="pull-right">CAPTION</span>
						</div>
						<div className="col-xs-2"><span className="pull-right">.bss-caption</span>
						</div>
						<div className="col-xs-8 bss-caption bss-text-muted-dark">
							<div>Font Size 12px</div>
							<div>Line Height 16px</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});
