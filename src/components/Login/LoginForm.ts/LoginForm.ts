import styles from './LoginForm.css';

class LoginForm extends HTMLElement {
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
		const generalDiv = document.createElement('div');
		generalDiv.id = 'general';

		// Create the inputs div
		const inputsDiv = document.createElement('div');
		inputsDiv.id = 'inputs';

		// Create the email label and input
		const emailLabel = document.createElement('label');
		emailLabel.setAttribute('for', 'email');
		emailLabel.textContent = 'Email address or user name';

		const emailInput = document.createElement('input');
		emailInput.type = 'email';
		emailInput.classList.add('email');

		// Create the password label, input, and button
		const passwordLabel = document.createElement('label');
		passwordLabel.setAttribute('for', 'Password');
		passwordLabel.textContent = 'Password';

		const passwordInput = document.createElement('input');
		passwordInput.type = 'password';
		passwordInput.id = 'password';
		// Create the login button
		const loginButton = document.createElement('button');
		loginButton.classList.add('button');
		loginButton.textContent = 'login';
		loginButton.style.fontFamily = 'Poppins, sans-serif';

		// Create the 'Remember your password' checkbox
		const rememberCheckbox = document.createElement('input');
		rememberCheckbox.type = 'checkbox';
		const rememberLabel = document.createElement('label');
		rememberLabel.textContent = 'Remember your password';
		rememberLabel.id = 'remember';

		// Create the 'Forgot password' link
		const forgotPasswordLink = document.createElement('a');
		forgotPasswordLink.textContent = 'Forgot password';
		forgotPasswordLink.href = '#'; // You can set the actual link here
		forgotPasswordLink.id = 'forgot';

		// Append the elements to build the structure
		inputsDiv.appendChild(emailLabel);
		inputsDiv.appendChild(emailInput);
		inputsDiv.appendChild(passwordLabel);
		inputsDiv.appendChild(passwordInput);
		inputsDiv.appendChild(loginButton);

		// Append the 'Remember your password' checkbox and 'Forgot password' link
		generalDiv.appendChild(inputsDiv);
		generalDiv.appendChild(rememberCheckbox);
		generalDiv.appendChild(rememberLabel);
		generalDiv.appendChild(forgotPasswordLink);

		this.shadowRoot?.appendChild(generalDiv);

		const cssMiniHeader = this.ownerDocument.createElement('style');
		cssMiniHeader.innerHTML = styles;
		this.shadowRoot?.appendChild(cssMiniHeader);
	}
}

customElements.define('login-form', LoginForm);
export default LoginForm;
