var React = require('react');
var Highlight = require('react-highlight');

module.exports = React.createClass({
	render: function() {
		return (
		<div>
			<div className="bss-flexible-focus bss-card">
				<div className="bss-card__header bss-subheader">
					Inputs
				</div>
				<div className="bss-card__body">
					<div className="bss-subheader-sm bss-margin-bottom-24">Top-aligned Inputs</div>
					<div className="bss-row">
						<div className="bss-col-xs-12">
							<form>
								<div className="bss-form-group">
									<label for="exampleInputEmail1">Full Name</label>
									<input type="text" className="bss-form-control" placeholder="Enter name"/>
								</div>
								<div className="bss-form-group bss-has-feedback">
									<label for="exampleInputEmail1">Email address</label>
									<div className="bss-row">
										<div className="bss-col-xs-5">
											<input type="text" className="bss-form-control" placeholder="Enter email"/>
											<span className="bss-icon-client bss-form-control-feedback" aria-hidden="true"></span>
											<span className="bss-error-block">This error message is hidden unless bss-has-error is present</span>
											<span className="bss-help-block">Example help block</span>
										</div>
										<div className="bss-col-xs-6">
											<span className="bss-form-help-block"><a href className="bss-link bss-padding-left-4 bss-padding-right-4"><i className="bss-icon bss-icon-help bss-light-gray"></i> <span className="bss-info bss-padding-left-8">Need help?</span></a></span>
										</div>
									</div>
								</div>
								<div className="bss-form-group bss-has-error">

										<label for="exampleInputPassword1">Phone Number</label>
										<input type="text" className="bss-form-control" value="234-343-3434"/>
										<span className="bss-icon-error bss-form-control-feedback" aria-hidden="true"></span>
										<span className="bss-error-block">This is an error!</span>

								</div>
								<div className="bss-form-group">
									<label for="exampleInputPassword1">Disabled</label>
									<input type="text" className="bss-form-control" value="234-343-3434" disabled="true"/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>

				<Highlight className="html">
				{
`<form>
  <div class="bss-form-group">
    <label for="exampleInputEmail1">Full Name</label>
    <input type="text" class="bss-form-control" placeholder="Enter name"/>
  </div>
  <div class="bss-form-group bss-has-feedback">
    <label for="exampleInputEmail1">Email address</label>
    <div class="bss-row">
      <div class="bss-col-xs-5">
        <input type="text" class="bss-form-control" placeholder="Enter email"/>
        <span class="bss-icon-client bss-form-control-feedback" aria-hidden="true"></span>
        <span class="bss-error-block">This error message is hidden unless bss-has-error is present</span>
        <span class="bss-help-block">Example help block</span>
      </div>
      <div className="bss-col-xs-6">
        <span class="bss-form-help-block"><a href class="bss-link bss-padding-left-4 bss-padding-right-4"><i class="bss-icon bss-icon-help bss-light-gray"></i> <span class="bss-info bss-padding-left-8">Need help?</span></a></span>
      </div>
    </div>
  </div>
  <div class="bss-form-group bss-has-error">
      <label for="exampleInputPassword1">Phone Number</label>
      <input type="text" class="bss-form-control" value="234-343-3434"/>
      <span class="bss-icon-error bss-form-control-feedback" aria-hidden="true"></span>
      <span class="bss-error-block">This is an error!</span>
  </div>
  <div class="bss-form-group">
    <label for="exampleInputPassword1">Disabled</label>
    <input type="text" class="bss-form-control" value="234-343-3434" disabled="true"/>
  </div>
</form>`
				}
				</Highlight>

			<div className="bss-flexible-focus bss-card">
				<div className="bss-card__body">
					<div className="bss-subheader-sm bss-margin-bottom-16 bss-margin-top-24">Right-aligned Inputs</div>
					<div className="bss-row">
						<div className="bss-col-xs-12">
							<form className="bss-form-horizontal">
								<div className="bss-form-group">
									<label for="exampleInputEmail1" className="bss-col-xs-2">Full Name</label>
									<div className="bss-col-xs-3">
										<input type="text" className="bss-form-control" placeholder="Enter name"/>
									</div>
								</div>
								<div className="bss-form-group bss-has-feedback bss-has-error">
									<label for="exampleInputEmail1" className="bss-col-xs-2">Email address</label>
									<div className="bss-col-xs-3">
										<input type="text" className="bss-form-control" placeholder="Enter email"/>
										<span className="bss-icon-client bss-form-control-feedback" aria-hidden="true"></span>
										<span className="bss-error-block">This error message is hidden unless bss-has-error is present</span>
										<span className="bss-help-block">Example help block</span>
									</div>
								</div>
								<div className="bss-form-group bss-has-error">
									<label for="exampleInputPassword1" className="bss-col-xs-2">Phone Number</label>
									<div className="bss-col-xs-6">
										<input type="text" className="bss-form-control" value="234-343-3434"/>
										<span className="bss-icon-error bss-form-control-feedback" aria-hidden="true"></span>
										<span className="bss-error-block">This is an error!</span>
									</div>
								</div>
								<div className="bss-form-group">
									<label for="exampleInputPassword1" className="bss-col-xs-2">Disabled</label>
									<div className="bss-col-xs-10">
										<input type="text" className="bss-form-control"value="234-343-3434" disabled="true"/>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>

				<Highlight className="html">
				{
`<form class="bss-form-horizontal">
  <div class="bss-form-group">
    <label for="exampleInputEmail1" class="bss-col-xs-2">Full Name</label>
    <div class="bss-col-xs-3">
      <input type="text" class="bss-form-control" placeholder="Enter name"/>
    </div>
  </div>
  <div class="bss-form-group bss-has-feedback bss-has-error">
    <label for="exampleInputEmail1" class="bss-col-xs-2">Email address</label>
    <div class="bss-col-xs-3">
      <input type="text" className="bss-form-control" placeholder="Enter email"/>
      <span class="bss-icon-client bss-form-control-feedback" aria-hidden="true"></span>
      <span class="bss-error-block">This error message is hidden unless bss-has-error is present</span>
      <span class="bss-help-block">Example help block</span>
    </div>
  </div>
  <div class="bss-form-group bss-has-error">
    <label for="exampleInputPassword1" class="bss-col-xs-2">Phone Number</label>
    <div class="bss-col-xs-6">
      <input type="text" class="bss-form-control" value="234-343-3434"/>
      <span class="bss-icon-error bss-form-control-feedback" aria-hidden="true"></span>
      <span class="bss-error-block">This is an error!</span>
    </div>
  </div>
  <div class="bss-form-group">
    <label for="exampleInputPassword1" class="bss-col-xs-2">Disabled</label>
    <div class="bss-col-xs-10">
      <input type="text" class="bss-form-control"value="234-343-3434" disabled="true"/>
    </div>
  </div>
</form>`
				}
				</Highlight>

			<div className="bss-flexible-focus bss-card">
				<div className="bss-card__body">
					<div className="bss-subheader-sm bss-margin-bottom-24 bss-margin-top-24">Inline Form</div>
					<div className="bss-row bss-padding-bottom-16">
						<div className="bss-col-xs-12">
							<form className="bss-form-inline">
								<div className="bss-form-group bss-has-feedback">
									<label for="exampleInputName2">Email</label>
									<input type="text" className="bss-form-control" placeholder="Enter email"/>
									<span className="bss-icon-client bss-form-control-feedback" aria-hidden="true"></span>
								</div>
								<div className="bss-form-group bss-has-error">
									<label for="exampleInputName2">Phone</label>
									<input type="text" className="bss-form-control" value="234-343-3434"/>
									<span className="bss-icon-error bss-form-control-feedback" aria-hidden="true"></span>
								</div>
								<div className="bss-form-group">
									<input type="text" className="bss-form-control" value="234-343-3434" disabled="true"/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<Highlight className="html">
{
`<form class="bss-form-inline">
  <div class="bss-form-group bss-has-feedback">
    <label for="exampleInputName2">Email</label>
    <input type="text" class="bss-form-control" placeholder="Enter email"/>
    <span class="bss-icon-client bss-form-control-feedback" aria-hidden="true"></span>
  </div>
  <div class="bss-form-group bss-has-error">
    <label for="exampleInputName2">Phone</label>
    <input type="text" class="bss-form-control" value="234-343-3434"/>
    <span class="bss-icon-error bss-form-control-feedback" aria-hidden="true"></span>
  </div>
  <div class="bss-form-group">
    <input type="text" class="bss-form-control" value="234-343-3434" disabled="true"/>
  </div>
</form>`
}
				</Highlight>


			<div className="bss-flexible-focus bss-card">
				<div className="bss-card__body">
					<div className="bss-subheader-sm bss-margin-bottom-24 bss-margin-top-24">Auto sized Inputs</div>
					<div className="bss-row bss-padding-bottom-16">
						<div className="bss-col-xs-12">
							<form className="bss-form-horizontal">
								<div className="bss-form-group-resize">
									<label for="Email" className="bss-col-xs-2">Phone</label>
									<div className="bss-col-xs-8">
										<input type="text" className="bss-form-control-resize" placeholder="Enter email"/>
									</div>
								</div>
								<div className="bss-form-group-resize">
									<label for="Email" className="bss-col-xs-2">Email</label>
									<div className="bss-col-xs-8">
										<input type="text" className="bss-form-control-resize" placeholder="Enter email"/>
									</div>
								</div>
								<div className="bss-form-group-resize">
									<label for="Email" className="bss-col-xs-2">Address 1</label>
									<div className="bss-col-xs-8">
										<input type="text" className="bss-form-control-resize" placeholder="Enter email"/>
									</div>
								</div>
								<div className="bss-form-group-resize bss-has-error">
									<label for="Email" className="bss-col-xs-2">Adress 2</label>
									<div className="bss-col-xs-8">
										<input type="text" className="bss-form-control-resize" placeholder="Enter email" value="234-343-3434"/>
										<span className="bss-error-block">This is an error!</span>
									</div>
								</div>
								<div className="bss-form-group-resize">
									<label for="Phone" className="bss-col-xs-2">Zip</label>
									<div className="bss-col-xs-4">
										<input type="text" className="bss-form-control-resize" value="234-343-3434" readonly="readonly"/>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<Highlight className="html">
{
`<form class="bss-form-inline">
<div class="bss-form-group-resize">
  <label for="Email" class="bss-col-xs-2">Address 1</label>
  <div class="bss-col-xs-8">
    <input type="text" class="bss-form-control-resize" placeholder="Enter email"/>
  </div>
</div>
<div className="bss-form-group-resize bss-has-error">
  <label for="Email" class="bss-col-xs-2">Adress 2</label>
  <div class="bss-col-xs-8">
    <input type="text" class="bss-form-control-resize" placeholder="Enter email" value="234-343-3434"/>
    <span class="bss-error-block">This is an error!</span>
  </div>
</div>
<div class="bss-form-group-resize">
  <label for="Phone" class="bss-col-xs-2">Zip</label>
  <div class="bss-col-xs-4">
    <input type="text" class="bss-form-control-resize" value="234-343-3434" readonly="readonly"/>
  </div>
</div>
</form>`
}
				</Highlight>
		</div>
		)
	}
});
