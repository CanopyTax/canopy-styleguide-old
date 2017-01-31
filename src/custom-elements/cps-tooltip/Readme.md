# cps-tooltip
Provides a tooltip around the innerHTML of the cps-tooltip element

## HTML Usage
```html
<cps-tooltip action-type="primary|secondary" disable-on-click="true">
	Click me
</cps-tooltip>
```

## Notes
The `<cps-tooltip>` dom node is `display: inline`.

## Properties
Properties are good for both initial configuration and for all subsequent changes to the DOM element.
- `html` (required): A string of html to show in the tooltip.
- `delayTime` (optional): The number of milliseconds to wait before showing the tooltip.

## Attributes
Attributes are good for initial configuration. If an attribute is changed, the corresponding property will be updated.
- `html`
- `delay-time`

## JS Events
Right now there are no events that cps-tooltip emits.
