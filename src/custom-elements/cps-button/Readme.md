# cps-button
Provides styling and auto-disabling for `<button>` elements.

## HTML Usage
```html
<button is="cps-button" action-type="primary|secondary|flat" disable-on-click="true">
	Click me
</button>
```

## Properties
Properties are good for both initial configuration and for all subsequent changes to the DOM element.
- `actionType` (optional): A string with potential values of `primary` or `secondary` or `flat`. If not provided, the default `buttonface` background-color will be applied.
- `disableOnClick` (optional): A boolean that determines if the button should automatically be disabled when you click on it. The idea is maybe for Save/Delete buttons,
- `phat` (optional): A boolean that determines whether the button should be large.
  where it's best to disable the button so you don't have to debounce it.

## Attributes
Attributes are good for initial configuration. If an attribute is changed, the corresponding property will be updated.
- `action-type` (optional): This is the same as the actionType property, just it's an attribute.
- `disable-on-click` (optional): This is the same as the disable-on-click property, just it's an attribute. The string "true" or "false" is expected.

## JS Events
Right now there are no events that cps-button emits. Use event listeners on the `<button>` element
itself to get key events, click events, etc.
