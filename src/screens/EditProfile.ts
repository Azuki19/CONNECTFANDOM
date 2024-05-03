import { MyChemicalRomanceData } from '../data/MyChemicalRomanceData';
import * as components from '../components/indexPadre';
import { EditProfileAtt } from '../components/indexPadre';
import style from './editProfile.css';

class AppEditProfile extends HTMLElement {
	editprofile: EditProfileAtt[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		const EditProfileData = MyChemicalRomanceData.filter((user) => user.type === 'User');
		EditProfileData.forEach((user) => {
			const EditProfileCard = this.ownerDocument.createElement('edit-profile') as EditProfileAtt;
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
	}

	connectedCallback() {
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

			const EditProfileContainer = document.createElement('label');
			EditProfileContainer.id = 'edit-profile-container';

			section.appendChild(EditProfileContainer);

			this.editprofile.forEach((user) => {
				EditProfileContainer.appendChild(user);
			});

			const cssAbuelo = this.ownerDocument.createElement('style');
			cssAbuelo.innerHTML = style;
			this.shadowRoot.appendChild(cssAbuelo);

			mainHeaderContainer.appendChild(new components.MainHeader());
			miniHeaderContainer.appendChild(new components.MiniHeader());
		}
	}
}

customElements.define('app-edit-profile', AppEditProfile);
