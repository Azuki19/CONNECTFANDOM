import styles from './InputProfilePicture.css';
import { dispatch } from '../../store';
import { navigate } from '../../store/action';
import { addObserver } from '../../store';
import { Screens } from '../../types/navigation';
import * as components from '../indexPadre';

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

			const UsernameSection = document.createElement('section');
			UsernameSection.classList.add('username-section');

			const InputUsernameSection = document.createElement('section');
			InputUsernameSection.classList.add('input-username-section');

			const userLabel = document.createElement('label');
			userLabel.textContent = 'UserName';

			const userInput = document.createElement('input');
			userInput.type = 'text';
			userInput.id = 'user';

			const UsernameButton = document.createElement('section');
			UsernameButton.classList.add('button-username');
			UsernameButton.appendChild(new components.ButtonUsername());

			const InfoSection = document.createElement('section');
			InfoSection.classList.add('info-section');

			const InputInfoSection = document.createElement('section');
			InputInfoSection.classList.add('input-info-section');

			const InfoLabel = document.createElement('label');
			InfoLabel.textContent = 'Info';

			const InfoInput = document.createElement('input');
			InfoInput.type = 'text';
			InfoInput.id = 'info';

			const InfoButton = document.createElement('section');
			InfoButton.classList.add('button-info');
			InfoButton.appendChild(new components.ButtonInfo());

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

			// Add the general div to the document body
			document.body.appendChild(general);
			this.shadowRoot.appendChild(general);

			InputUsernameSection.appendChild(userLabel);
			InputUsernameSection.appendChild(userInput);
			UsernameSection.appendChild(InputUsernameSection);
			UsernameSection.appendChild(UsernameButton);
			general.appendChild(UsernameSection);

			InputInfoSection.appendChild(InfoLabel);
			InputInfoSection.appendChild(InfoInput);
			InfoSection.appendChild(InputInfoSection);
			InfoSection.appendChild(InfoButton);
			general.appendChild(InfoSection);

			inputsDiv.appendChild(NameLabel);
			inputsDiv.appendChild(NameInput);
			inputsDiv.appendChild(ProfilePictureLabel);
			inputsDiv.appendChild(ProfilePictureInput);
			inputsDiv.appendChild(emailLabel);
			inputsDiv.appendChild(emailInput);
			inputsDiv.appendChild(passwordLabel);
			inputsDiv.appendChild(passwordInput);
			general.appendChild(inputsDiv);
		}

		const cssProfile = this.ownerDocument.createElement('style');
		cssProfile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssProfile);
	}
}

customElements.define('input-profile', inputEdit);
export default inputEdit;
