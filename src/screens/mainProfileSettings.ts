import * as components from '../components/indexPadre';
import { EditProfile } from '../components/indexPadre';
import style from './editProfilee.css';

import { addObserver, appState, dispatch } from '../store';
import { getPostsAction } from '../store/action';
import { getBandsAction } from '../store/action';

class MainSettings extends HTMLElement {
	editprofile: EditProfile[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.initializeData();
		addObserver(this);
	}

	async connectedCallback() {
		if (appState.posts.length === 0) {
			const action = await getPostsAction();
			dispatch(action);
			const action2 = await getBandsAction();
			dispatch(action2);
		}
	}

	async initializeData() {
		try {
			const EditProfileData = appState.posts.filter((user) => user.id === 1);

			EditProfileData.forEach((user) => {
				const EditProfileCard = this.ownerDocument.createElement('edit-profile') as EditProfile;
				EditProfileCard.setAttribute('uid', String(user.id));
				EditProfileCard.setAttribute('type', user.type);
				EditProfileCard.setAttribute('name', user.name);
				EditProfileCard.setAttribute('image', user.image);
				EditProfileCard.setAttribute('username', user.username);
				EditProfileCard.setAttribute('email', user.email);
				EditProfileCard.setAttribute('info', user.info);
				EditProfileCard.setAttribute('followers', String(user.followers));

				this.editprofile.push(EditProfileCard);
			});

			this.render();
		} catch (error) {
			console.error('Error fetching data from Firebase:', error);
		}
	}

	render() {
		if (this.shadowRoot) {
			const section = document.createElement('section');
			section.classList.add('background');

			const mainmainHeaderContainer = document.createElement('header');
			mainmainHeaderContainer.id = 'mainmain-header-container';

			const title = document.createElement('h1');
			title.classList.add('title');
			title.textContent = 'ACCOUNT SETTINGS';

			const EditProfileContainer1 = document.createElement('label');
			EditProfileContainer1.id = 'edit-profile-container1';

			const EditProfileContainer = document.createElement('label');
			EditProfileContainer.id = 'edit-profile-container';

			this.shadowRoot.appendChild(section);
			EditProfileContainer1.appendChild(EditProfileContainer);
			section.appendChild(mainmainHeaderContainer);
			section.appendChild(title);
			section.appendChild(EditProfileContainer1);

			this.editprofile.forEach((user) => {
				EditProfileContainer.appendChild(user);
			});

			const something = this.ownerDocument.createElement('input-profile');
			EditProfileContainer.appendChild(something);

			const cssAbuelo = this.ownerDocument.createElement('style');
			cssAbuelo.innerHTML = style;
			this.shadowRoot.appendChild(cssAbuelo);

			mainmainHeaderContainer.appendChild(new components.MainMainHeader());
		}
	}
}

customElements.define('main-settings', MainSettings);
export default MainSettings;
