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
			<h4>FEED</h4>
			<h4>ARTISTS</h4>
			<h4>EVENTS</h4>
			<h4>ABOUT THE BAND</h4>
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
