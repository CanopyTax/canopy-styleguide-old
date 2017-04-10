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
- `useFixedPosition` (optional): A boolean that determines whether the tooltip should be fixed positioned or not. Defaults to false.
- `tooltipContainer` (optional): The container DOM element to put the tooltip element in. Defaults to the nearest positioned ancestor of the `<cps-tooltip>` element.
- `top` (optional): An integer number of pixels to be applied to the tooltip top. Note that tooltip is absolutely positioned.
- `left` (optional): An integer number of pixels to be applied to the tooltip left. Note that tooltip is absolutely positioned.

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
