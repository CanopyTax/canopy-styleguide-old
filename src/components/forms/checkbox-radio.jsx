var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="bss-fixed-focus bss-card">
				<div className="bss-card__header bss-subheader">
					Checkboxes and Radios
				</div>
				<div className="bss-card__body">
					<div className="bss-subheader-sm bottom-sm-space">Inline checkboxes and radios</div>
					<div className="row">
						<div className="col-xs-12">
							<form>
								<label className="radio-inline">
									<input type="radio" value="1" name="testQuestion"/>&nbsp;&nbsp;Yes
								</label>
								<label className="radio-inline">
									<input type="radio" value="1" name="testQuestion"/>&nbsp;&nbsp;No
								</label>
							</form>
						</div>
					</div>
					<div className="row margin-top-16">
						<div className="col-xs-12">
							<label className="checkbox-inline">
								<input type="checkbox" id="inlineCheckbox1" value="option1"/>1
							</label>
							<label className="checkbox-inline">
								<input type="checkbox" id="inlineCheckbox2" value="option2"/>2
							</label>
							<label className="checkbox-inline">
								<input type="checkbox" id="inlineCheckbox3" value="option3"/>3
							</label>
						</div>
					</div>
				</div>
				<div className="bss-card__hr"></div>
				<div className="bss-card__body">
					<div className="bss-subheader-sm margin-bottom-12 margin-top-20">Stacked checkboxes and radios</div>
					<div className="row">
						<div className="col-xs-12">
							<form>
								<div className="radio">
									<label>
										<input type="radio" name="optionsRadios" id="optionsRadios1" value="option1"/>Option one is this and that&mdash;be sure to include why it's great
									</label>
								</div>
								<div className="radio">
									<label>
										<input type="radio" name="optionsRadios" id="optionsRadios1" value="option1"/>Option two is this and that&mdash;be sure to include why it's great
									</label>
								</div>
								<div className="radio">
									<label>
										<input type="radio" name="optionsRadios" id="optionsRadios1" value="option1"/>Option one is this and that&mdash;be sure to include why it's great
									</label>
								</div>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-12">
							<form>
								<div className="checkbox">
									<label>
										<input type="checkbox"/>Check me out
									</label>
								</div>
								<div className="checkbox">
									<label>
										<input type="checkbox"/>Check me out
									</label>
								</div>
								<div className="checkbox">
									<label>
										<input type="checkbox"/>Check me out
									</label>
								</div>

							</form>
						</div>
					</div>
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
