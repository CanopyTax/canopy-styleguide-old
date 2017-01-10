# cp-button
Provides styling and auto-disabling for `<button>` elements.

## HTML Usage
```html
<button is="cps-button" action-type="primary|secondary" disable-on-click="true">
	Click me
</button>
```

## Attributes / properties
- `action-type` (optional): A string with potential values of `primary` or `secondary`. If not provided, the default `buttonface` background-color will be applied.
- `disable-on-click` (optional): A boolean value that determines if the button becomes disabled once it is clicked. Defaults to true.

## JS Events
Right now there are no events that cp-button emits. Use event listeners on the `<button>` element
itself to get key events, click events, etc.
