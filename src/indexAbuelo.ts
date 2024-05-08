import './screens/EditProfilee';
import './components/indexPadre';
import './screens/indexPadreScreens';

import { addObserver } from './store/index';
import { appState } from './store/index';
import { Screens } from './types/trips';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) this.shadowRoot.innerHTML = ``;
		switch (appState.screen) {
			case Screens.DASHBOARD:
				const dashboard = this.ownerDocument.createElement('app-dashboard');
				this.shadowRoot?.appendChild(dashboard);
				break;

			case Screens.LOGIN:
				const login = this.ownerDocument.createElement('login-page');
				this.shadowRoot?.appendChild(login);
				break;

			case Screens.SINGUP:
				const singup = this.ownerDocument.createElement('singup-page');
				this.shadowRoot?.appendChild(singup);
				break;
			case Screens.ABOUTTHEBAND:
				const aboutTheBanddd = this.ownerDocument.createElement('app-about-the-band');
				this.shadowRoot?.appendChild(aboutTheBanddd);
				break;

			case Screens.EDITPROFILE:
				const EditProfileee = this.ownerDocument.createElement('app-edit-profile');
				this.shadowRoot?.appendChild(EditProfileee);
				break;

			case Screens.ARTISTDASHBOARD:
				const ArtistDashboarddd = this.ownerDocument.createElement('app-artist-dashboard');
				this.shadowRoot?.appendChild(ArtistDashboarddd);
				break;

			case Screens.PROFILE:
				const profileee = this.ownerDocument.createElement('profile-dashboard');
				this.shadowRoot?.appendChild(profileee);
				break;

			default:
				break;
		}
	}
}

customElements.define('app-container', AppContainer);
