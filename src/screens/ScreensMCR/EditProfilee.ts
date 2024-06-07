import * as components from '../../components/indexPadre';
import { EditProfile } from '../../components/indexPadre';
import style from './editProfilee.css';

import { addObserver, appState, dispatch } from '../../store';
import { getPostsAction } from '../../store/action';
import { getBandsAction } from '../../store/action';

class AppEditProfile extends HTMLElement {
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

			const mainHeaderContainer = document.createElement('header');
			mainHeaderContainer.id = 'main-header-container';

			const miniHeaderContainer = document.createElement('div');
			miniHeaderContainer.id = 'mini-header-container';

			const title = document.createElement('h1');
			title.classList.add('title');
			title.textContent = 'ACCOUNT SETTINGS';

			const EditProfileContainer1 = document.createElement('div');
			EditProfileContainer1.id = 'edit-profile-container1';

			const EditProfileContainer = document.createElement('div');
			EditProfileContainer.id = 'edit-profile-container';

			this.shadowRoot.appendChild(section);
			section.appendChild(mainHeaderContainer);
			section.appendChild(miniHeaderContainer);
			section.appendChild(title);
			section.appendChild(EditProfileContainer1);

			EditProfileContainer1.appendChild(EditProfileContainer);

			this.editprofile.forEach((user) => {
				EditProfileContainer.appendChild(user);
			});

			const something = this.ownerDocument.createElement('input-profile');
			EditProfileContainer.appendChild(something);

			const cssAbuelo = this.ownerDocument.createElement('style');
			cssAbuelo.innerHTML = style;
			this.shadowRoot.appendChild(cssAbuelo);

			mainHeaderContainer.appendChild(new components.MainHeader());
			miniHeaderContainer.appendChild(new components.MiniHeader());
		}
	}
}

customElements.define('app-edit-profile', AppEditProfile);
export default AppEditProfile;
