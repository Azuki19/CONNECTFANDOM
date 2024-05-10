import styles from './EditProfile.css';
import { dispatch } from '../../store';
import { navigate } from '../../store/action';
import { addObserver } from '../../store';

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
	followers?: number;
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
				case EditProfileAttribute.followers:
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

		this.onButtonClicked = this.onButtonClicked.bind(this);
		addObserver(this);
	}

	connectedCallback() {
		this.mount();
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
            <img class='imgProfile' src="${this.image}" alt="">
            <div class='infoProfile'>
              <h1 class='name'>${this.name}</h1>
              <p class='username'>@${this.username}</p>
							<p class='followers'><strong class='strong'>${this.followers} </strong>followers</p>
							<p class='info'>${this.info}</p>
            </div>
          </div>

					</section>
				`;
		}
		const cssProfile = this.ownerDocument.createElement('style');
		cssProfile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssProfile);
	}
	addListeners() {
		this.shadowRoot.querySelector('.imgProfile')?.addEventListener('click', this.onButtonClicked);
	}

	onButtonClicked() {
		console.log('holaaa');
		dispatch(navigate('PROFILE'));
	}
}
customElements.define('edit-profile', EditProfile);
export default EditProfile;
