# cp-button
Provides styling for `<button>` elements.

## HTML Usage
```html
<cp-button type="primary">
	<button>
		Click me
	</button>
</cp-button>
```

## Attributes / properties
- `type` (optional): A string with potential values of `primary` or `secondary`. If not provided, the default `buttonface` background-color will be applied.

## JS Events
Right now there are no events that cp-button emits. Use event listeners on the `<button>` element
itself to get key events, click events, etc.
