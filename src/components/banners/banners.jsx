var React = require('react');
var Highlight = require('react-highlight');

module.exports = React.createClass({
	render: function() {
		return (
		<div>
			<div className="bss-flexible-focus">
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


				<Highlight className="html">
				{
`<div class="bss-toaster +general">
  <span class="bss-toaster__message">Error: Please contact support</span>
  <a href>RETRY</a>
</div>
<div class="bss-toaster +success">
  <span class="bss-toaster__message">Client updated successfully</span>
  <a href>UNDO</a>
</div>
<div class="bss-toaster +info">
  <span class="bss-toaster__message">this is working!</span>
</div>
<div class="bss-toaster +warning">
  <span class="bss-toaster__message">I really want to  see how well it does in this scenario</span>
  <a href>DISMISS</a>
</div>`
				}
				</Highlight>


			<div className="bss-banner-inline">
				<div className="bss-banner-inline__title">Welcome back!</div>
				<div className="bss-banner-inline__content">Here is my message to you!</div>
				<a href className="bss-banner-inline__action">Take Action</a>
			</div>

				<Highlight className="html">
				{
`<div class="bss-banner-inline">
 <div class="bss-banner-inline__title">Welcome back!</div>
 <div class="bss-banner-inline__content">Here is my message to you!</div>
 <a href class="bss-banner-inline__action">Take Action</a>
</div>`
				}
				</Highlight>


			<div className="bss-banner-global">
				<div className="bss-banner-global__content">
					Don't forget to add +tall-top to the secondary nav when using this banner. Also, remove the 3px bss-topnav__bar from the nav too! <a href className="bss-banner-global__action">Take Action</a>
				</div>
				<a href className="bss-pull-right"><i className="bss-icon bss-icon-close"></i></a>
			</div>

							<Highlight className="html">
				{
`<div class="bss-banner-global">
  <div class="bss-banner-global__content">
	Don't forget to add the class '+banner-top' to (i) bss-topnav-secondary, (ii) bss-nav-content, and (iii) bss-flexible-sidenav when using this banner. Also, remove the 3px bss-topnav__bar from the nav too! <a href class="bss-banner-global__action">Take Action</a>
  </div>
  <a href class="bss-pull-right"><i class="bss-icon bss-icon-close"></i></a>
</div>`
				}
				</Highlight>


			<div className="bss-flexible-focus bss-margin-top-16">
				<div className="bss-card">
					<div className="bss-card__body">
						*Don't forget to add the class '+banner-top' to (i) bss-topnav-secondary, (ii) bss-nav-content, and (iii) bss-flexible-sidenav when using the global banner. Also, remove the 3px bss-topnav__bar from the nav too! <a href class="bss-banner-global__action">Take Action</a>
					</div>
				</div>
			</div>

		</div>
		);
	}
});
