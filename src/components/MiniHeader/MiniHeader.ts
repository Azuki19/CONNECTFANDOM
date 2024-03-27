import styles from './MiniHeader.css';

class MiniHeader extends HTMLElement {
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
			<section class='sectionminiheader'>
			<p>FANDOOOOOOOOOOM/p>
			</section>
		`;
		}
		const cssMiniHeader = this.ownerDocument.createElement('style');
		cssMiniHeader.innerHTML = styles;
		this.shadowRoot?.appendChild(cssMiniHeader);
	}
}

customElements.define('mini-header', MiniHeader);
export default MiniHeader;
