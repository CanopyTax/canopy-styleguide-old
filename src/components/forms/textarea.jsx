var React = require('react');
var Highlight = require('react-highlight');
module.exports = React.createClass({
	render: function() {
		return (
		      <div>
				<div className="bss-fixed-focus bss-card">
					<div className="bss-card__header bss-subheader">
						Top-aligned textarea (with resize handle)
					</div>
					<div className="bss-card__body">
						<div className="bss-row">
							<div className="bss-col-xs-12">
								<form>
									<div className="bss-form-group">
										<label for="exampleInputEmail1">Email address</label>
										<textarea className="bss-form-control"></textarea>
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
    <textarea class="bss-form-control"></textarea>
  </div>
</form>`
					}
					</Highlight>



			<div className="bss-fixed-focus bss-card">
				<div className="bss-card__header bss-subheader">
					Right-aligned textarea (without resize handle)
				</div>
				<div className="bss-card__body">
					<div className="bss-row">
						<div className="bss-col-xs-12">
							<form className="bss-form-horizontal">
								<div className="bss-form-group">
									<label for="exampleInputEmail1" className="bss-col-xs-2">Full Name</label>
									<div className="bss-col-xs-3">
										<textarea className="bss-form-control +no-resize"></textarea>
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
      <textarea class="bss-form-control +no-resize"></textarea>
    </div>
  </div>
</form>`
					}
					</Highlight>
			</div>
		   )
	}
});
