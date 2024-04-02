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
      <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
			<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

			<section class='sectionmainheader'>
        <div class='div1'>
			    <h1>CONNECT FANDOM!</h1>
        </div>
        <div class='div2'>
       		<ion-icon class='settings-outline' name="settings-outline"></ion-icon>
          <ion-icon class='person-circle-outline' name="person-circle-outline"></ion-icon>
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
