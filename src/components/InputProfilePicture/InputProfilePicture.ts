import styles from './InputProfilePicture.css';
import { dispatch } from '../../store';
import { navigate } from '../../store/action';
import { addObserver } from '../../store';
import { Screens } from '../../types/trips';

class inputEdit extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}
	handleCreatButton() {
		dispatch(navigate(Screens.DASHBOARD));
	}
	handlelogButton() {
		dispatch(navigate(Screens.LOGIN));
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ` `;

			// Create the general div
			const general = document.createElement('div');
			general.id = 'general';

			// Create the inputs div
			const inputsDiv = document.createElement('div');
			inputsDiv.id = 'inputs';

			// Create the email label and input
			const emailLabel = document.createElement('label');
			emailLabel.setAttribute('for', 'email');
			emailLabel.textContent = 'Email address ';

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

			const userLabel = document.createElement('label');
			userLabel.textContent = 'UserName';

			const userInput = document.createElement('input');
			userInput.type = 'text';
			userInput.id = 'user';

			const ageLabel = document.createElement('label');
			ageLabel.textContent = 'Info';

			const InfoInput = document.createElement('input');
			InfoInput.type = 'text';
			InfoInput.id = 'Info';

			const NameLabel = document.createElement('label');
			NameLabel.textContent = 'Name';

			const NameInput = document.createElement('input');
			NameInput.type = 'text';
			NameInput.id = 'Name';

			const ProfilePictureLabel = document.createElement('label');
			ProfilePictureLabel.textContent = 'ProfilePicture';

			const ProfilePictureInput = document.createElement('input');
			ProfilePictureInput.type = 'text';
			ProfilePictureInput.id = 'ProfilePicture';

			// Create the login button
			const createButton = document.createElement('button');
			createButton.classList.add('button');
			createButton.textContent = 'Delete';

			// Agregar evento de clic al botón de "crear cuenta"
			createButton.addEventListener('click', this.handleCreatButton);
			console.log('Se hizo clic en el botón de "crear cuenta"');

			const deleteButton = document.createElement('button');
			deleteButton.classList.add('button');
			deleteButton.textContent = 'Edit';

			// Agregar evento de clic al botón de "crear cuenta"
			deleteButton.addEventListener('click', this.handleCreatButton);
			console.log('Se hizo clic en el botón de "crear cuenta"');

			// Add the general div to the document body
			document.body.appendChild(general);
			this.shadowRoot.appendChild(general);

			inputsDiv.appendChild(userLabel);
			inputsDiv.appendChild(userInput);
			inputsDiv.appendChild(ageLabel);
			inputsDiv.appendChild(InfoInput);
			inputsDiv.appendChild(NameLabel);
			inputsDiv.appendChild(NameInput);
			inputsDiv.appendChild(ProfilePictureLabel);
			inputsDiv.appendChild(ProfilePictureInput);
			inputsDiv.appendChild(emailLabel);
			inputsDiv.appendChild(emailInput);
			inputsDiv.appendChild(passwordLabel);
			inputsDiv.appendChild(passwordInput);
			inputsDiv.appendChild(createButton);
			inputsDiv.appendChild(deleteButton);
			general.appendChild(inputsDiv);
		}

		const cssProfile = this.ownerDocument.createElement('style');
		cssProfile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssProfile);
	}
}

customElements.define('input-profile', inputEdit);
export default inputEdit;
