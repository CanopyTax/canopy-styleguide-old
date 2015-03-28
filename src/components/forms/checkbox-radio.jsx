var React = require('react');
var Highlight = require('react-highlight');

module.exports = React.createClass({
	render: function() {
		return (

		<div>
			<div className="bss-fixed-focus bss-card">
				<div className="bss-card__header bss-subheader">
					Checkboxes and Radios
				</div>
				<div className="bss-card__body">
					<p>
						Note that the radio and checkboxes need to be wrapped inside a label. <strong>This is a requirement.</strong>
						The text beside the input also needs to be wrapped in a span tag.
					</p>
					<div className="bss-row">
						<div className="bss-col-xs-12">
							<form>
								<label className="bss-radio">
									<input type="radio" value="1" name="testQuestion"/><span>Yes</span>
								</label>
								<label className="bss-radio">
									<input type="radio" value="3" name="testQuestion"/><span>No</span>
								</label>
							</form>
						</div>
					</div>
					<div className="bss-row">
						<div className="bss-col-xs-12">
							<form>
								<label className="bss-radio">
									<input type="radio" value="1" checked disabled name="testQuestion"/>Yes
								</label>
								<label className="bss-radio">
									<input type="radio" value="3" disabled name="testQuestion"/>No
								</label>
							</form>
						</div>
					</div>
				</div>
			</div>
<Highlight className="html">
{`<form>
  <label class="bss-radio">
    <input type="radio" value="1" name="testQuestion"/><span>Yes</span>
  </label>
  <label class="bss-radio">
    <input type="radio" value="3" name="testQuestion"/><span>No</span>
  </label>
</form>`
}
</Highlight>
			<div className="bss-fixed-focus bss-card">
				<div className="bss-card__body">
					<div className="bss-row margin-top-16">
						<div className="bss-col-xs-12">
							<form>
								<label className="bss-checkbox">
									<input type="checkbox" value="option1"/><span>1</span>
								</label>
								<label className="bss-checkbox">
									<input type="checkbox" value="option1" disabled/><span>1</span>
								</label>
								<label className="bss-checkbox">
									<input type="checkbox" value="option2" disabled checked/><span>2</span>
								</label>
							</form>
						</div>
					</div>
					<div className="bss-row bss-margin-top-16">
						<div className="bss-col-xs-12">
							<form>
								<label className="bss-checkbox-large">
									<input type="checkbox" value="option1"/><span>1</span>
								</label>
								<label className="bss-checkbox-large">
									<input type="checkbox" value="option1" disabled/><span>2</span>
								</label>
								<label className="bss-checkbox-large">
									<input type="checkbox" value="option2" disabled checked/><span>3</span>
								</label>
								<label className="bss-checkbox-large">
									<input type="checkbox" value="option2"/><span></span>
								</label>
							</form>
						</div>
					</div>
				</div>
			</div>
<Highlight className="html">
{
`<form>
  <label class="bss-checkbox">
    <input type="checkbox" value="option1"/><span>1</span>
  </label>
  <label class="bss-checkbox">
    <input type="checkbox" value="option1" disabled/><span>1</span>
  </label>
  <label class="bss-checkbox">
    <input type="checkbox" value="option2" disabled checked/><span>2</span>
  </label>
</form>`
}
</Highlight>
			<div className="bss-fixed-focus bss-card">
				<div className="bss-card__header bss-subheader-sm">Stacked checkboxes and radios</div>
				<div className="bss-card__body">
					<div className="bss-row">
						<div className="bss-col-xs-12">
							<form>
								<div>
									<label className="bss-radio">
										<input type="radio" name="optionsRadios" value="option1"/><span>Option one is this and that&mdash;be sure to include why it's great</span>
									</label>
								</div>
								<div>
									<label className="bss-radio">
										<input type="radio" name="optionsRadios" value="option1"/><span>Option two is this and that&mdash;be sure to include why it's great</span>
									</label>
								</div>
								<div>
									<label className="bss-radio">
										<input type="radio" name="optionsRadios" value="option1"/><span>Option one is this and that&mdash;be sure to include why it's great</span>
									</label>
								</div>
							</form>
						</div>
					</div>
					<div className="bss-row">
						<div className="bss-col-xs-12">
							<form>
								<div>
									<label className="bss-checkbox">
										<input type="checkbox"/><span>Check me out</span>
									</label>
								</div>
								<div>
									<label className="bss-checkbox">
										<input type="checkbox"/><span>Check me out</span>
									</label>
								</div>
								<div>
									<label className="bss-checkbox">
										<input type="checkbox"/><span>Check me out</span>
									</label>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
<Highlight className="html">
{
`<form>
  <div class="radio">
    <label>
      <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1"/>Option one is this and that&mdash;be sure to include why it's great
    </label>
  </div>
  <div class="checkbox">
    <label>
      <input type="checkbox"/>Check me out
    </label>
  </div>
</form>`
}
</Highlight>

			<div className="bss-fixed-focus bss-card">
				<div className="bss-card__header bss-subheader-sm">Toggle Switch</div>
				<div className="bss-card__body">
					<p>
						Toggles should be used for single instance values that need an "on" or "off" state.
						It's also importatnt to note that the toggle only has one disabled state. When a toggle is disabled
						within the application, then the value must be set to "off".
					</p>
					<div className="bss-row">
						<form>
							<label className="bss-toggle">
								<input type="checkbox" value="option1"/><span></span>
							</label>
							<label className="bss-toggle">
								<input type="checkbox" value="option1" disabled/><span></span>
							</label>
							<label className="bss-toggle">
								<input type="checkbox" value="option1" disabled checked/><span></span>
							</label>
						</form>
					</div>
				</div>
			</div>
			<Highlight className="html">
{`<form>
  <label class="bss-toggle">
    <input type="checkbox" value="option1"/><span></span>
  </label>
  <label class="bss-toggle">
    <input type="checkbox" value="option1" disabled/><span></span>
  </label>
  <label class="bss-toggle">
    <input type="checkbox" value="option1" disabled checked/><span></span>
  </label>
</form>
`}
		</Highlight>
		</div>
		)
	}
});
