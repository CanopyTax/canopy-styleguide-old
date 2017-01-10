import styles from './cps-button.css';

class CpsButton extends HTMLButtonElement {
	// Lifecycles
	static get observedAttributes() {
		return ['action-type', 'disable-on-click'];
	}
	connectedCallback() {
		this._actionType = this.getAttribute('action-type');
		this.disableOnClick = this.getAttribute('disable-on-click') === "true" ? true : false;
		this.render();
	}
	attributeChangedCallback(attr, oldValue, newValue) {
		// This triggers the setter for the property, which in turn triggers a rerender.
		this[attr] = newValue;
	}

	// Listeners for re-rendering
	get actionType() {
		return this._actionType;
	}
	set actionType(newType) {
		if (typeof newType !== 'string') {
			throw new Error(`actionType property of cps-button elements must be a string. Was '${typeof newType}'`);
		}
		this._actionType = newType;
		this.render();
	}
	get disableOnClick() {
		return this._disableOnClick;
	}
	set disableOnClick(newVal) {
		if (typeof newVal !== 'boolean') {
			throw new Error(`disableOnClick property of cps-button elements must be a boolean. Was '${typeof newVal}'`);
		}
		this.removeEventListener('click', this.disableOnClickListener);
		if (newVal) {
			this.addEventListener('click', this.disableOnClickListener);
		}
		this._disableOnClick = newVal;
	}

	// re-rendering logic
	render = () => {
		this.updateClass(styles.button, true);
		this.updateClass(styles.primary, this._actionType === 'primary');
		this.updateClass(styles.secondary, this._actionType === 'secondary');
	}
	updateClass = (className, enabled) => {
		if (enabled) {
			this.classList.add(className);
		} else {
			this.classList.remove(className);
		}
	}

	// event listeners
	disableOnClickListener = () => {
		this.disabled = true;
	}
}

customElements.define('cps-button', CpsButton, {extends: 'button'});
