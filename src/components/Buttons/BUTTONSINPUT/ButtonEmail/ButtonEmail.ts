import styles from './ButtonEmail.css';
import { updateUserData } from '../../../../utils/firebase';
import { appState, dispatch } from '../../../../store';
import { navigate } from '../../../../store/action';
import { addObserver } from '../../../../store';

class ButtonEmail extends HTMLElement {
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
				<section class="Button-Email">
					<button class="Email">CHANGE</button>
				</section>
			`;
		}

		const cssLogOut = this.ownerDocument.createElement('style');
		cssLogOut.innerHTML = styles;
		this.shadowRoot?.appendChild(cssLogOut);
	}
	addListeners() {
		this.shadowRoot.querySelector('.Button-Email')?.addEventListener('click', this.onButtonClicked);
	}

	onButtonClicked() {
		updateUserData(appState.user.authCredentials, { email: appState.editprofile.emailInput });
	}
}

customElements.define('button-email', ButtonEmail);
export default ButtonEmail;
