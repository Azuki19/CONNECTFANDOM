import styles from './MainHeader.css';

class MainHeader extends HTMLElement {
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
			<section class='sectionmainheader'>
        <div class='div1'>
			    <h1>CONNCET FANDOM</h1>
        </div>
        <div class='div2'>
          <button> settings </button>
          <button> profile </button>
        </div>
			</section>
		`;
		}
		const cssMainHeader = this.ownerDocument.createElement('style');
		cssMainHeader.innerHTML = styles;
		this.shadowRoot?.appendChild(cssMainHeader);
	}
}

customElements.define('main-header', MainHeader);
export default MainHeader;
