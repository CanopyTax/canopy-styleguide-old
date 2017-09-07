var React = require('react');

module.exports = class extends React.Component{
	render() {
		return (
			<div>
				<div className="cps-flexible-focus">
					<div className="cps-card">
						<div className="cps-card__header cps-subheader">
							Toasters & Banners
						</div>
					</div>
				</div>

				<cp-edit-render-code section-title="Toasters" dangerouslySetInnerHTML={ {__html:
`<div class="cps-toaster +general">
	<span class="cps-toaster__message">Error: Please contact support</span>
	<a href>RETRY</a>
</div>
<div class="cps-toaster +success">
	<span class="cps-toaster__message">Client updated successfully</span>
	<a href>UNDO</a>
</div>
<div class="cps-toaster +info">
	<span class="cps-toaster__message">this is working!</span>
</div>
<div class="cps-toaster +warning">
	<span class="cps-toaster__message">I really want to  see how well it does in this scenario</span>
	<a href>DISMISS</a>
</div>`} } />

				<cp-edit-render-code section-title="Banners" dangerouslySetInnerHTML={ {__html:
`<div class="cps-banner-inline">
	<div class="cps-banner-inline__title">Welcome back!</div>
	<div class="cps-banner-inline__content">Here is my message to you!</div>
	<a href class="cps-banner-inline__action">Take Action</a>
</div>`} } />

				<div className="cps-flexible-focus cps-margin-top-16">
					<div className="cps-card">
						<div className="cps-card__body">
							*Don't forget to add the class '+banner-top' to (i) cps-topnav-secondary, (ii) cps-nav-content, and (iii) cps-flexible-sidenav when using the global banner. Also, remove the 3px cps-topnav__bar from the nav too! <a href className="cps-banner-global__action">Take Action</a>
						</div>
					</div>
				</div>
				<cp-edit-render-code section-title="NOTE: This example renders at the top of the page/window" dangerouslySetInnerHTML={ {__html:
`<div class="cps-banner-global">
	<div class="cps-banner-global__content">
		Don't forget to add +tall-top to the secondary nav when using this banner. Also, remove the 3px cps-topnav__bar from the nav too! <a href class="cps-banner-global__action">Take Action</a>
	</div>
	<a href class="cps-pull-right"><i class="cps-icon cps-icon-close"></i></a>
</div>`} } />
			</div>
		);
	}
};
