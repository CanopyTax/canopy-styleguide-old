var React = require('react');
var Highlight = require('react-highlight');


module.exports = React.createClass({
		render: function() {
			return (
			<div>
				<div className="bss-fixed-focus bss-card">
					<div className="bss-card__header">
						<h3 className="bss-subheader">Buttons</h3>
					</div>
					<div className="bss-card__body">

						<div className="bss-subheader-sm bss-margin-bottom-8">Raised Buttons</div>
						<div className="bss-row bss-margin-bottom-12">
							<div className="bss-col-xs-12">
								<div className="bss-inline-block bss-margin-right-8"><button className="bss-btn +primary">primary</button></div>
								<div className="bss-inline-block bss-margin-right-8"><button className="bss-btn +secondary">secondary</button></div>
								<div className="bss-inline-block bss-margin-right-8"><a href className="bss-btn +primary">PRIMARY link</a></div>
								<div className="bss-inline-block"><a href className="bss-btn +secondary">secondary link</a></div>
							</div>
						</div>
						<div className="bss-row margin-top-24">
							<div className="bss-col-xs-12">
								<div className="bss-inline-block bss-margin-right-8"><button className="bss-btn +primary +disabled">PRIMARY</button></div>
								<div className="bss-inline-block bss-margin-right-8"><button className="bss-btn +secondary" disabled>secondary</button></div>
								<div className="bss-inline-block bss-margin-right-8"><a href className="bss-btn +primary +disabled">PRIMARY link</a></div>
								<div className="bss-inline-block"><a href className="bss-btn +secondary +disabled">secondary link</a></div>
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

<button class="bss-btn +primary +disabled">PRIMARY</button>
<button class="bss-btn +secondary" disabled>secondary</button>
<a href class="bss-btn +primary +disabled">PRIMARY link</a>
<a href class="bss-btn +secondary +disabled">secondary link</a>
`
				}
				</Highlight>

				<div className="bss-fixed-focus bss-card">
					<div className="bss-card__body">
						<div className="bss-subheader-sm">Flat Buttons</div>
						<div className="bss-row">
							<div className="bss-col-xs-12">
								<a href className="bss-link bss-margin-right-16">PRIMARY link</a>
							</div>
						</div>
						<div className="bss-row margin-top-24">
							<div className="bss-col-xs-12">
								<a href className="bss-link +disabled bss-margin-right-16">PRIMARY link</a>
							</div>
						</div>
					</div>
				</div>
								<Highlight className="html">
				{
`<a href class="bss-link">PRIMARY link</a>
<a href class="bss-link +disabled">PRIMARY link</a>`
				}
				</Highlight>


				<div className="bss-fixed-focus bss-card">
					<div className="bss-card__body">
						<div className="bss-subheader-sm">Icon Button</div>
						<div className="bss-row">
							<div className="bss-col-xs-12">
								<a href className="bss-link"><i className="bss-icon bss-icon-work"></i></a>
								<a href className="bss-link"><i className="bss-icon bss-icon-cog"></i></a>
								<a href className="bss-link"><i className="bss-icon bss-icon-close"></i></a>
								<a href className="bss-link"><i className="bss-icon bss-icon-help"></i></a>
								<a href className="bss-link"><i className="bss-icon bss-icon-lg-check"></i></a>
							</div>
						</div>
					</div>
				</div>


								<Highlight className="html">
				{
`<a href class="bss-link"><i class="bss-icon bss-icon-work"></i></a>
<a href class="bss-link"><i class="bss-icon bss-icon-cog"></i></a>
<a href class="bss-link"><i class="bss-icon bss-icon-close"></i></a>
<a href class="bss-link"><i class="bss-icon bss-icon-help"></i></a>
<a href class="bss-link"><i class="bss-icon bss-icon-lg-check"></i></a>`
				}
				</Highlight>

			</div>
			)
		}
})
