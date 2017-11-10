import React from 'react';

module.exports = class extends React.Component{
	render() {
		return (
			<div className="cps-flexible-focus cps-card">
				<div className="cps-card__header cps-subheader">
					Typography
				</div>
				<div className="cps-card__body">
					<div className="cps-row cps-wt-light">
						<div className="cps-col-xs-2">
							<span className="cps-pull-right">LIGHT</span>
						</div>
						<div className="cps-col-xs-2">
							<span className="cps-pull-right">.cps-wt-light</span>
						</div>
						<div className="cps-col-xs-8">An economy based on endless growth is unsustainable</div>
					</div>
				</div>
				<hr />
				<div className="cps-card__body">
					<div className="cps-row cps-wt-regular">
						<div className="cps-col-xs-2">
							<span className="cps-pull-right">REGULAR</span>
						</div>
						<div className="cps-col-xs-2">
							<span className="cps-pull-right">.cps-wt-regular</span>
						</div>
						<div className="cps-col-xs-8">
							<div>
								An economy based on endless growth is unsustainable
							</div>
							<div>
								* Regular is the standard weight throughout the app
							</div>
						</div>
					</div>
				</div>
				<hr />
				<div className="cps-card__body">
					<div className="cps-row cps-wt-semibold">
						<div className="cps-col-xs-2">
							<span className="cps-pull-right">SEMIBOLD</span>
						</div>
						<div className="cps-col-xs-2">
							<span className="cps-pull-right">.cps-wt-semibold</span>
						</div>
						<div className="cps-col-xs-8">An economy based on endless growth is unsustainable</div>
					</div>
				</div>
				<hr />
				<div className="cps-card__body">
					<div className="cps-row cps-wt-bold">
						<div className="cps-col-xs-2">
							<span className="cps-pull-right">BOLD</span>
						</div>
						<div className="cps-col-xs-2">
							<span className="cps-pull-right">.cps-wt-bold</span>
						</div>
						<div className="cps-col-xs-8">An economy based on endless growth is unsustainable</div>
					</div>
				</div>
				<hr />
				<div className="cps-card__body">
					<div className="cps-row">
						<div className="cps-col-xs-2">
							<span className="cps-pull-right">LARGE HEADER</span>
						</div>
						<div className="cps-col-xs-2">
							<span className="cps-pull-right">.cps-header</span>
						</div>
						<div className="cps-col-xs-8 cps-header">
							<div>Font Size 40px</div>
							<div>Line Height 52px</div>
						</div>
					</div>
				</div>
				<hr />
				<div className="cps-card__body">
					<div className="cps-row">
						<div className="cps-col-xs-2">
							<span className="cps-pull-right">HEADER</span>
						</div>
						<div className="cps-col-xs-2">
							<span className="cps-pull-right">.cps-header-sm</span>
						</div>
						<div className="cps-col-xs-8 cps-header-sm">
							<div>Font Size 32px</div>
							<div>Line Height 44px</div>
						</div>
					</div>
				</div>
				<hr />
				<div className="cps-card__body">
					<div className="cps-row ">
						<div className="cps-col-xs-2">
							<span className="cps-pull-right">SUBHEADER</span>
						</div>
						<div className="cps-col-xs-2">
							<span className="cps-pull-right">.cps-subheader</span>
						</div>
						<div className="cps-col-xs-8 cps-subheader">
							<div>Font Size 24px</div>
							<div>Line Height 32px</div>
						</div>
					</div>
				</div>
				<hr />
				<div className="cps-card__body">
					<div className="cps-row">
						<div className="cps-col-xs-2">
							<span className="cps-pull-right">SUBHEADER 2</span>
						</div>
						<div className="cps-col-xs-2">
							<span className="cps-pull-right">.cps-subheader-sm</span>
						</div>
						<div className="cps-col-xs-8 cps-subheader-sm">
							<div>Font Size 18px</div>
							<div>Line Height 28px</div>
						</div>
					</div>
				</div>
				<hr />
				<div className="cps-card__body">
					<div className="cps-row">
						<div className="cps-col-xs-2">
							<span className="cps-pull-right">BODY</span>
						</div>
						<div className="cps-col-xs-2">
							<span className="cps-pull-right">.cps-body</span>
						</div>
						<div className="cps-col-xs-8 cps-body">
							<div>Font Size 16px</div>
							<div>Line Height 24px</div>
						</div>
					</div>
				</div>
				<hr />
				<div className="cps-card__body">
					<div className="cps-row">
						<div className="cps-col-xs-2">
							<span className="cps-pull-right">BODY 2</span>
						</div>
						<div className="cps-col-xs-2">
							<span className="cps-pull-right">.cps-body-sm</span>
						</div>
						<div className="cps-col-xs-8 cps-body-sm">
							<div>Font Size 14px</div>
							<div>Line Height 20px</div>
						</div>
					</div>
				</div>
				<hr />
				<div className="cps-card__body">
					<div className="cps-row">
						<div className="cps-col-xs-2">
							<span className="cps-pull-right">CAPTION</span>
						</div>
						<div className="cps-col-xs-2">
							<span className="cps-pull-right">.cps-caption</span>
						</div>
						<div className="cps-col-xs-8 cps-caption">
							<div>Font Size 12px</div>
							<div>Line Height 16px</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
};
