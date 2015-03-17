var React = require('react');
module.exports = React.createClass({
		render: function() {
			return (
				<div className="bss-fixed-focus bss-card">
					<div className="bss-card__header">
						<h3 className="bss-subheader">Buttons</h3>
					</div>
					<div className="bss-card__body">

						<div className="bss-subheader-sm bss-margin-bottom-8">Raised Buttons</div>
						<div className="row">
							<div className="col-xs-12">
								<button className="bss-btn +primary bss-margin-right-16 bss-margin-bottom-8">primary</button>
								<button className="bss-btn +secondary bss-margin-right-16 bss-margin-bottom-8">secondary</button>
								<a href className="bss-btn +primary bss-margin-right-16 bss-margin-bottom-8">PRIMARY link</a>
								<a href className="bss-btn +secondary bss-margin-right-16 bss-margin-bottom-8">secondary link</a>
							</div>
						</div>
						<div className="row margin-top-24">
							<div className="col-xs-12">
								<button className="bss-btn +primary +disabled bss-margin-right-16 bss-margin-bottom-8">PRIMARY</button>
								<button className="bss-btn +secondary bss-margin-right-16 bss-margin-bottom-8" disabled>secondary</button>
								<a href className="bss-btn +primary +disabled bss-margin-right-16 bss-margin-bottom-8">PRIMARY link</a>
								<a href className="bss-btn +secondary +disabled bss-margin-right-16 bss-margin-bottom-8">secondary link</a>
							</div>
						</div>

						<br/>

						<div className="bss-subheader-sm">Flat Buttons</div>
						<div className="row">
							<div className="col-xs-12">
								<a href className="bss-link bss-margin-right-16">PRIMARY link</a>
							</div>
						</div>
						<div className="row margin-top-24">
							<div className="col-xs-12">
								<a href className="bss-link +disabled bss-margin-right-16">PRIMARY link</a>
							</div>
						</div>

						<br/>

						<div className="bss-subheader-sm">Icon Button</div>
						<div className="row">
							<div className="col-xs-12">
								<a href className="bss-link"><i className="bs-icon bs-icon-Work"></i></a>
								<a href className="bss-link"><i className="bs-icon bs-icon-Cog"></i></a>
								<a href className="bss-link"><i className="bs-icon bs-icon-Close"></i></a>
								<a href className="bss-link"><i className="bs-icon bs-icon-Help"></i></a>
								<a href className="bss-link"><i className="bs-icon bs-icon-LargeCheck"></i></a>
							</div>
						</div>
					</div>
				</div>
			)
		}
})
