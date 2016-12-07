import styles from './cp-button.css';

class CpButton extends HTMLElement {
	// Lifecycles
	static get observedAttributes() {
		return ['type'];
	}
	connectedCallback() {
		this.button = this.querySelector('button');
		if (!this.button) {
			throw new Error('cp-button requires a <button> in its innerHTML');
		}
		this._type = this.getAttribute('type');
		this.mounted = true;

		this.render();
	}
	attributeChangedCallback(attr, oldValue, newValue) {
		// This triggers the setter for the property, which in turn triggers a rerender.
		this[attr] = newValue;
	}

	// Listeners for re-rendering
	get type() {
		return this._type;
	}
	set type(newType) {
		this._type = newType;
		this.render();
	}

	// re-rendering logic
	render = () => {
		if (!this.mounted)
			return;

		this.updateClass(styles.button, true);
		this.updateClass(styles.primary, this.type === 'primary');
		this.updateClass(styles.secondary, this.type === 'secondary');
	}
	updateClass = (className, enabled) => {
		if (enabled) {
			this.button.classList.add(className);
		} else {
			this.button.classList.remove(className);
		}
	}
}

customElements.define('cp-button', CpButton);
