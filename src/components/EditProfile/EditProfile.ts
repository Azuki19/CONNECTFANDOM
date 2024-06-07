import styles from './EditProfile.css';
import { appState, dispatch } from '../../store';
import { navigate } from '../../store/action';
import { addObserver } from '../../store';
import * as components from '../indexPadre';
import { updateUserData } from '../../utils/firebase';

export enum EditProfileAttribute {
	'uid' = 'uid',
	'image' = 'image',
	'name' = 'name',
	'username' = 'username',
	'followers' = 'followers',
	'info' = 'info',
	'type' = 'type',
	'email' = 'email',
	'password' = 'password',
}

class EditProfile extends HTMLElement {
	uid?: number;
	image?: string;
	name?: string;
	username?: string;
	followers?: string;
	info?: string;
	type?: string;
	email?: string;
	password?: string;

	static get observedAttributes() {
		return Object.values(EditProfileAttribute);
	}

	attributeChangedCallback(propName: string, oldValue: string | null, newValue: string | null) {
		if (newValue !== null) {
			switch (propName) {
				case EditProfileAttribute.uid:
					this[propName] = parseInt(newValue);
					break;
				default:
					this[propName] = newValue;
					break;
			}
		}
		this.render();
	}

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
	}

	async updateProfilePicture(file: File) {
		const userId = appState.user.authCredentials; // Asumiendo que tienes el ID de usuario en el estado de la aplicación
		try {
			await updateUserData(userId, {}, file);
			console.log('Profile picture updated successfully');
		} catch (error) {
			console.error('Error updating profile picture:', error);
		}
	}

	handleImageUpload(event: Event) {
		const input = event.target as HTMLInputElement;
		if (input.files && input.files[0]) {
			this.updateProfilePicture(input.files[0]);
		}
	}

	connectedCallback() {
		this.shadowRoot
			?.querySelector('#profile-picture-input')
			?.addEventListener('change', this.handleImageUpload.bind(this));
		this.render();
	}

	mount() {
		this.render();
		this.addListeners();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
            <section class='Cajon-Profile'>
                <div class='Edit-profile'>
                    <img class='imgProfile' src="${appState.editprofile.ProfilePictureInput || ''}" alt="">
                    <div class='infoProfile'>
                        <h1 class='name'>${appState.user.name || 'nofunciono'}</h1>
                        <p class='username'>@${appState.user.username || 'nofunciono'}</p>
                        <p class='followers'><strong class='strong'>${
													appState.user.followers || 0
												}</strong> followers</p>
                        <p class='info'>${appState.user.info || 'Hi! I am new to Connect Fandom'}</p>
                        <p class='email'>${appState.user.email || ''}</p>
                    </div>
                </div>
                <div>
                    <section id='section-button-logout' class='section-button-logout'></section>
                </div>
                <input type="file" id="profile-picture-input" style="display: none;">
            </section>
        `;

			const cssProfile = this.ownerDocument.createElement('style');
			cssProfile.innerHTML = styles;
			this.shadowRoot?.appendChild(cssProfile);

			const sectionButtonLogout = this.shadowRoot.getElementById('section-button-logout');
			sectionButtonLogout?.appendChild(new components.ButtonLogOut());
		}
	}

	addListeners() {
		this.shadowRoot?.querySelector('.imgProfile')?.addEventListener('click', () => {
			const input = this.shadowRoot?.querySelector('#profile-picture-input') as HTMLElement;
			input?.click();
		});
	}
}

customElements.define('edit-profile', EditProfile);
export default EditProfile;
