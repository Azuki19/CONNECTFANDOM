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
		const EditProfileCard = this.ownerDocument.createElement('edit-profile') as EditProfile;
		EditProfileCard.setAttribute('type', appState.user.type);
		EditProfileCard.setAttribute('name', appState.user.name);
		EditProfileCard.setAttribute('image', appState.user.image);
		EditProfileCard.setAttribute('username', appState.user.username);
		EditProfileCard.setAttribute('email', appState.user.email);
		EditProfileCard.setAttribute('info', appState.user.info);
		EditProfileCard.setAttribute('followers', appState.user.followers);

		this.editprofile.push(EditProfileCard);

		this.render();
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
