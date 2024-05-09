import styles from './ButtonLogOut.css';

class ButtonLogOut extends HTMLElement {
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
				<section class="Button-Log-Out">
					<button class="Log-Out">LOG OUT</button>
				</section>
			`;
		}

		const cssLogOut = this.ownerDocument.createElement('style');
		cssLogOut.innerHTML = styles;
		this.shadowRoot?.appendChild(cssLogOut);
	}
}

customElements.define('button-logout', ButtonLogOut);
export default ButtonLogOut;
