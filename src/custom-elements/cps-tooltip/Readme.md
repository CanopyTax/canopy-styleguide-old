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
cps-tooltip elements fire the following events:
- `cps-tooltip:shown`: Fired whenever the tooltip is shown. The tooltip element is provided in the `evt.detail.tooltipEl`.
- `cps-tooltip:hidden`: Fired whenever the tooltip is hidden.

```js
const el = document.createElement('cps-tooltip');
el.addEventListener('cps-tooltip:shown', evt => {
	console.log(evt.detail.tooltipEl);
});
el.addEventListener('cps-tooltip:hidden', () => {
	console.log('hidden');
});

// Triggers the tooltip to be shown
el.dispatchEvent(new CustomEvent('mouseover'));
```