import './screens/mainDashboard';
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
		const something = this.ownerDocument.createElement('app-main-dashboard');
		this.shadowRoot?.appendChild(something);
	}
}

customElements.define('app-container', AppContainer);
