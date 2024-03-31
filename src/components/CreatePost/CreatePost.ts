import styles from './CreatePost.css';

export enum CreatePostAttribute {
	'uid' = 'uid',
	'image' = 'image',
	'type' = 'type',
}

class CreatePost extends HTMLElement {
	uid?: number;
	image?: string;
	type?: string;

	static get observedAttributes() {
		return Object.values(CreatePostAttribute);
	}

	attributeChangedCallback(propName: string, oldValue: string | null, newValue: string | null) {
		if (newValue !== null) {
			switch (propName) {
				case CreatePostAttribute.uid:
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
			<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
			<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

      <section>
        <div>
           <img src="${this.image}" alt="">
           <h2>Write a post on Connect Fandom!</h2>
        </div>

           <div>
           	<ion-icon class='image-outline' name="image-outline"></ion-icon>
           </div>
       </section>
       `;
		}
		const cssCreatePost = this.ownerDocument.createElement('style');
		cssCreatePost.innerHTML = styles;
		this.shadowRoot?.appendChild(cssCreatePost);
	}
}

customElements.define('create-post', CreatePost);
export default CreatePost;
