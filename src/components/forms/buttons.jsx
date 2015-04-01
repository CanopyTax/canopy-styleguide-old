var React = require('react');
var Highlight = require('react-highlight');


module.exports = React.createClass({
		render: function() {
			return (
			<div>
				<div className="bss-flexible-focus bss-card">
					<div className="bss-card__header">
						<h3 className="bss-subheader">Buttons</h3>
					</div>
					<div className="bss-card__body">

						<div className="bss-subheader-sm bss-margin-bottom-8">Raised Buttons</div>
						<div className="bss-row bss-margin-bottom-12">
							<div className="bss-col-xs-12">
								<button className="bss-btn +primary">primary</button>
								<button className="bss-btn +secondary">secondary</button>
								<a href className="bss-btn +primary">PRIMARY link</a>
								<a href className="bss-btn +secondary">secondary link</a>
								<button className="bss-btn +primary"><span className="bss-icon bss-icon-upload"></span> primary</button>
								<a href className="bss-btn +primary">PRIMARY link <span className="bss-icon bss-icon-upload"></span></a>
							</div>
						</div>
						<div className="bss-row margin-top-24">
							<div className="bss-col-xs-12">
								<button className="bss-btn +primary +disabled">PRIMARY</button>
								<button className="bss-btn +secondary" disabled>secondary</button>
								<a href className="bss-btn +primary +disabled">PRIMARY link</a>
								<a href className="bss-btn +secondary +disabled">secondary link</a>
								<button className="bss-btn +primary" disabled><span className="bss-icon bss-icon-upload"></span> primary</button>
								<a href className="bss-btn +primary" disabled>PRIMARY link <span className="bss-icon bss-icon-upload"></span></a>
							</div>
						</div>
					</div>
				</div>

				<Highlight className="html">
				{
`<button class="bss-btn +primary">primary</button>
<button class="bss-btn +secondary">secondary</button>
<a href class="bss-btn +primary">PRIMARY link</a>
<a href class="bss-btn +secondary">secondary link</a>
<button class="bss-btn +primary"><span class="bss-icon bss-icon-upload"></span> primary</button>
<a href class="bss-btn +primary">PRIMARY link <span class="bss-icon bss-icon-upload"></span></a>
`
				}
				</Highlight>

				<div className="bss-flexible-focus bss-card">
					<div className="bss-card__body">
						<div className="bss-subheader-sm">Flat Buttons</div>
						<div className="bss-row">
							<div className="bss-col-xs-12">
								<a href className="bss-link">PRIMARY link</a>
								<a href className="bss-link" disabled="disabled">PRIMARY link</a>
								<a href className="bss-link"><span className="bss-icon bss-icon-lg-check"></span> ACCEPT</a>
								<a href className="bss-link" disabled="disabled"><span className="bss-icon bss-icon-lg-check"></span> PRIMARY link</a>
							</div>
						</div>
					</div>
				</div>
								<Highlight className="html">
				{
`<a href class="bss-link">PRIMARY link</a>
<a href class="bss-link" disabled="disabled">PRIMARY link</a>
<a href class="bss-link"><span class="bss-icon bss-icon-lg-check"></span> ACCEPT</a>
<a href class="bss-link" disabled="disabled"><span class="bss-icon bss-icon-lg-check"></span> PRIMARY link</a>
`
				}
				</Highlight>


				<div className="bss-flexible-focus bss-card">
					<div className="bss-card__body">
						<div className="bss-subheader-sm">Icon Button</div>
						<div className="bss-row">
							<div className="bss-col-xs-12">
								<div className="bss-btn-icon">
									<a href className="bss-link"><span className="bss-icon bss-icon-work"></span></a>
									<a href className="bss-link"><span className="bss-icon bss-icon-cog"></span></a>
									<a href className="bss-link"><span className="bss-icon bss-icon-close"></span></a>
									<a href className="bss-link"><span className="bss-icon bss-icon-help"></span></a>
									<a href className="bss-link"><span className="bss-icon bss-icon-lg-check"></span></a>
								</div>
							</div>
						</div>
					</div>
				</div>


								<Highlight className="html">
				{
`<div className="bss-btn-icon">
  <a href class="bss-link"><span class="bss-icon bss-icon-work"></span></a>
  <a href class="bss-link"><span class="bss-icon bss-icon-cog"></span></a>
</div>`
				}
				</Highlight>


				<div className="bss-flexible-focus bss-card">
					<div className="bss-card__body">
						<div className="bss-subheader-sm">Links</div>
						<div className="bss-row bss-margin-top-16">
							<div className="bss-col-xs-12">
								<a href>this is a standard link</a>
							</div>
						</div>
					</div>
				</div>


								<Highlight className="html">
				{
`<a href>this is a standard link</a>`
				}
				</Highlight>
			</div>
			)
		}
})
