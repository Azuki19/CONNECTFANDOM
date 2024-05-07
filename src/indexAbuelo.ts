import './screens/artistDashboard';
import './components/indexPadre';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		const something = this.ownerDocument.createElement('app-artist-dashboard');
		this.shadowRoot?.appendChild(something);
	}
}

customElements.define('app-container', AppContainer);
