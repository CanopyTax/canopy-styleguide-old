import React from 'react';
import {toPairs, difference, includes, startsWith, kebabCase, forEach} from 'lodash';

const blacklistedProperties = ['children', 'className', 'style', 'events'];

export function customElementToReact(opts) {
	if (!opts.name || typeof opts.name !== 'string') {
		throw new Error(`Cannot convert custom element to React component without opts.name`);
	}

	if (opts.extends && typeof opts.extends !== 'string') {
		throw new Error(`opts.extends must be a string, if provided`);
	}

	return class ReactCustomElementInterop extends React.Component {
		events = {}
		componentDidMount() {
			const oldProps = undefined;
			this.updateCustomElement(oldProps, this.props);
			this.addEvents(oldProps, this.props);
		}
		componentWillReceiveProps(nextProps) {
			this.updateCustomElement(this.props, nextProps);
			this.addEvents(this.props, nextProps);
		}
		addEvents = (oldProps = {events: {}}, props) => {
			forEach(props.events, (callback, eventName) => {
				if (oldProps.events[eventName] !== callback) {
					this.el.removeEventListener(eventName, oldProps.events[eventName]);
					delete this.events[eventName];
				}
				if (!this.events[eventName]) {
					this.events[eventName] = (...args) => {
						if (this.props.events[eventName]) {
							setTimeout(() => {
								this.props.events[eventName].apply(this, args);
							});
						}
					}
					this.el.addEventListener(eventName, this.events[eventName])
				}
			})
		}
		render() {
			const childProps = {ref: el => this.el = el};
			if (opts.extends) {
				childProps.is = opts.name;
			}
			for (let propName in this.props) {
				if (startsWith(propName, 'on')) {
					childProps[propName] = this.props[propName];
				}
			}

			const name = opts.extends || opts.name;
			return React.createElement(name, childProps, this.props.children);
		}
		updateCustomElement = (oldProps, newProps) => {
			if (!this.el) {
				return;
			}

			for (let propName in newProps) {
				if (!includes(blacklistedProperties, propName) && !startsWith(propName, 'on')) {
					this.setCustomElementValue(propName, newProps[propName])
				} else if (propName === 'className') {
					const classNames = newProps[propName].split(/\s+/);
					classNames.forEach(className => this.el.classList.add(className));
				} else if (propName === 'style') {
					if (typeof newProps[propName] !== 'object') {
						throw new Error(`The style prop (to a React wrapper of a custom element) must be an object`);
					}
					for (let styleName in newProps[propName]) {
						this.el.style[styleName] = newProps[propName][styleName];
					}
				}
			}
		}
		setCustomElementValue(propName, propValue) {
			if (typeof propValue === 'string') {
				this.el.setAttribute(kebabCase(propName), propValue);
			} else {
				/* CRAZY JS BEHAVIOR HERE:
				 * Since React creates the DOM element and re-renders it a couple of times before even appending it to the document,
				 * we sometimes set the element property value before the element has even been upgraded to be a custom element.
				 * Before it is upgraded, the getter and setter for the custom element properties are not set up, and so setting the
				 * property causes the getter and setter _not_ to be called because of the prototype chain. This is really weird native browser
				 * behavior for getters and setters, but it's how it is. By deleting the prop before setting it, we make sure that the getter
				 * and setter further up the prototype chain are called no matter what, because `delete` will make sure that it has to fall back
				 * to the prototype chain to look up the property.
				 */
				delete this.el[propName];
				// This should be set as a property on the custom element
				this.el[propName] = propValue;
			}
		}
	}
}
