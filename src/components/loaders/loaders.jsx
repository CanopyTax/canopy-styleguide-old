var React = require('react');
var Highlight = require('react-highlight');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="bss-flexible-focus bss-card">
				<div className="bss-card__header bss-subheader">
					Loaders
				</div>
				<div className="bss-card__body">
					<button className="bss-btn +primary +large">
						<span className="bss-loader">
							<span></span>
							<span></span>
							<span></span>
						</span>
					</button>
				</div>
			</div>
		)
	}
});
