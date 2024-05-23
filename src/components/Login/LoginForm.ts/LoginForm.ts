import styles from './LoginForm.css';
import * as components from '../../indexPadre';
import { dispatch } from '../../../store';
import { navigate } from '../../../store/action';
import { addObserver } from '../../../store';
import { logindata } from './logindata';

class LoginForm extends HTMLElement {
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

		// Create the email label and input
		const emailLabel = document.createElement('label');
		emailLabel.setAttribute('for', 'email');
		emailLabel.id = 'text';
		emailLabel.textContent = 'Login with your email';

		const emailInput = document.createElement('input');
		emailInput.type = 'email';
		emailInput.classList.add('email');
		emailInput.addEventListener('change', () => {
			logindata.username = emailInput.value;
		});

		// Create the password label, input, and button
		const passwordLabel = document.createElement('label');
		passwordLabel.setAttribute('for', 'password');
		passwordLabel.id = 'text';
		passwordLabel.textContent = 'Password';

		const passwordInput = document.createElement('input');
		passwordInput.type = 'password';
		passwordInput.id = 'password';
		passwordInput.addEventListener('change', () => {
			logindata.password = passwordInput.value;
		});
		console.log(logindata);

		// Create the login button
		const loginButton = document.createElement('section');
		loginButton.classList.add('button');
		loginButton.appendChild(new components.ButtonLogin());

		// Create the 'Remember your password' checkbox
		const rememberCheckbox = document.createElement('input');
		rememberCheckbox.type = 'checkbox';
		const rememberLabel = document.createElement('label');
		rememberLabel.textContent = 'Remember me';
		rememberLabel.id = 'remember';

		// Create the 'Forgot password' link
		const forgotPasswordLink = document.createElement('a');
		forgotPasswordLink.textContent = 'Forgot password';
		forgotPasswordLink.href = '#'; // You can set the actual link here
		forgotPasswordLink.id = 'forgot';

		// Create the 'down-part' div
		const downPartDiv = document.createElement('div');
		downPartDiv.id = 'down-part';

		// Append the elements to build the structure
		generalDiv.appendChild(textContainer); // Agregar contenedor de texto
		inputsDiv.appendChild(emailLabel);
		inputsDiv.appendChild(emailInput);
		inputsDiv.appendChild(passwordLabel);
		inputsDiv.appendChild(passwordInput);

		downPartDiv.appendChild(rememberCheckbox);
		downPartDiv.appendChild(rememberLabel);
		downPartDiv.appendChild(forgotPasswordLink);

		inputsDiv.appendChild(loginButton);
		// Append the 'Remember your password' checkbox and 'Forgot password' link
		generalDiv.appendChild(inputsDiv);
		generalDiv.appendChild(downPartDiv);

		// Create the div for "Not a part of Connect Fandom" and "Sign in"
		const notFandomDiv = document.createElement('div');
		notFandomDiv.id = 'not-fandom-div';

		const bubblecontainerDiv = document.createElement('div');
		bubblecontainerDiv.id = 'bubblecontainer-div';
		bubblecontainerDiv.appendChild(new components.BubblesLogin());

		notFandomDiv.appendChild(bubblecontainerDiv);

		const hrDiv = document.createElement('div');
		hrDiv.id = 'hr-div';
		const hr = document.createElement('hr');
		hrDiv.appendChild(hr);
		notFandomDiv.appendChild(hrDiv);

		const InnerDiv = document.createElement('div');
		InnerDiv.id = 'inner-div';
		// Create the 'Not a part of Connect Fandom' text
		const notFandomText = document.createElement('span');
		notFandomText.textContent = '¿Not a part of Connect Fandom?';
		notFandomText.id = 'not-fandom';

		// Create the 'Sign in' text
		const signInText = document.createElement('span');
		signInText.textContent = 'Sign in';
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
	}

	onButtonClicked() {
		console.log('holaaa');
		dispatch(navigate('REGISTER'));
	}
}

customElements.define('login-form', LoginForm);
export default LoginForm;
