import styles from './ButtonSettings.css';

class ButtonSettings extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `


			<section class='Button-Log-Out'>
        <button class='Log-Out'>SETTINGS</button>
			</section>

		`;
		}
		//query del botón hacer la acción

		const cssSettinngs = this.ownerDocument.createElement('style');
		cssSettinngs.innerHTML = styles;
		this.shadowRoot?.appendChild(cssSettinngs);
	}
}

customElements.define('button-settings', ButtonSettings);
export default ButtonSettings;
