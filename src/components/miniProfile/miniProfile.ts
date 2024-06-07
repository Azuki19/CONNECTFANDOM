import styles from './miniProfile.css';
import { appState, dispatch } from '../../store';
import { navigate } from '../../store/action';
import { addObserver } from '../../store';

export enum MiniProfileAttribute {
	'uid' = 'uid',
	'image' = 'image',
	'name' = 'name',
	'username' = 'username',
	'followers' = 'followers',
}

class MiniProfile extends HTMLElement {
	uid?: number;
	image?: string;
	name?: string;
	username?: string;
	followers?: string;

	static get observedAttributes() {
		return Object.values(MiniProfileAttribute);
	}

	attributeChangedCallback(propName: string, oldValue: string | null, newValue: string | null) {
		if (newValue !== null) {
			switch (propName) {
				case MiniProfileAttribute.uid:
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
		this.render();
		this.addListeners();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
        <section class='Cajon-Profile'>
          <div class='Edit-profile'>
            <img class='imgProfile' src="${appState.user.image}" alt="">
            <div class='infoProfile'>
              <h1 class='name'>${appState.user.name}</h1>
              <p class='username'>@${appState.user.username}</p>
							<p class='followers'>${appState.user.followers} followers</p>
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
		this.shadowRoot.querySelector('.Cajon-Profile')?.addEventListener('click', this.onButtonClicked);
	}

	onButtonClicked() {
		console.log('holaaa');
		dispatch(navigate('PROFILE'));
	}
}
customElements.define('mini-profile', MiniProfile);
export default MiniProfile;
