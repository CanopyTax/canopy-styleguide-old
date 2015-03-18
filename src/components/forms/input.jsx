var React = require('react');
var Highlight = require('react-highlight');

module.exports = React.createClass({
	render: function() {
		return (
		<div>
			<div className="bss-fixed-focus bss-card">
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
								<div className="bss-form-group">
									<label for="exampleInputEmail1">Email address</label>
									<input type="text" className="bss-form-control" placeholder="Enter email"/>
									<span className="bss-help-block">Example help block</span>
								</div>
								<div className="bss-form-group bss-has-error bss-has-feedback">
									<label for="exampleInputPassword1">Phone Number</label>
									<input type="text" className="bss-form-control" value="234-343-3434"/>
									<span className="bs-icon-Error bss-form-control-feedback" aria-hidden="true"></span>
									<span className="bss-help-block">This is an error!</span>
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
     <label for="exampleInputEmail1">Email address</label>
     <input type="text" class="bss-form-control" placeholder="Enter email"/>
     <span class="bss-help-block">Example help block</span>
  </div>
  <div class="bss-form-group bss-has-error bss-has-feedback">
    <label for="exampleInputPassword1">Phone Number</label>
    <input type="text" class="bss-form-control" value="234-343-3434"/>
    <span class="bs-icon-Error bss-form-control-feedback" aria-hidden="true"></span>
    <span class="bss-help-block">This is an error!</span>
  </div>
  <div class="bss-form-group">
    <label for="exampleInputPassword1">Disabled</label>
    <input type="text" class="bss-form-control" value="234-343-3434" disabled="true"/>
  </div>
</form>`
				}
				</Highlight>

			<div className="bss-fixed-focus bss-card">
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
								<div className="bss-form-group">
									<label for="exampleInputEmail1" className="bss-col-xs-2">Email address</label>
									<div className="bss-col-xs-3">
										<input type="text" className="bss-form-control" placeholder="Enter email"/>
										<span className="bss-help-block">Example help block</span>
									</div>
								</div>
								<div className="bss-form-group bss-has-error bss-has-feedback">
									<label for="exampleInputPassword1" className="bss-col-xs-2">Phone Number</label>
									<div className="bss-col-xs-6">
										<input type="text" className="bss-form-control" value="234-343-3434"/>
										<span className="bs-icon-Error bss-form-control-feedback" aria-hidden="true"></span>
										<span className="bss-help-block">This is an error!</span>
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
    <label for="exampleInputEmail1" class="bss-col-xs-2">Email address</label>
    <div class="bss-col-xs-3">
      <input type="text" class="bss-form-control" placeholder="Enter email"/>
      <span class="bss-help-block">Example help block</span>
    </div>
  </div>
</form>`
				}
				</Highlight>

			<div className="bss-fixed-focus bss-card">
				<div className="bss-card__body">
					<div className="bss-subheader-sm bss-margin-bottom-24 bss-margin-top-24">Inline Form</div>
					<div className="bss-row bss-padding-bottom-16">
						<div className="bss-col-xs-12">
							<form className="bss-form-inline">
								<div className="bss-form-group">
									<label for="exampleInputName2">Email</label>
									<input type="text" className="bss-form-control" placeholder="Enter email"/>
								</div>
								<div className="bss-form-group bss-has-error bss-has-feedback">
									<label for="exampleInputName2">Phone</label>
									<input type="text" className="bss-form-control" value="234-343-3434"/>
									<span className="bs-icon-Error bss-form-control-feedback" aria-hidden="true"></span>
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
  <div class="bss-form-group">
    <label for="exampleInputName2">Email</label>
    <input type="text" class="bss-form-control" placeholder="Enter email"/>
  </div>
  <div class="bss-form-group bss-has-error bss-has-feedback">
    <label for="exampleInputName2">Phone</label>
    <input type="text" class="bss-form-control" value="234-343-3434"/>
    <span class="bs-icon-Error bss-form-control-feedback" aria-hidden="true"></span>
  </div>
  <div class="bss-form-group">
    <input type="text" class="bss-form-control" value="234-343-3434" disabled="true"/>
  </div>
</form>`
}
				</Highlight>

		</div>
		)
	}
});
