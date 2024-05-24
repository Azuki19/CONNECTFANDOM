import styles from './ButtonLogin.css';

import { dispatch } from '../../../store';
import { navigate } from '../../../store/action';
import { addObserver } from '../../../store';
import { iniciarSesion } from '../../../utils/firebase';
import { logindata } from '../../Login/LoginForm.ts/logindata';

class ButtonLogin extends HTMLElement {
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
				<section class="Button-Log-In">
					<button class="Log-In">LOG IN</button>
					<p class="error-message" style="display: none; color: red;"></p>
				</section>
			`;
		}

		const cssLogOut = this.ownerDocument.createElement('style');
		cssLogOut.innerHTML = styles;
		this.shadowRoot?.appendChild(cssLogOut);
	}

	addListeners() {
		this.shadowRoot.querySelector('.Log-In')?.addEventListener('click', this.onButtonClicked);
	}

	async onButtonClicked() {
		const errorMessage = this.shadowRoot?.querySelector('.error-message') as HTMLElement;

		// Reset error message
		if (errorMessage) {
			errorMessage.style.display = 'none';
			errorMessage.textContent = '';
		}

		if (!logindata.username || !logindata.password) {
			if (errorMessage) {
				errorMessage.textContent = 'Please, fill all the inputs.';
				errorMessage.style.display = 'block';
			}
			return;
		}

		const respuesta = await iniciarSesion(logindata.username, logindata.password);

		if (respuesta === true) {
			dispatch(navigate('DASHBOARD'));
		} else {
			if (errorMessage) {
				errorMessage.textContent = 'Incorrect Email or Password.';
				errorMessage.style.display = 'block';
			}
		}
	}
}

customElements.define('button-login', ButtonLogin);
export default ButtonLogin;
