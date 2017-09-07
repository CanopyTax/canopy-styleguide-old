var React = require('react');

module.exports = class extends React.Component{
	render() {
		return (

		<div>
			<div className="cps-flexible-focus cps-card">
				<div className="cps-card__header cps-subheader">
					Checkboxes and Radios
				</div>
				<div className="cps-card__body">
					<p>
						Note that the radio and checkboxes need to be wrapped inside a label. <strong>This is a requirement.</strong>
						The text beside the input also needs to be wrapped in a span tag.
					</p>
				</div>
			</div>

			<cp-edit-render-code section-title="Radios" dangerouslySetInnerHTML={ {__html: `<div class="cps-row">
	<form>
		<label class="cps-radio">
			<input type="radio" value="1" name="testQuestion" /><span>Yes</span>
		</label>
		<label clas="cps-radio">
			<input type="radio" value="0" name="testQuestion" /><span>No</span>
		</label>
	</form>
</div>
<div class="cps-row">
	<form>
		<label class="cps-radio">
			<input type="radio" value="1" checked disabled name="testQuestion" /><span>Yes</span>
		</label>
		<label class="cps-radio">
			<input type="radio" value="0" disabled name="testQuestion" /><span>No</span>
		</label>
	</form>
</div>`} } />

			<cp-edit-render-code section-title="Checkboxes" dangerouslySetInnerHTML={ {__html: `<div class="cps-row margin-top-16">
	<form>
		<label class="cps-checkbox">
			<input type="checkbox" value="option1"/><span>1</span>
		</label>
		<label class="cps-checkbox">
			<input type="checkbox" value="option1" disabled/><span>1</span>
		</label>
		<label class="cps-checkbox">
			<input type="checkbox" value="option2" disabled checked/><span>2</span>
		</label>
	</form>
</div>
<div class="cps-row cps-margin-top-16">
	<form>
		<label class="cps-checkbox-large">
			<input type="checkbox" value="option1"/><span>1</span>
		</label>
		<label class="cps-checkbox-large">
			<input type="checkbox" value="option1" disabled/><span>2</span>
		</label>
		<label class="cps-checkbox-large">
			<input type="checkbox" value="option2" disabled checked/><span>3</span>
		</label>
		<label class="cps-checkbox-large">
			<input type="checkbox" value="option2"/><span></span>
		</label>
	</form>
</div>`} } />

			<cp-edit-render-code section-title="Stacked checkboxes and radios" dangerouslySetInnerHTML={ {__html: `<div class="cps-row">
	<form>
		<div>
			<label class="cps-radio">
				<input type="radio" name="optionsRadios" value="option1"/><span>Option one is this and that&mdash;be sure to include why it's great</span>
			</label>
		</div>
		<div>
			<label class="cps-radio">
				<input type="radio" name="optionsRadios" value="option1"/><span>Option two is this and that&mdash;be sure to include why it's great</span>
			</label>
		</div>
		<div>
			<label class="cps-radio">
				<input type="radio" name="optionsRadios" value="option1"/><span>Option one is this and that&mdash;be sure to include why it's great</span>
			</label>
		</div>
	</form>
</div>
<div class="cps-row cps-padding-top-16">
	<form>
		<div>
			<label class="cps-checkbox">
				<input type="checkbox"/><span>Check me out</span>
			</label>
		</div>
		<div>
			<label class="cps-checkbox">
				<input type="checkbox"/><span>Check me out</span>
			</label>
		</div>
		<div>
			<label class="cps-checkbox">
				<input type="checkbox"/><span>Check me out</span>
			</label>
		</div>
	</form>
</div>`} } />

			<div className="cps-flexible-focus cps-card">
				<div className="cps-card__body">
					<p>
						Toggles should be used for single instance values that need an "on" or "off" state.
						It's also importatnt to note that the toggle only has one disabled state. When a toggle is disabled
						within the application, then the value must be set to "off".
					</p>
				</div>
			</div>

			<cp-edit-render-code section-title="Toggle switches" dangerouslySetInnerHTML={ {__html: `<div class="cps-row">
	<form>
		<label class="cps-toggle">
			<input type="checkbox" value="option1" checked/><span></span>
		</label>
		<label class="cps-toggle">
			<input type="checkbox" value="option1"/><span></span>
		</label>
		<label class="cps-toggle">
			<input type="checkbox" value="option1" disabled="true"/><span></span>
		</label>
		<label class="cps-toggle">
			<input type="checkbox" value="option1" checked disabled="true"/><span></span>
		</label>
	</form>
</div>`} } />
		</div>
		)
	}
};
