var React = require('react');
var Highlight = require('react-highlight');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<div style={{width: "100%", height: "350px"}} className="bss-flexible-focus bss-modal">
					<div className="bss-modal__screen" style={{position: "relative"}}></div>
					<div className="bss-modal__dialog bss-card" style={{position: "absolute", top: "200px"}}>
						<div className="bss-card__header bss-subheader-sm">
							Upload a File
							<a href className="bss-modal__dialog__close bss-icon bss-icon-close"></a>
						</div>
						<div className="bss-card__body">
							Choose a file to upload to Beanstalk. You can upload asm any as you'd like&mdash; or if you're not a huge fan of
							clicking you can drag and drop your files anywhere on this page.
						</div>
						<div className="bss-modal__dialog__actions">
							<button className="bss-btn +primary">CHOOSE FILES</button>
							<a href="#" className="bss-link">NEVERMIND</a>
						</div>
					</div>
				</div>
				<Highlight className="html">
				{
`<!-- The dialog markup should be appended to the BODY tag.  -->
<div class="bss-modal">
  <div class="bss-modal__screen"></div>
  <div class="bss-modal__dialog bss-card">
    <div class="bss-card__header bss-subheader-sm">
      Upload a File
      <a href class="bss-modal__dialog__close bss-icon bss-icon-close"></a>
    </div>
    <div class="bss-card__body">
      Choose a file to upload to Beanstalk. You can upload asm any as you'd like&mdash; or if you're not a huge fan of
      clicking you can drag and drop your files anywhere on this page.
    </div>
    <div class="bss-modal__dialog__actions">
        <button class="bss-btn +primary">CHOOSE FILES</button>
        <a href="#" class="bss-link">NEVERMIND</a>
    </div>
  </div>
</div>
`
				}
				</Highlight>
				<div style={{width: "100%", height: "350px", position: "relative"}} className="bss-flexible-focus bss-overlay-modal">
					<div className="bss-overlay-modal__content" style={{'padding-top': "50px"}}>
						<div className="bss-overlay-modal__content__header">
							Create a New Date
						</div>
						<div className="bss-overlay-modal__content__body">
							<form className="bss-form-horizontal">
								<div className="bss-form-group">
									<label for="exampleInputEmail1" className="bss-col-xs-2">Date Title</label>
									<div className="bss-col-xs-4">
										<input type="text" className="bss-form-control" placeholder="New Event"/>
									</div>
								</div>
								<div className="bss-form-group">
									<label for="exampleInputEmail1" className="bss-col-xs-2">Date</label>
									<div className="bss-col-xs-2">
										<input type="text" className="bss-form-control" placeholder="2/7/2015"/>
									</div>
									<div className="bss-col-xs-2">
										<input type="text" className="bss-form-control" placeholder="4:00 PM"/>
									</div>
									<label for="exampleInputEmail1" className="bss-col-xs-0">To</label>
									<div className="bss-col-xs-2">
										<input type="text" className="bss-form-control" placeholder="2/9/2015"/>
									</div>
									<div className="bss-col-xs-2">
										<input type="text" className="bss-form-control" placeholder="5:00 PM"/>
									</div>
								</div>
								<div className="bss-form-group">
									<label for="exampleInputEmail1" className="bss-col-xs-2">Description</label>
									<div className="bss-col-xs-6">
										<textarea className="bss-form-control +no-resize"></textarea>
									</div>
								</div>
								<div className="bss-form-group">
									<label for="exampleInputEmail1" className="bss-col-xs-2"></label>
									<div className="bss-col-xs-6">
										<button className="bss-btn +primary">ADD DATE</button>
										<a href="#" className="bss-link">CANCEL</a>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				<Highlight className="html">
				{
`<!-- The dialog markup should be appended to the BODY tag.  -->
<div class="bss-overlay-modal">
  <div class="bss-overlay-modal__content">
    <div class="bss-overlay-modal__content__header">
      Create a New Date
    </div>
    <div class="bss-overlay-modal__content__body">
      <form class="bss-form-horizontal">
        <div class="bss-form-group">
          <label for="exampleInputEmail1" class="bss-col-xs-2">Date Title</label>
          <div class="bss-col-xs-4">
            <input type="text" class="bss-form-control" placeholder="New Event"/>
          </div>
        </div>
        <div class="bss-form-group">
          <label for="exampleInputEmail1" class="bss-col-xs-2">Date</label>
          <div class="bss-col-xs-2">
            <input type="text" class="bss-form-control" placeholder="2/7/2015"/>
          </div>
          <div class="bss-col-xs-2">
            <input type="text" class="bss-form-control" placeholder="4:00 PM"/>
          </div>
          <label for="exampleInputEmail1" class="bss-col-xs-0">To</label>
          <div class="bss-col-xs-2">
            <input type="text" class="bss-form-control" placeholder="2/9/2015"/>
          </div>
          <div class="bss-col-xs-2">
            <input type="text" class="bss-form-control" placeholder="5:00 PM"/>
          </div>
        </div>
        <div class="bss-form-group">
          <label for="exampleInputEmail1" class="bss-col-xs-2">Description</label>
          <div class="bss-col-xs-6">
            <textarea></textarea>
          </div>
        </div>
        <div class="bss-form-group">
            <button class="bss-btn +primary">ADD DATE</button>
            <a href="#" class="bss-link">CANCEL</a>
        </div>
      </form>

    </div>
  </div>
</div>
`
				}
				</Highlight>
			</div>
		)
	}
});
