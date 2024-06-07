import styles from './ButtonUsername.css';
import { appState } from '../../../../store';
import { dispatch } from '../../../../store';
import { navigate } from '../../../../store/action';
import { addObserver } from '../../../../store';
import { updateUserData } from '../../../../utils/firebase';

class ButtonUsername extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		this.onButtonClicked = this.onButtonClicked.bind(this);
		addObserver(this);
	}

	connectedCallback() {
		this.mount();
	}

	mount() {
		this.render();
		this.addListeners();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
				<section class="Button-Username">
					<button class="Username">CHANGE</button>
				</section>
			`;
		}

		const cssLogOut = this.ownerDocument.createElement('style');
		cssLogOut.innerHTML = styles;
		this.shadowRoot?.appendChild(cssLogOut);
	}
	addListeners() {
		this.shadowRoot.querySelector('.Button-Username')?.addEventListener('click', this.onButtonClicked);
	}

	onButtonClicked() {
		updateUserData(appState.user.authCredentials, { username: appState.editprofile.userInput });
	}
}

customElements.define('button-username', ButtonUsername);
export default ButtonUsername;
