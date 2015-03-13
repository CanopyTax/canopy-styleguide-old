var React = require('react');
var Highlight = require('react-highlight');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="bss-fixed-focus bss-card">
				<div className="bss-card__header bss-subheader">
					Inputs
				</div>
				<div className="bss-card__body">
					<div className="bss-subheader-sm bottom-md-space">Top-aligned Inputs</div>
					<div className="row">
						<div className="col-xs-12">
							<form>
								<div className="form-group">
									<label for="exampleInputEmail1">Email address</label>
									<input type="text" className="form-control" placeholder="Enter email"/>
									<span className="help-block">Example help block</span>
								</div>
								<div className="form-group has-error has-feedback">
									<label for="exampleInputPassword1">Phone Number</label>
									<input type="text" className="form-control" value="234-343-3434"/>
									<span className="bs-icon-Close form-control-feedback" aria-hidden="true"></span>
									<span className="help-block">This is an error!</span>
								</div>
								<div className="form-group">
									<label for="exampleInputPassword1">Disabled</label>
									<input type="text" className="form-control"value="234-343-3434" disabled="true"/>
								</div>
							</form>
						</div>
					</div>

				<Highlight className="html">
				{
`<form>
  <div class="form-group">
     <label for="exampleInputEmail1">Email address</label>
     <input type="text" class="form-control" placeholder="Enter email"/>
     <span class="help-block">Example help block</span>
  </div>
</form>`
				}
				</Highlight>

					<div className="bss-subheader-sm top-lg-space bottom-md-space">Right-aligned Inputs</div>
					<div className="row">
						<div className="col-xs-12">
							<form className="form-horizontal">
								<div className="form-group">
									<label for="exampleInputEmail1" className="col-xs-2">Email address</label>
									<div className="col-xs-10">
										<input type="text" className="form-control" placeholder="Enter email"/>
										<span className="help-block">Example help block</span>
									</div>
								</div>
								<div className="form-group has-error has-feedback">
									<label for="exampleInputPassword1" className="col-xs-2">Phone Number</label>
									<div className="col-xs-10">
										<input type="text" className="form-control" value="234-343-3434"/>
										<span className="bs-icon-Close form-control-feedback" aria-hidden="true"></span>
										<span className="help-block">This is an error!</span>
									</div>
								</div>
								<div className="form-group">
									<label for="exampleInputPassword1" className="col-xs-2">Disabled</label>
									<div className="col-xs-10">
										<input type="text" className="form-control"value="234-343-3434" disabled="true"/>
									</div>
								</div>
							</form>
						</div>
					</div>

				<Highlight className="html">
				{
`<form class="form-horizontal">
  <div class="form-group">
    <label for="exampleInputEmail1" class="col-xs-2">Email address</label>
    <div class="col-xs-10">
      <input type="text" class="form-control" placeholder="Enter email"/>
      <span class="help-block">Example help block</span>
    </div>
  </div>
</form>`
				}
				</Highlight>

				</div>
			</div>
		)
	}
});
