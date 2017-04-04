## CpsDatepicker

### Events
`cps-datepicker` has three possible events: `focus`, `blur`, `datechange`
- `focus` fires when the input is focused
- `blur` fires when the input is blurred
- `datechange` fires when a new date has been selected/type in

### Props
- `date`
	- Not required
	- Is the date shown in the input and circled green on the calendar
	- No default
- `format`
	- Not required
	- The format of the date in the input field
	- Default to `MM/DD/YYYY`
- `orientation`
	- Not required
	- Where the popup calendar should go in relation to the input
	- Possible values `['bottom', 'bottom right', 'bottom left', 'top', 'top right', 'top left']`
	- Defaults to mid bottom or so
- `positionAdjustment`
	- Not required
	- An object that will adjust the position of the popup calendar
	- A corresponding orientation is necessary. So if the orientation was `"bottom right"` your 
	`positionAdjustment` could be `{bottom: 50, right: 50}` and it would go 50 pixels further down and to the right
	- No default
- `inputClass`
	- Not required
	- Class applied to the input
	- No default
- `placeholder`
	- Not required
	- The placeholder for the input
	- No default
- `removeDateOption`
	- Not required
	- Whether or not to show a button that will fire a change-date event with `null`
	- Defaults to `false`
- `removeDateText`
	- Not required
	- The text to show in the remove date button
	- Defaults to `"Remove date"`
- `width`
	- Not required
	- Sets the width (and height since the boxes are squares) of the popup calendar
	- Defaults to 264 pixels
