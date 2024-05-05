import styles from './miniProfile.css';

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
	followers?: number;

	static get observedAttributes() {
		return Object.values(MiniProfileAttribute);
	}

	attributeChangedCallback(propName: string, oldValue: string | null, newValue: string | null) {
		if (newValue !== null) {
			switch (propName) {
				case MiniProfileAttribute.uid:
				case MiniProfileAttribute.followers:
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
	}
	connectedCallback() {
		this.render();
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
							<p class='followers'>@${this.followers}</p>
            </div>
          </div>

					</section>
				`;
		}
		const cssProfile = this.ownerDocument.createElement('style');
		cssProfile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssProfile);
	}
}

customElements.define('mini-profile', MiniProfile);
export default MiniProfile;
