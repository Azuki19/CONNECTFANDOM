import styles from './ArtistPost.css';

export enum ArtistAttribute {
	'uid' = 'uid',
	'type' = 'type',
	'name' = 'name',
	'image' = 'image',
	'username' = 'username',
	'email' = 'email',
	'password' = 'password',
	'info' = 'info',
	'followers' = 'followers',
	'titlePost' = 'titlepost',
	'infoPost' = 'infopost',
	'imagePost' = 'imagepost',
}

class ArtistPost extends HTMLElement {
	uid?: number;
	type?: string;
	name?: string;
	image?: string;
	username?: string;
	email?: string;
	password?: string;
	info?: string;
	followers?: number;
	titlepost?: string;
	infopost?: string;
	imagepost?: string;

	static get observedAttributes() {
		return Object.values(ArtistAttribute);
	}

	attributeChangedCallback(propName: string, oldValue: string | null, newValue: string | null) {
		if (newValue !== null) {
			switch (propName) {
				case ArtistAttribute.uid:
				case ArtistAttribute.followers:
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
        <section class='artistPost'>
          <div class='profile'>
            <img class='imgProfile' src="${this.image}" alt="">
            <div class='infoProfile'>
              <h1>${this.name}</h1>
              <p>${this.username}</p>
            </div>
          </div>

          <div class='infoPost'>
            <p>${this.titlepost}</p>
            <p>${this.infopost}</p>
          </div>
        </section>
      `;
		}

		const cssArtistPost = this.ownerDocument.createElement('style');
		cssArtistPost.innerHTML = styles;
		this.shadowRoot?.appendChild(cssArtistPost);
	}
}

customElements.define('artist-post', ArtistPost);
export default ArtistPost;
