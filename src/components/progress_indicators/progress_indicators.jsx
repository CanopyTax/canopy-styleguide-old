var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<div className="cps-flexible-focus cps-card">
					<div className="cps-card__header cps-subheader">
						Progress indicators
					</div>
					<div className="cps-card__body">
						<div class="cps-card-table cps-card">
							<table>
								<thead>
									<tr>
										<th>Attribute</th>
										<th>Options</th>
										<th>Default</th>
										<th>Description</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>min-label</td>
										<td><i>string</i></td>
										<td>0%</td>
										<td>The text that appears over the left-most side of the progress bar, usually indicating the minimum possible value.</td>
									</tr>
									<tr>
										<td>max-label</td>
										<td><i>string</i></td>
										<td>100%</td>
										<td>The text that appears over the right-most side of the progress bar, usually indicating the maximum possible value.</td>
									</tr>
									<tr>
										<td>progress-bar-color</td>
										<td><i>string</i></td>
										<td>#67BB6A</td>
										<td>The browser-interpretable color that the progress indicator will be.</td>
									</tr>
									<tr>
										<td>progress-bar-border-color</td>
										<td><i>string</i></td>
										<td>#67BB6A</td>
										<td>The browser-interpretable color that the progress indicator's border will be.</td>
									</tr>
									<tr>
										<td>progress-percent</td>
										<td><i>integer</i></td>
										<td>0</td>
										<td>The value, inclusive between 0 and 100, that indicates the amount complete.</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>

				<cp-edit-render-code dangerouslySetInnerHTML={ {__html:
`<cp-progress-bar id="progressBar1" progress-percent="50" min-label="Jun 2" max-label="Sep 21"></cp-progress-bar>` } } />
			</div>
		)
	}
});