# Custom elements at Canopy

The styleguide defines some custom elements that apps and components should use as the "leaf nodes"
of ui.

#### Here are some of the benefits:

- Custom elements are more powerful than CSS classes because they have js functionality
- Custom elements are framework agnostic and can be used regardless of which single-spa app or framework needs them.

#### Here are some disadvantages:
- Interoperating with framework components and custom elements is not always seamless. Should frameworks set attributes? Properties? Both? How should frameworks set up event listeners?
- It's not easy to write custom elements that behave exactly correctly. Getters and setters have some quirky behaviors, it's all vanilla js,
  and there are edge cases you have to worry about.

#### To try and help with the disadvantages, we've done the following:
- Created a react-interop thing where custom elements can be easily exposed as React Components.
- We're considering using Preact or similar underneath the hood for implementing custom elements, and then
  having a adapter layer thing that converts Preact components into custom elements. That way people will
  hopefully not have to deal with the oddities of DOM elements and custom elements quite as much

## Some conventions that we use at Canopy
[Rob Dodson's conventions](https://medium.com/dev-channel/custom-elements-that-work-anywhere-898e1dd2bc48) are what we try to follow, for the most part.
Reading that article is the best way to get acquainted with the conventions, but here's a brief summary:
- Use properties (not attributes) as your source of truth.
- All exposed attributes should have a corresponding property.
- Updating a property doesn't need to cause the corresponding attribute to change. Attributes are most useful for *initial* configuration only.
- Data goes out of custom elements via dom events.

## Documentation for custom elements
Each custom element has a folder with a Readme. That readme should tell you all the specifics of how to use a custom element.

## React interoperability.
As of Jan 2017, React is still figuring out how it is going to make interoperating with custom elements more seamless.

#### Here are some links to discussion about it:
- https://github.com/facebook/react/issues/7901
- https://github.com/facebook/react/issues/7249
- https://github.com/facebook/react/pull/8755

Until that is figured out, the only way to interoperate correctly with custom elements is to get `refs` and then
set the properties, attributes, and event listeners on the ref itself. That's sort of clunky, so we decided to
build a way for people to use custom elements via a React component that isn't clunky. Each custom element exports
a React component version of it. Example:

```js
import React from 'react';
import {CprButton} from 'canopy-styleguide!sofe';

export default class MyComponent extends React.Component {
	render() {
		/* In this example, actionType and disableOnClick are sent to the custom element as a dom element property because that's the API for the
		 * cps-button custom-element. The className and id props turn into the class="" and id="" attributes on the custom element.
		 * And the events props is a object where the values are event handler functions and the keys are names of events that the
		 * custom element might fire.
		 *
		 * This turns into `<button is="cps-button" id="243" class="my_class" />` in the DOM inspector, where `addEventListener` has been
		 * called for the events, and properties on the dom element have been set for `actionType`, and `disableOnClick`.
		 */
		return <CprButton actionType="secondary" disableOnClick={true} className="my_class" events={{'event-name': this.eventHandler}} id="234" />
	}
}
```

#### Risks of building a React component version of every custom element:
- If the React component version actually has some extra behavior to it in addition to what the custom element does, then
  people get different behaviors depending on whether they're using React or not. This is really bad.
- When the above-referenced React issues are sorted out, it might be tricky to move off of our interop layer and onto
  the official React way of doing custom elements.

#### Here's our approach, which tries to address the risks:
- We want the custom element to have the behavior in it, not the React component. For this reason, we've created
  a [react-interop](/src/custom-elements/react-interop.js) file which makes it so that people who write custom elements
  (1) don't have to think about how to make it into a React component, and (2) it makes it pretty much impossible to
  put extra logic into the React component that isn't already in the custom element. Example:
```js
class MyCustomElement extends HTMLElement {
}
customElements.define('my-custom-element', MyCustomElement);
export const CprMyCustomElement = createReactComponent({
	name: 'my-custom-element', // The name of the custom element
	extends: null, // Not required for autonomous custom elements, but required for customized built-in elements
});
```
- The react version of a custom element will be exported as a React component whose name starts with `Cpr`. This is because we may
  need to do a similar thing for other frameworks, but we don't collisions in naming the framework-specific versions of custom elements.
  So the `r` in `Cpr` is for React.
- Our implementation of the React interop defaults to element properties for all react props. This works well with className, id, etc, but isn't perfect.
  Who knows if this is what React will eventually decide on, but this is the best guess I have right now. Sticking pretty close to the
  (incomplete) React@15 logic for handling custom elements makes it hard to handle special properties like `className` and `disabled`, so
  we didn't do that.
