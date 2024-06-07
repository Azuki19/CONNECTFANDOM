import styles from './ButtonRegister.css';
import { dispatch } from '../../../store';
import { navigate } from '../../../store/action';
import { addObserver } from '../../../store';
import { registrarUsuario, checkUsernameExists, checkEmailExists } from '../../../utils/firebase';
import { registerData } from '../../../utils/registerData';
import { Screens } from '../../../types/navigation';

class ButtonRegister extends HTMLElement {
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
				<section class="Button-Register">
					<button class="Register">SIGN IN</button>
					<p class="error-message" style="display: none; color: red;"></p>
				</section>
			`;
		}

		const cssLogOut = this.ownerDocument.createElement('style');
		cssLogOut.innerHTML = styles;
		this.shadowRoot?.appendChild(cssLogOut);
	}

	addListeners() {
		this.shadowRoot.querySelector('.Register')?.addEventListener('click', this.onButtonClicked);
	}

	async onButtonClicked() {
		const errorMessage = this.shadowRoot?.querySelector('.error-message') as HTMLElement;

		// Reset error message
		if (errorMessage) {
			errorMessage.style.display = 'none';
			errorMessage.textContent = '';
		}

		// Check if any field is empty
		if (!registerData.name || !registerData.username || !registerData.email || !registerData.password) {
			if (errorMessage) {
				errorMessage.textContent = 'Please, fill all the inputs.';
				errorMessage.style.display = 'block';
			}
			return;
		}

		// Check if email is valid
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailPattern.test(registerData.email)) {
			if (errorMessage) {
				errorMessage.textContent = 'Please, enter a valid email.';
				errorMessage.style.display = 'block';
			}
			return;
		}

		// Check if password has at least 6 characters
		if (registerData.password.length < 6) {
			if (errorMessage) {
				errorMessage.textContent = 'The password must have at least 6 characters.';
				errorMessage.style.display = 'block';
			}
			return;
		}

		// Check if username already exists
		const usernameExists = await checkUsernameExists(registerData.username);
		if (usernameExists) {
			if (errorMessage) {
				errorMessage.textContent = 'The username already exists.';
				errorMessage.style.display = 'block';
			}
			return;
		}

		// Check if email already exists
		const emailExists = await checkEmailExists(registerData.email);
		if (emailExists) {
			if (errorMessage) {
				errorMessage.textContent = 'The email already exists.';
				errorMessage.style.display = 'block';
			}
			return;
		}


			const userData = await registrarUsuario(
				registerData.name,
				registerData.username,
				registerData.email,
				registerData.password
			);
			if (userData) {
				dispatch({
					action: 'SET_USER',
					payload: userData,
				});
				dispatch(navigate(Screens.EDITPROFILE));
			} else {
				const errorMessage = this.shadowRoot?.querySelector('.error-message') as HTMLElement;
				errorMessage.textContent = 'There was an error, please try again.';
				errorMessage.style.display = 'block';
			}}}

customElements.define('button-register', ButtonRegister);
export default ButtonRegister;