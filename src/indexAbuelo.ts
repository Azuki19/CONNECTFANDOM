import './screens/login';
import './components/indexPadre';
import './screens/indexPadreScreens';
import { appState } from './store';
import AppDashboard from './screens/dashboard';
import AppLogin from './screens/login';
import { AppAboutTheBand, AppEditProfile, ProfileDashboard } from './screens/indexPadreScreens';
import { AppArtistDashboard } from './screens/indexPadreScreens';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ``;
		}
		switch (appState.screen) {
			case 'LOGIN':
				const login = this.ownerDocument.createElement('app-login') as AppLogin;
				this.shadowRoot?.appendChild(login);
				break;

			case 'DASHBOARD':
				const dashboard = this.ownerDocument.createElement('app-dashboard') as AppDashboard;
				this.shadowRoot?.appendChild(dashboard);
				break;

			case 'ABOUTTHEBAND':
				const aboutTheBand = this.ownerDocument.createElement('app-about-the-band') as AppAboutTheBand;
				this.shadowRoot?.appendChild(aboutTheBand);
				break;

			case 'ARTISTDASHBOARD':
				const artistdashboard = this.ownerDocument.createElement('app-artist-dashboard') as AppArtistDashboard;
				this.shadowRoot?.appendChild(artistdashboard);
				break;

			case 'EDITPROFILE':
				const EditProfile = this.ownerDocument.createElement('app-edit-profile') as AppEditProfile;
				this.shadowRoot?.appendChild(EditProfile);
				break;

			case 'PROFILE':
				const profile = this.ownerDocument.createElement('profile-dashboard') as ProfileDashboard;
				this.shadowRoot?.appendChild(profile);
				break;

			default:
				break;
		}
	}
}

customElements.define('app-container', AppContainer);
