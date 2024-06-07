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

			const NameSection = document.createElement('section');
			NameSection.classList.add('name-section');

			const InputNameSection = document.createElement('section');
			InputNameSection.classList.add('input-name-section');

			const NameLabel = document.createElement('label');
			NameLabel.textContent = 'Name';

			const NameInput = document.createElement('input');
			NameInput.type = 'text';
			NameInput.id = 'Name';

			const NameButton = document.createElement('section');
			NameButton.classList.add('button-name');
			NameButton.appendChild(new components.ButtonName());

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

			const ProfilePictureSection = document.createElement('section');
			ProfilePictureSection.classList.add('profile-picture-section');

			const InputProfilePictureSection = document.createElement('section');
			InputProfilePictureSection.classList.add('input-profile-picture-section');

			const ProfilePictureLabel = document.createElement('label');
			ProfilePictureLabel.textContent = 'ProfilePicture';

			const ProfilePictureInput = document.createElement('input');
			ProfilePictureInput.type = 'text';
			ProfilePictureInput.id = 'ProfilePicture';

			const ProfilePictureButton = document.createElement('section');
			ProfilePictureButton.classList.add('button-info');
			ProfilePictureButton.appendChild(new components.ButtonProfilePicture());

			const emailSection = document.createElement('section');
			emailSection.classList.add('email-section');

			const InputEmailSection = document.createElement('section');
			InputEmailSection.classList.add('input-email-section');

			const emailLabel = document.createElement('label');
			emailLabel.setAttribute('for', 'email');
			emailLabel.textContent = 'Email address ';

			const emailInput = document.createElement('input');
			emailInput.type = 'email';
			emailInput.classList.add('email');

			const EmailButton = document.createElement('section');
			EmailButton.classList.add('button-email');
			EmailButton.appendChild(new components.ButtonEmail());

			const passwordSection = document.createElement('section');
			passwordSection.classList.add('password-section');

			const InputPasswordSection = document.createElement('section');
			InputPasswordSection.classList.add('input-password-section');

			const passwordLabel = document.createElement('label');
			passwordLabel.setAttribute('for', 'Password');
			passwordLabel.textContent = 'Password';

			const passwordInput = document.createElement('input');
			passwordInput.type = 'password';
			passwordInput.id = 'password';

			const PasswordButton = document.createElement('section');
			PasswordButton.classList.add('button-email');
			PasswordButton.appendChild(new components.ButtonPassword());

			document.body.appendChild(general);
			this.shadowRoot.appendChild(general);

			InputUsernameSection.appendChild(userLabel);
			InputUsernameSection.appendChild(userInput);
			UsernameSection.appendChild(InputUsernameSection);
			UsernameSection.appendChild(UsernameButton);
			general.appendChild(UsernameSection);

			InputNameSection.appendChild(NameLabel);
			InputNameSection.appendChild(NameInput);
			NameSection.appendChild(InputNameSection);
			NameSection.appendChild(NameButton);
			general.appendChild(NameSection);

			InputInfoSection.appendChild(InfoLabel);
			InputInfoSection.appendChild(InfoInput);
			InfoSection.appendChild(InputInfoSection);
			InfoSection.appendChild(InfoButton);
			general.appendChild(InfoSection);

			InputEmailSection.appendChild(emailLabel);
			InputEmailSection.appendChild(emailInput);
			emailSection.appendChild(InputEmailSection);
			emailSection.appendChild(EmailButton);
			general.appendChild(emailSection);

			InputProfilePictureSection.appendChild(ProfilePictureLabel);
			InputProfilePictureSection.appendChild(ProfilePictureInput);
			ProfilePictureSection.appendChild(InputProfilePictureSection);
			ProfilePictureSection.appendChild(ProfilePictureButton);
			general.appendChild(ProfilePictureSection);

			InputPasswordSection.appendChild(passwordLabel);
			InputPasswordSection.appendChild(passwordInput);
			passwordSection.appendChild(InputPasswordSection);
			passwordSection.appendChild(PasswordButton);
			general.appendChild(passwordSection);

			general.appendChild(inputsDiv);
		}

		const cssProfile = this.ownerDocument.createElement('style');
		cssProfile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssProfile);
	}
}

customElements.define('input-profile', inputEdit);
export default inputEdit;
