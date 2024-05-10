import * as components from '../components/indexPadre';
import { EditProfile } from '../components/indexPadre';
import style from './editProfilee.css';
import { getPosts, getBands } from '../utils/firebase';

class AppEditProfile extends HTMLElement {
	editprofile: EditProfile[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.initializeData();
	}

	async initializeData() {
		try {
			const [posts, bands] = await Promise.all([getPosts(), getBands()]);

			const EditProfileData = posts.filter((user) => user.id === 1);

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

			const EditProfileContainer = document.createElement('label');
			EditProfileContainer.id = 'edit-profile-container';

			this.shadowRoot.appendChild(section);
			section.appendChild(mainHeaderContainer);
			section.appendChild(miniHeaderContainer);
			section.appendChild(title);
			section.appendChild(EditProfileContainer);

			this.editprofile.forEach((user) => {
				EditProfileContainer.appendChild(user);
			});

			const ButtonLogOutContainer = document.createElement('div');
			ButtonLogOutContainer.id = 'button-log-out-container';

			const ButtonLogOut = document.createElement('button-logout');
			ButtonLogOutContainer.appendChild(ButtonLogOut);

			section.appendChild(ButtonLogOutContainer);

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
