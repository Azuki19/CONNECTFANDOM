import './screens/login';
import './components/indexPadre';
import './screens/indexPadreScreens';
import { addObserver, appState } from './store';
class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
		addObserver(this);
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ``;
		}
		switch (appState.screen) {
			case 'REGISTER':
				const register = this.ownerDocument.createElement('app-register');
				this.shadowRoot?.appendChild(register);
				break;

			case 'LOGIN':
				const login = this.ownerDocument.createElement('app-login');
				this.shadowRoot?.appendChild(login);
				break;

			case 'DASHBOARD':
				const dashboard = this.ownerDocument.createElement('app-dashboard');
				this.shadowRoot?.appendChild(dashboard);
				break;

			case 'ABOUTTHEBAND':
				const aboutTheBand = this.ownerDocument.createElement('app-about-the-band');
				this.shadowRoot?.appendChild(aboutTheBand);
				break;

			case 'ARTISTDASHBOARD':
				const artistdashboard = this.ownerDocument.createElement('app-artist-dashboard');
				this.shadowRoot?.appendChild(artistdashboard);
				break;

			case 'EDITPROFILE':
				const EditProfile = this.ownerDocument.createElement('app-edit-profile');
				this.shadowRoot?.appendChild(EditProfile);
				break;

			case 'PROFILE':
				const profile = this.ownerDocument.createElement('profile-dashboard');
				this.shadowRoot?.appendChild(profile);
				break;

			case 'BANDEVENTS':
				const bandevents = this.ownerDocument.createElement('app-band-events');
				this.shadowRoot?.appendChild(bandevents);
				break;

			default:
				break;
		}
	}
}

customElements.define('app-container', AppContainer);
