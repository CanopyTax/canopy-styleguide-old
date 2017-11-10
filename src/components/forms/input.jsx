import React from "react";
import CodeExample from "../../code-example.component.js";

module.exports = class extends React.Component {
	render() {
		return (
			<div>
				<div className="cps-flexible-focus cps-card">
					<div className="cps-card__header cps-subheader">Inputs</div>
				</div>

				<CodeExample title="Top-aligned labels">
					<form>
						<div className="cps-form-group">
							<label htmlFor="exampleInputEmail1">Full Name</label>
							<input
								type="text"
								className="cps-form-control"
								placeholder="Enter name"
							/>
						</div>
						<div className="cps-form-group cps-has-feedback">
							<label htmlFor="exampleInputEmail1">Email address</label>
							<div className="cps-row">
								<div className="cps-col-xs-5">
									<input
										type="text"
										className="cps-form-control"
										placeholder="Enter email"
									/>
									<span
										className="cps-icon-client cps-form-control-feedback"
										aria-hidden="true"
									/>
									<span className="cps-error-block">
										This error message is hidden unless cps-has-error is present
									</span>
									<span className="cps-help-block">Example help block</span>
								</div>
								<div className="cps-col-xs-6">
									<span className="cps-form-help-block">
										<a className="cps-link cps-padding-left-4 cps-padding-right-4">
											<i className="cps-icon cps-icon-help cps-light-gray" />{" "}
											<span className="cps-info cps-padding-left-8">
												Need help?
											</span>
										</a>
									</span>
								</div>
							</div>
						</div>
						<div className="cps-form-group cps-has-error">
							<label htmlFor="exampleInputPhone">Phone Number</label>
							<input
								type="text"
								className="cps-form-control"
								value="234-343-3434"
							/>
							<span
								className="cps-icon-error cps-form-control-feedback"
								aria-hidden="true"
							/>
							<span className="cps-error-block">This is an error!</span>
						</div>
					</form>
				</CodeExample>

				<CodeExample title="Left-aligned labels">
					<form className="cps-form-horizontal">
						<div className="cps-form-group">
							<label
								htmlFor="exampleInputName"
								className="cps-col-xs-2 cps-control-label"
							>
								Full Name
							</label>
							<div className="cps-col-xs-3">
								<input
									type="text"
									className="cps-form-control"
									placeholder="Enter name"
								/>
							</div>
						</div>
						<div className="cps-form-group cps-has-feedback cps-has-error">
							<label
								htmlFor="exampleInputEmail1"
								className="cps-col-xs-2 cps-control-label"
							>
								Email address
							</label>
							<div className="cps-col-xs-3">
								<input
									type="text"
									className="cps-form-control"
									placeholder="Enter email"
								/>
								<span
									className="cps-icon-client cps-form-control-feedback"
									aria-hidden="true"
								/>
								<span className="cps-error-block">
									This error message is hidden unless cps-has-error is present
								</span>
								<span className="cps-help-block">Example help block</span>
							</div>
						</div>
						<div className="cps-form-group cps-has-error">
							<label
								htmlFor="exampleInputPhone"
								className="cps-col-xs-2 cps-control-label"
							>
								Phone Number
							</label>
							<div className="cps-col-xs-6">
								<input
									type="text"
									className="cps-form-control"
									value="234-343-3434"
								/>
								<span
									className="cps-icon-error cps-form-control-feedback"
									aria-hidden="true"
								/>
								<span className="cps-error-block">This is an error!</span>
							</div>
						</div>
						<div className="cps-form-group">
							<label
								htmlFor="exampleInputPhoneDisabled"
								className="cps-col-xs-2 cps-control-label"
							>
								Disabled
							</label>
							<div className="cps-col-xs-10">
								<input
									type="text"
									className="cps-form-control"
									value="234-343-3434"
									disabled="true"
								/>
							</div>
						</div>
					</form>
				</CodeExample>

				<CodeExample title="Input icon badges">
					<form>
						<div className="cps-form-group">
							<div className="cps-input-group">
								<span
									className="cps-input-group-addon cps-icon-addon"
									id="basic-addon1"
								>
									<i className="cps-icon cps-icon-add-person" />
								</span>
								<input
									type="text"
									className="cps-form-control"
									placeholder="Username"
									aria-describedby="basic-addon1"
								/>
							</div>
						</div>
						<div className="cps-form-group">
							<div className="cps-input-group">
								<input
									type="text"
									className="cps-form-control"
									placeholder="Username"
									aria-describedby="basic-addon1"
								/>
								<span
									className="cps-input-group-addon cps-icon-addon"
									id="basic-addon1"
								>
									<i className="cps-icon cps-icon-add-person" />
								</span>
							</div>
						</div>
						<div className="cps-form-group cps-has-error">
							<div className="cps-input-group">
								<span className="cps-input-group-addon" id="basic-addon1">
									#
								</span>
								<input
									type="text"
									className="cps-form-control"
									placeholder="Serial Number"
									aria-describedby="basic-addon1"
								/>
							</div>
							<span className="cps-error-block">This is an error!</span>
						</div>
						<div className="cps-form-group cps-has-feedback">
							<div className="cps-input-group">
								<span
									className="cps-input-group-addon cps-icon-addon cps-bg-primary-green"
									id="basic-addon1"
								>
									<i className="cps-icon cps-icon-lg-check cps-white" />
								</span>
								<input
									type="text"
									className="cps-form-control"
									placeholder="Serial Number"
									aria-describedby="basic-addon1"
								/>
							</div>
							<span className="cps-error-block">This is an error!</span>
						</div>
						<div className="cps-form-group cps-has-error">
							<div className="cps-input-group">
								<span className="cps-input-group-addon" id="basic-addon1">
									#
								</span>
								<input
									type="text"
									className="cps-form-control"
									placeholder="Serial Number"
									aria-describedby="basic-addon1"
								/>
							</div>
							<span className="cps-error-block">This is an error!</span>
						</div>
					</form>
				</CodeExample>

				<CodeExample title="Inline icons within inputs">
					<form className="cps-form-horizontal">
						<div className="cps-form-group cps-has-feedback cps-has-error">
							<label
								htmlFor="exampleInputEmail1"
								className="cps-col-xs-2 cps-control-label"
							>
								Email address
							</label>
							<div className="cps-col-xs-3">
								<input
									type="text"
									className="cps-form-control"
									placeholder="Enter email"
								/>
								<span
									className="cps-icon-client cps-form-control-feedback"
									aria-hidden="true"
								/>
								<span className="cps-error-block">
									This error message is hidden unless cps-has-error is present
								</span>
								<span className="cps-help-block">Example help block</span>
							</div>
						</div>
						<div className="cps-form-group cps-has-error">
							<label
								htmlFor="exampleInputPhone"
								className="cps-col-xs-2 cps-control-label"
							>
								Phone Number
							</label>
							<div className="cps-col-xs-6">
								<input
									type="text"
									className="cps-form-control"
									value="234-343-3434"
								/>
								<span
									className="cps-icon-error cps-form-control-feedback"
									aria-hidden="true"
								/>
								<span className="cps-error-block">This is an error!</span>
							</div>
						</div>
						<div className="cps-form-group cps-has-feedback cps-has-error cps-has-feedback-left">
							<label
								htmlFor="exampleInputEmail1"
								className="cps-col-xs-2 cps-control-label"
							>
								Email address
							</label>
							<div className="cps-col-xs-3">
								<input
									type="text"
									className="cps-form-control"
									placeholder="Enter email"
								/>
								<span
									className="cps-icon-client cps-form-control-feedback"
									aria-hidden="true"
								/>
								<span className="cps-error-block">
									This error message is hidden unless cps-has-error is present
								</span>
								<span className="cps-help-block">Example help block</span>
							</div>
						</div>
						<div className="cps-form-group cps-has-error cps-has-feedback-left">
							<label
								htmlFor="exampleInputPhone"
								className="cps-col-xs-2 cps-control-label"
							>
								Phone Number
							</label>
							<div className="cps-col-xs-6">
								<input
									type="text"
									className="cps-form-control"
									value="234-343-3434"
								/>
								<span
									className="cps-icon-error cps-form-control-feedback"
									aria-hidden="true"
								/>
								<span className="cps-error-block">This is an error!</span>
							</div>
						</div>
					</form>
				</CodeExample>

				<CodeExample title="Horizontal layout">
					<form className="cps-form-inline">
						<div className="cps-form-group cps-has-feedback">
							<label htmlFor="inlineEmail">Email</label>
							<input
								type="text"
								className="cps-form-control"
								placeholder="Enter email"
							/>
							<span
								className="cps-icon-client cps-form-control-feedback"
								aria-hidden="true"
							/>
						</div>
						<div className="cps-form-group cps-has-error">
							<label htmlFor="inlinePhone">Phone</label>
							<input
								type="text"
								className="cps-form-control"
								value="234-343-3434"
							/>
							<span
								className="cps-icon-error cps-form-control-feedback"
								aria-hidden="true"
							/>
						</div>
						<div className="cps-form-group">
							<input
								type="text"
								className="cps-form-control"
								value="234-343-3434"
								disabled="true"
							/>
						</div>
					</form>
				</CodeExample>

				<CodeExample title="Auto-sized inputs">
					<form className="cps-form-horizontal">
						<div className="cps-form-group-resize">
							<label htmlFor="Phone" className="cps-col-xs-2 cps-control-label">
								Phone
							</label>
							<div className="cps-col-xs-8">
								<input
									type="text"
									className="cps-form-control-resize"
									placeholder="Enter phone"
								/>
							</div>
						</div>
						<div className="cps-form-group-resize">
							<label htmlFor="Email" className="cps-col-xs-2 cps-control-label">
								Email
							</label>
							<div className="cps-col-xs-8">
								<input
									type="text"
									className="cps-form-control-resize"
									placeholder="Enter email"
								/>
							</div>
						</div>
						<div className="cps-form-group-resize">
							<label
								htmlFor="Address1"
								className="cps-col-xs-2 cps-control-label"
							>
								Address 1
							</label>
							<div className="cps-col-xs-8">
								<input
									type="text"
									className="cps-form-control-resize"
									placeholder="Enter address 1"
								/>
							</div>
						</div>
						<div className="cps-form-group-resize cps-has-error">
							<label
								htmlFor="Address2"
								className="cps-col-xs-2 cps-control-label"
							>
								Address 2
							</label>
							<div className="cps-col-xs-8">
								<input
									type="text"
									className="cps-form-control-resize"
									placeholder="Enter address2"
									value="234-343-3434"
								/>
								<span className="cps-error-block">This is an error!</span>
							</div>
						</div>
						<div className="cps-form-group-resize">
							<label htmlFor="Zip" className="cps-col-xs-2 cps-control-label">
								Zip
							</label>
							<div className="cps-col-xs-4">
								<input
									type="text"
									className="cps-form-control-resize"
									value="234-343-3434"
									readOnly="readonly"
								/>
							</div>
						</div>
					</form>
				</CodeExample>

				<CodeExample title="Auto-sized inputs -- horizontal layout">
					<form className="cps-form-inline">
						<div className="cps-form-group-resize">
							<label htmlFor="Email">Email</label>
							<input
								type="text"
								className="cps-form-control-resize"
								placeholder="Enter email"
								value="exi@gm.com"
							/>
						</div>
						<div className="cps-form-group-resize">
							<label htmlFor="Phone">Phone</label>
							<input
								type="text"
								className="cps-form-control-resize"
								placeholder="Enter phone"
							/>
						</div>
						<div className="cps-form-group-resize">
							<input
								type="text"
								className="cps-form-control-resize cps-subheader"
								placeholder="Enter zip code"
								value="large font example"
							/>
						</div>
						<div className="cps-form-group-resize cps-has-error">
							<input
								type="text"
								className="cps-form-control-resize"
								placeholder="Error example"
							/>
							<span className="cps-error-block">This is an error</span>
						</div>
					</form>
				</CodeExample>

				<div className="cps-flexible-focus cps-card">
					<div className="cps-card__header cps-subheader">Angular Helpers</div>
					<div className="cps-card__body">
						<b>form-helpers.service.js</b> includes useful form methods:
						<ul>
							<li>
								<b>hasError</b> - Returns true if a form field is invalid or the
								outer form was submitted. Look at <b>edit-user.controller.js</b>{" "}
								and the associated template for an example.
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
};
