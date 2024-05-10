import styles from './ImageLogin.css';

class ImageLogin extends HTMLElement {
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
			<section class='section'>
		<img src='https://pbs.twimg.com/media/GNHnjR7XAAA9xmZ?format=png&name=900x900'></img>
			</section>
		`;
		}
		const cssMiniHeader = this.ownerDocument.createElement('style');
		cssMiniHeader.innerHTML = styles;
		this.shadowRoot?.appendChild(cssMiniHeader);
	}
}

customElements.define('image-login', ImageLogin);
export default ImageLogin;
