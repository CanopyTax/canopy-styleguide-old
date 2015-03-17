var React = require('react');
var Highlight = require('react-highlight');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="bss-fixed-focus">
				<div className="bss-card">
					<div className="bss-card__header bss-subheader">
						Toasters & Banners
					</div>
					<div className="bss-card__body">
						<div className="bss-toaster +general">
							<span className="bss-toaster__message">Error: Please contact support</span>
							<a href>RETRY</a>
						</div>
						<div className="bss-toaster +success">
							<span className="bss-toaster__message">Client updated successfully</span>
							<a href>UNDO</a>
						</div>
						<div className="bss-toaster +info">
							<span className="bss-toaster__message">this is working!</span>
						</div>
						<div className="bss-toaster +warning">
							<span className="bss-toaster__message">I really want to  see how well it does in this scenario</span>
							<a href>DISMISS</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
});
