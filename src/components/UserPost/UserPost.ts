import styles from './UserPost.css';

export enum Attribute {
	'uid' = 'uid',
	'name' = 'name',
	'image' = 'image',
	'username' = 'username',
	'email' = 'email',
	'password' = 'password',
	'info' = 'info',
	'followers' = 'followers',
	'TitlePost' = 'titlepost',
	'InfoPost' = 'infopost',
	'ImagePost' = 'imagepost',
}

class UserPost extends HTMLElement {
	uid?: number;
	name?: any;
	image?: string;
	username?: any;
	email?: any;
	password?: any;
	info?: any;
	followers?: number;
	titlepost?: any;
	infopost?: any;
	imagepost?: string;

	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			uid: null,
			name: null,
			image: null,
			username: null,
			email: null,
			password: null,
			info: null,
			followers: null,
			titlepost: null,
			infopost: null,
			imagepost: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			case Attribute.uid:
				this.uid = newValue ? Number(newValue) : undefined;
				break;

			case Attribute.followers:
				this.followers = newValue ? Number(newValue) : undefined;
				break;

			default:
				this[propName] = newValue;
				break;
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

          <section class= 'userPostComponent'>

          <div class='userPostProfile>
                <img class= 'card img' src="${this.image}"></img>

              <div class='userPostProfileInfo>
              <h4>${this.name}</h4><strong>
              <h6>${this.username}<h6>
              </div>

          </div>
          <div class='userPost'>

            <img class= 'imagePost' src="${this.imagepost}"></img>

            <div class= 'PostInfo>
              <h5>${this.titlepost}<h5>
              <p>${this.infopost}<p>
            </div>
          </div>

          </section>
          `;
		}
		const cssUserPost = this.ownerDocument.createElement('style');
		cssUserPost.innerHTML = styles;
		this.shadowRoot?.appendChild(cssUserPost);
	}
}

customElements.define('user-post', UserPost);
export default UserPost;
