import styles from './UserPost.css';

export enum Attribute {
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

class UserPost extends HTMLElement {
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
		return Object.values(Attribute);
	}

	attributeChangedCallback(propName: string, oldValue: string | null, newValue: string | null) {
		if (newValue !== null) {
			switch (propName) {
				case Attribute.uid:
				case Attribute.followers:
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
			<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
          <section class='userPostComponent'>
            <div id='userPostProfile' class='userPostProfile'>
              <img class='profileImg' src="${this.image}"></img>
              <div class='userPostProfileInfo'>
                <h4>${this.name}</h4>
                <strong><h6>${this.username}</h6></strong>
              </div>
            </div>
            <div class='userPost'>
              <img class='imagePost' src="${this.imagepost}"></img>
              <div class='Inner'>
								<div class='PostInfo'>
                <h5>${this.titlepost}</h5>
                <p>${this.infopost}</p>
								<div class='buttons'>
								<button> like </button>
								//<i class="fa-regular fa-heart" style="color: #ac084d;"></i>
								<button> comment </button>
              </div>
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
