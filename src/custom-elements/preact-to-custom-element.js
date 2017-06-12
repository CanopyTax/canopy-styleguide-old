import {kebabCase, camelCase} from 'lodash';
import preact, {h} from 'preact';

export function preactToCustomElement(preactComponent, opts) {
	class PreactCustomElement extends opts.parentClass {
		connectedCallback() {
			opts
			.properties
			.filter(property => !this[property])
			.forEach(property => {
				const attrName = kebabCase(property);
				if (this.hasAttribute(attrName)) {
					this.attributeChangedCallback(attrName, undefined, this.getAttribute(attrName));
				}
			});

			this.render();
		}
		disconnectedCallback() {
			// https://github.com/developit/preact/issues/53
			preact.render('', this, this._preactRoot);
		}
		static get observedAttributes() {
			return opts.properties.map(kebabCase);
		}
		attributeChangedCallback(name, oldValue, newValue) {
			this[camelCase(name)] = newValue;
		}
		render = () => {
			opts.properties.forEach(property => {
				if (Object.hasOwnProperty(this, property)) {
					// Make sure the getter and setter for the property are being used.
					const existingValue = this[property];
					delete this[property];
					this[property] = existingValue;
				}
			});
			const props = opts.properties.reduce((res, property) => {
				res[property] = this[property];
				return res;
			}, {});
			props.customElement = this;

			if (this._preactRoot && !this._preactRoot.parentNode) {
				this._preactRoot = preact.render(h(preactComponent, props), this, null);
			} else {
				this._preactRoot = preact.render(h(preactComponent, props), this, this._preactRoot);
			}
		}
	}

	opts.properties.forEach(property => {
		if (camelCase(property) !== property) {
			throw new Error(`property '${property}' is not camel cased, but all custom element properties should be camel cased.`);
		}
		const privatePropertyName = '_' + property;
		Object.defineProperty(PreactCustomElement.prototype, privatePropertyName, {enumerable: false, writable: true, configurable: false});
		Object.defineProperty(PreactCustomElement.prototype, property, {
			get() {
				return this[privatePropertyName];
			},
			set(newVal) {
				this[privatePropertyName] = newVal;
				this.render();
			},
			enumerable: true,
			configurable: true,
		});
	});

	return PreactCustomElement;
}
