## CpsColorpicker

### Events
CpsColorpicker only fires a `colorchange` event. Each time the color is changed in the colorpicker this event is fired.

### Props
- `color`
	- Required
	- The color to be displayed in the colorpicker
	- Any color format is fine
	- No default
- `format`
	- Not required
	- The format for the data in the colorchange event
	- Supports `['hsl', 'rgb', 'hex']` and probably most anything that is an actual color format
	- Defaults to hex
