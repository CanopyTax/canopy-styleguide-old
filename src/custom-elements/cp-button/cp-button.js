import styles from './cp-button.css';

class CpButton extends HTMLElement {
	static get observedAttributes() {
		return ['type'];
	}
	connectedCallback() {
		this.button = this.querySelector('button');
		if (!this.button) {
			throw new Error('cp-button requires a <button> in its innerHTML');
		}
		this._type = this.getAttribute('type');
		render.call(this);
	}
	attributeChangedCallback(attr, oldValue, newValue) {
		this[attr] = newValue;
	}
	set type(newType) {
		this._type = newType;
		render.call(this);
	}
	get type() {
		return this._type;
	}
}

function render() {
	updateClass.call(this, styles.button, true);
	updateClass.call(this, styles.primary, this.type === 'primary');
	updateClass.call(this, styles.secondary, this.type === 'secondary');
}

function updateClass(className, enabled) {
	if (enabled) {
		this.button.classList.add(className);
	} else {
		this.button.classList.remove(className);
	}
}

customElements.define('cp-button', CpButton);
