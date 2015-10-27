var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
		<div>
			<div className="cps-flexible-focus cps-card">
				<div className="cps-card__header cps-subheader">
					Inputs
				</div>
			</div>

			<cp-edit-render-code section-title="Top-aligned labels" dangerouslySetInnerHTML={ {__html:
`<form>
	<div class="cps-form-group">
		<label htmlFor="exampleInputEmail1">Full Name</label>
		<input type="text" class="cps-form-control" placeholder="Enter name"/>
	</div>
	<div class="cps-form-group cps-has-feedback">
		<label htmlFor="exampleInputEmail1">Email address</label>
		<div class="cps-row">
			<div class="cps-col-xs-5">
				<input type="text" class="cps-form-control" placeholder="Enter email"/>
				<span class="cps-icon-client cps-form-control-feedback" aria-hidden="true"></span>
				<span class="cps-error-block">This error message is hidden unless cps-has-error is present</span>
				<span class="cps-help-block">Example help block</span>
			</div>
			<div class="cps-col-xs-6">
				<span class="cps-form-help-block"><a class="cps-link cps-padding-left-4 cps-padding-right-4"><i class="cps-icon cps-icon-help cps-light-gray"></i> <span class="cps-info cps-padding-left-8">Need help?</span></a></span>
			</div>
		</div>
	</div>
	<div class="cps-form-group cps-has-error">
		<label htmlFor="exampleInputPhone">Phone Number</label>
		<input type="text" class="cps-form-control" value="234-343-3434"/>
		<span class="cps-icon-error cps-form-control-feedback" aria-hidden="true"></span>
		<span class="cps-error-block">This is an error!</span>
	</div>
</form>`} } />


			<cp-edit-render-code section-title="Left-aligned labels" dangerouslySetInnerHTML={ {__html:
`<form class="cps-form-horizontal">
	<div class="cps-form-group">
		<label htmlFor="exampleInputName" class="cps-col-xs-2 cps-control-label">Full Name</label>
		<div class="cps-col-xs-3">
			<input type="text" class="cps-form-control" placeholder="Enter name"/>
		</div>
	</div>
	<div class="cps-form-group cps-has-feedback cps-has-error">
		<label htmlFor="exampleInputEmail1" class="cps-col-xs-2 cps-control-label">Email address</label>
		<div class="cps-col-xs-3">
			<input type="text" class="cps-form-control" placeholder="Enter email"/>
			<span class="cps-icon-client cps-form-control-feedback" aria-hidden="true"></span>
			<span class="cps-error-block">This error message is hidden unless cps-has-error is present</span>
			<span class="cps-help-block">Example help block</span>
		</div>
	</div>
	<div class="cps-form-group cps-has-error">
		<label htmlFor="exampleInputPhone" class="cps-col-xs-2 cps-control-label">Phone Number</label>
		<div class="cps-col-xs-6">
			<input type="text" class="cps-form-control" value="234-343-3434"/>
			<span class="cps-icon-error cps-form-control-feedback" aria-hidden="true"></span>
			<span class="cps-error-block">This is an error!</span>
		</div>
	</div>
	<div class="cps-form-group">
		<label htmlFor="exampleInputPhoneDisabled" class="cps-col-xs-2 cps-control-label">Disabled</label>
		<div class="cps-col-xs-10">
			<input type="text" class="cps-form-control" value="234-343-3434" disabled="true"/>
		</div>
	</div>
</form>`} } />


			<cp-edit-render-code section-title="Input icon badges" dangerouslySetInnerHTML={ {__html:
`<form>
	<div class="cps-form-group">
		<div class="cps-input-group">
			<span class="cps-input-group-addon cps-icon-addon" id="basic-addon1"><i class="cps-icon cps-icon-add-person"></i></span>
			<input type="text" class="cps-form-control" placeholder="Username" aria-describedby="basic-addon1"/>
		</div>
	</div>
	<div class="cps-form-group">
		<div class="cps-input-group">
			<input type="text" class="cps-form-control" placeholder="Username" aria-describedby="basic-addon1"/>
			<span class="cps-input-group-addon cps-icon-addon" id="basic-addon1"><i class="cps-icon cps-icon-add-person"></i></span>
		</div>
	</div>
	<div class="cps-form-group cps-has-error">
		<div class="cps-input-group">
			<span class="cps-input-group-addon" id="basic-addon1">#</span>
			<input type="text" class="cps-form-control" placeholder="Serial Number" aria-describedby="basic-addon1"/>
		</div>
		<span class="cps-error-block">This is an error!</span>
	</div>
	<div class="cps-form-group cps-has-feedback">
		<div class="cps-input-group">
			<span class="cps-input-group-addon cps-icon-addon cps-bg-primary-green" id="basic-addon1"><i class="cps-icon cps-icon-lg-check cps-white"></i></span>
			<input type="text" class="cps-form-control" placeholder="Serial Number" aria-describedby="basic-addon1"/>
		</div>
		<span class="cps-error-block">This is an error!</span>
	</div>
	<div class="cps-form-group cps-has-error">
		<div class="cps-input-group">
			<span class="cps-input-group-addon" id="basic-addon1">#</span>
			<input type="text" class="cps-form-control" placeholder="Serial Number" aria-describedby="basic-addon1"/>
		</div>
		<span class="cps-error-block">This is an error!</span>
	</div>
</form>`} } />


			<cp-edit-render-code section-title="Inline icons within inputs" dangerouslySetInnerHTML={ {__html:
`<form class="cps-form-horizontal">
	<div class="cps-form-group cps-has-feedback cps-has-error">
		<label htmlFor="exampleInputEmail1" class="cps-col-xs-2 cps-control-label">Email address</label>
		<div class="cps-col-xs-3">
			<input type="text" class="cps-form-control" placeholder="Enter email"/>
			<span class="cps-icon-client cps-form-control-feedback" aria-hidden="true"></span>
			<span class="cps-error-block">This error message is hidden unless cps-has-error is present</span>
			<span class="cps-help-block">Example help block</span>
		</div>
	</div>
	<div class="cps-form-group cps-has-error">
		<label htmlFor="exampleInputPhone" class="cps-col-xs-2 cps-control-label">Phone Number</label>
		<div class="cps-col-xs-6">
			<input type="text" class="cps-form-control" value="234-343-3434"/>
			<span class="cps-icon-error cps-form-control-feedback" aria-hidden="true"></span>
			<span class="cps-error-block">This is an error!</span>
		</div>
	</div>
	<div class="cps-form-group cps-has-feedback cps-has-error cps-has-feedback-left">
		<label htmlFor="exampleInputEmail1" class="cps-col-xs-2 cps-control-label">Email address</label>
		<div class="cps-col-xs-3">
			<input type="text" class="cps-form-control" placeholder="Enter email"/>
			<span class="cps-icon-client cps-form-control-feedback" aria-hidden="true"></span>
			<span class="cps-error-block">This error message is hidden unless cps-has-error is present</span>
			<span class="cps-help-block">Example help block</span>
		</div>
	</div>
	<div class="cps-form-group cps-has-error cps-has-feedback-left">
		<label htmlFor="exampleInputPhone" class="cps-col-xs-2 cps-control-label">Phone Number</label>
		<div class="cps-col-xs-6">
			<input type="text" class="cps-form-control" value="234-343-3434"/>
			<span class="cps-icon-error cps-form-control-feedback" aria-hidden="true"></span>
			<span class="cps-error-block">This is an error!</span>
		</div>
	</div>
</form>`} } />


			<cp-edit-render-code section-title="Horizontal layout" dangerouslySetInnerHTML={ {__html:
`<form class="cps-form-inline">
	<div class="cps-form-group cps-has-feedback">
		<label htmlFor="inlineEmail">Email</label>
		<input type="text" class="cps-form-control" placeholder="Enter email"/>
		<span class="cps-icon-client cps-form-control-feedback" aria-hidden="true"></span>
	</div>
	<div class="cps-form-group cps-has-error">
		<label htmlFor="inlinePhone">Phone</label>
		<input type="text" class="cps-form-control" value="234-343-3434"/>
		<span class="cps-icon-error cps-form-control-feedback" aria-hidden="true"></span>
	</div>
	<div class="cps-form-group">
		<input type="text" class="cps-form-control" value="234-343-3434" disabled="true"/>
	</div>
</form>`} } />

			<cp-edit-render-code section-title="Auto-sized inputs" dangerouslySetInnerHTML={ {__html:
`<form class="cps-form-horizontal">
	<div class="cps-form-group-resize">
		<label htmlFor="Phone" class="cps-col-xs-2 cps-control-label">Phone</label>
		<div class="cps-col-xs-8">
			<input type="text" class="cps-form-control-resize" placeholder="Enter phone"/>
		</div>
	</div>
	<div class="cps-form-group-resize">
		<label htmlFor="Email" class="cps-col-xs-2 cps-control-label">Email</label>
		<div class="cps-col-xs-8">
			<input type="text" class="cps-form-control-resize" placeholder="Enter email"/>
		</div>
	</div>
	<div class="cps-form-group-resize">
		<label htmlFor="Address1" class="cps-col-xs-2 cps-control-label">Address 1</label>
		<div class="cps-col-xs-8">
			<input type="text" class="cps-form-control-resize" placeholder="Enter address 1"/>
		</div>
	</div>
	<div class="cps-form-group-resize cps-has-error">
		<label htmlFor="Address2" class="cps-col-xs-2 cps-control-label">Address 2</label>
		<div class="cps-col-xs-8">
			<input type="text" class="cps-form-control-resize" placeholder="Enter address2" value="234-343-3434"/>
			<span class="cps-error-block">This is an error!</span>
		</div>
	</div>
	<div class="cps-form-group-resize">
		<label htmlFor="Zip" class="cps-col-xs-2 cps-control-label">Zip</label>
		<div class="cps-col-xs-4">
			<input type="text" class="cps-form-control-resize" value="234-343-3434" readOnly="readonly"/>
		</div>
	</div>
</form>`} } />

			<cp-edit-render-code section-title="Auto-sized inputs -- horizontal layout" dangerouslySetInnerHTML={ {__html:
`<form class="cps-form-inline">
	<div class="cps-form-group-resize">
		<label htmlFor="Email">Email</label>
		<input type="text" class="cps-form-control-resize" placeholder="Enter email" value="exi@gm.com"/>
	</div>
	<div class="cps-form-group-resize">
		<label htmlFor="Phone">Phone</label>
		<input type="text" class="cps-form-control-resize" placeholder="Enter phone"/>
	</div>
	<div class="cps-form-group-resize">
		<input type="text" class="cps-form-control-resize cps-subheader" placeholder="Enter zip code" value="large font example"/>
	</div>
	<div class="cps-form-group-resize cps-has-error">
		<input type="text" class="cps-form-control-resize" placeholder="Error example"/>
		<span class="cps-error-block">This is an error</span>
	</div>
</form>`} } />

			<div className="cps-flexible-focus cps-card">
				<div className="cps-card__header cps-subheader">
					Angular Helpers
				</div>
				<div className="cps-card__body">
					<b>form-helpers.service.js</b> includes useful form methods:
					<ul>
						<li><b>hasError</b> - Returns true if a form field is invalid or the outer form was submitted. Look at <b>edit-user.controller.js</b> and the associated template for an example.</li>
					</ul>
				</div>
			</div>

		</div>
		)
	}
});
