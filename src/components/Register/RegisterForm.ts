import styles from './RegisterForm.css';
import * as components from '..//indexPadre';

import { dispatch } from '../../store';
import { navigate } from '../../store/action';
import { addObserver } from '../../store';
import { registrarUsuario } from '../../utils/firebase';
import { registerData } from '../../utils/registerData';

class RegisterForm extends HTMLElement {
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
			this.shadowRoot.innerHTML = ``;
		}
		const generalDiv = document.createElement('div');
		generalDiv.id = 'general';

		// Contenedor para los textos
		const textContainer = document.createElement('div');
		textContainer.id = 'text-container';

		// Texto 1: Welcome to
		const welcomeText = document.createElement('span');
		welcomeText.textContent = 'Welcome to ';

		// Texto 2: CONNECT FANDOM!
		const fandomText = document.createElement('span');
		fandomText.textContent = 'CONNECT FANDOM!';

		// Agregar textos al contenedor
		textContainer.appendChild(welcomeText);
		textContainer.appendChild(fandomText);

		// Create the inputs div
		const inputsDiv = document.createElement('div');
		inputsDiv.id = 'inputs';

		// Create name input
		const nameInput = document.createElement('input');
		nameInput.type = 'text';
		nameInput.placeholder = 'Name';
		nameInput.classList.add('name');
		nameInput.id = 'innnput';

		nameInput.addEventListener('change', () => {
			registerData.name = nameInput.value;
		});

		// Create username input
		const usernameInput = document.createElement('input');
		usernameInput.type = 'text';
		usernameInput.placeholder = 'Username';
		usernameInput.classList.add('username');
		usernameInput.id = 'innnput';

		usernameInput.addEventListener('change', () => {
			registerData.username = usernameInput.value;
		});

		const emailInput = document.createElement('input');
		emailInput.type = 'email';
		emailInput.placeholder = 'Email';
		emailInput.classList.add('email');
		emailInput.id = 'innnput';

		emailInput.addEventListener('change', () => {
			registerData.email = emailInput.value;
		});

		const passwordInput = document.createElement('input');
		passwordInput.type = 'password';
		passwordInput.placeholder = 'Password';
		passwordInput.id = 'password';
		passwordInput.id = 'innnput';

		passwordInput.addEventListener('change', () => {
			registerData.password = passwordInput.value;
			console.log(registerData);
		});

		// Create the login button
		const loginButton = document.createElement('section');
		loginButton.classList.add('button');
		loginButton.appendChild(new components.ButtonRegister());

		// Create the 'down-part' div
		const downPartDiv = document.createElement('div');
		downPartDiv.id = 'down-part';

		// Append the elements to build the structure
		generalDiv.appendChild(textContainer); // Agregar contenedor de texto

		inputsDiv.appendChild(nameInput);
		inputsDiv.appendChild(usernameInput);
		inputsDiv.appendChild(emailInput);
		inputsDiv.appendChild(passwordInput);
		inputsDiv.appendChild(loginButton);

		// Append the 'Remember your password' checkbox and 'Forgot password' link
		generalDiv.appendChild(inputsDiv);
		generalDiv.appendChild(downPartDiv);
		const notFandomDiv = document.createElement('div');
		notFandomDiv.id = 'not-fandom-div';
		const InnerDiv = document.createElement('div');
		InnerDiv.id = 'inner-div';
		// Create the 'Not a part of Connect Fandom' text
		const notFandomText = document.createElement('span');
		notFandomText.textContent = '¿Already have an account?';
		notFandomText.id = 'not-fandom';

		// Create the 'Sign in' text
		const signInText = document.createElement('span');
		signInText.textContent = 'Log in';
		signInText.id = 'sign-in-text';

		InnerDiv.appendChild(notFandomText);
		InnerDiv.appendChild(signInText);

		notFandomDiv.appendChild(InnerDiv);
		generalDiv.appendChild(notFandomDiv);

		this.shadowRoot?.appendChild(generalDiv);

		const cssMiniHeader = this.ownerDocument.createElement('style');
		cssMiniHeader.innerHTML = styles;
		this.shadowRoot?.appendChild(cssMiniHeader);
	}
	addListeners() {
		this.shadowRoot.querySelector('#sign-in-text')?.addEventListener('click', this.onButtonClicked);
		this.shadowRoot.querySelector('.Button-Register')?.addEventListener('click', async () => {
			// const userId = await registrarUsuario(
			// 	nameInput.value,
			// 	UsernameInput.value,
			// 	emailInput.value,
			// 	passwordInput.value
			// );
			//alert(`Usuario registrado con id: ${userId}`);
		});
	}

	onButtonClicked() {
		console.log('holaaa');
		dispatch(navigate('LOGIN'));
	}
}

customElements.define('register-form', RegisterForm);
export default RegisterForm;
