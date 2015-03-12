var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="bss-fixed-focus bss-card">
				<div className="bss-card__header bss-subheader">
					Inputs
				</div>
				<div className="bss-card__body">
					<div className="bss-subheader-sm margin-bottom-12 margin-top-20">Top-aligned Inputs</div>
					<div className="row">
						<div className="col-xs-12">
							<form>
								<div className="form-group">
									<label for="exampleInputEmail1">Email address</label>
									<input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
								</div>
								<div className="form-group has-error">
									<label for="exampleInputPassword1">Password</label>
									<input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
									<span className="help-block">This is an error!</span>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
});
