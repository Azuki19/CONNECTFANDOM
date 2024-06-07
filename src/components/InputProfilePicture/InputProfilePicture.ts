import styles from './InputProfilePicture.css';
import { appState, dispatch } from '../../store';
import { editProfileInfo, navigate } from '../../store/action';
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

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
                <style>${styles}</style>
                <div id="general">
                    <div id="inputs">
                        <section class="username-section">
                            <section class="input-username-section">
                                <label for="user">UserName</label>
                                <input type="text" id="user" value="${appState.editprofile.userInput || ''}">
                            </section>
                            <section class="button-username">
                                <button-username></button-username>
                            </section>
                        </section>

                        <section class="name-section">
                            <section class="input-name-section">
                                <label for="Name">Name</label>
                                <input type="text" id="Name" value="${appState.editprofile.NameInput || ''}">
                            </section>
                            <section class="button-name">
                                <button-name></button-name>
                            </section>
                        </section>

                        <section class="info-section">
                            <section class="input-info-section">
                                <label for="info">Info</label>
                                <input type="text" id="info" value="${appState.editprofile.InfoInput || ''}">
                            </section>
                            <section class="button-info">
                                <button-info></button-info>
                            </section>
                        </section>

                        <section class="profile-picture-section">
                            <section class="input-profile-picture-section">
                                <label for="ProfilePicture">ProfilePicture</label>
                                <input type="file" id="ProfilePicture">
                            </section>
                            <section class="button-profile-picture">
                                <button-profile-picture></button-profile-picture>
                            </section>
                        </section>

                        <section class="email-section">
                            <section class="input-email-section">
                                <label for="email">Email address</label>
                                <input type="email" id="email" value="${appState.editprofile.emailInput || ''}">
                            </section>
                            <section class="button-email">
                                <button-email></button-email>
                            </section>
                        </section>

                        <section class="password-section">
                            <section class="input-password-section">
                                <label for="password">Password</label>
                                <input type="password" id="password" value="${
																	appState.editprofile.passwordInput || ''
																}">
                            </section>
                            <section class="button-password">
                                <button-password></button-password>
                            </section>
                        </section>
                    </div>
                </div>
            `;

			const userInput = this.shadowRoot.querySelector('#user') as HTMLInputElement;
			const NameInput = this.shadowRoot.querySelector('#Name') as HTMLInputElement;
			const InfoInput = this.shadowRoot.querySelector('#info') as HTMLInputElement;
			const ProfilePictureInput = this.shadowRoot.querySelector('#ProfilePicture') as HTMLInputElement;
			const emailInput = this.shadowRoot.querySelector('#email') as HTMLInputElement;
			const passwordInput = this.shadowRoot.querySelector('#password') as HTMLInputElement;

			const dispatchEditProfileInfo = () => {
				dispatch(
					editProfileInfo({
						NameInput: NameInput.value,
						userInput: userInput.value,
						emailInput: emailInput.value,
						ProfilePictureInput: ProfilePictureInput.value,
						passwordInput: passwordInput.value,
						InfoInput: InfoInput.value,
					})
				);
			};

			userInput.addEventListener('change', dispatchEditProfileInfo);
			NameInput.addEventListener('change', dispatchEditProfileInfo);
			InfoInput.addEventListener('change', dispatchEditProfileInfo);
			emailInput.addEventListener('change', dispatchEditProfileInfo);
			passwordInput.addEventListener('change', dispatchEditProfileInfo);

			ProfilePictureInput.addEventListener('change', (event) => {
				const target = event.target as HTMLInputElement;
				const file = target.files?.[0];
				if (file) {
					const reader = new FileReader();
					reader.onload = (e) => {
						dispatch(
							editProfileInfo({
								ProfilePictureInput: e.target?.result as string,
							})
						);
					};
					reader.readAsDataURL(file);
				}
			});
		}
	}
}

customElements.define('input-profile', inputEdit);
export default inputEdit;
