import styles from './MiniHeader.css';

export default class MiniHeader extends HTMLElement {
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
				<p>a card</p>
			`;

			const cssMiniHeader = this.ownerDocument.createElement('style');
			cssMiniHeader.innerHTML = styles;
			this.shadowRoot.appendChild(cssMiniHeader);
		}
	}
}

customElements.define('mini-header', MiniHeader);
