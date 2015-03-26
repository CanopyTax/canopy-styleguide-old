var React = require('react');
var Highlight = require('react-highlight');

module.exports = React.createClass({
	render: function() {
		return (
		      <div>
				<div className="bss-fixed-focus bss-card">
					<div className="bss-card__header ">
						Lists
					</div>
					<div className="bss-card__body">

						<div className="bss-subheader-sm bss-margin-bottom-8">Inline Lists</div>
						<div className="bss-row">
							<div className="bss-col-xs-4">
								<ul className="bss-list-inline +pipes">
									<li>active</li>
									<li>archived</li>
									<li>deleted</li>
								</ul>
							</div>
							<div className="bss-col-xs-4">
								<ul className="bss-list-inline">
									<li><a href><i className="bss-icon bss-icon-list"></i></a></li>
									<li><a href><i className="bss-icon bss-icon-grid-view"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<Highlight className="html">
				{
`<ul class="bss-list-inline +pipes">
  <li>active</li>
  <li>archived</li>
  <li>deleted</li>
</ul>


<ul class="bss-list-inline">
  <li><a href><i class="bss-icon bss-icon-list"></i></a></li>
  <li><a href><i class="bss-icon bss-icon-grid-view"></i></a></li>
</ul>
`
				}
				</Highlight>
			</div>
		);
	}
});
