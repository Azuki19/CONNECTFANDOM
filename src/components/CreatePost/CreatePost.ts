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
		this.handleClick = this.handleClick.bind(this);
	}

	connectedCallback() {
		this.render();
		this.shadowRoot?.addEventListener('click', this.handleClick);
	}

	disconnectedCallback() {
		this.shadowRoot?.removeEventListener('click', this.handleClick);
	}

	handleClick() {
		if (!this.shadowRoot.querySelector('#popup')) {
			const popup = document.createElement('div');
			popup.innerHTML = `
            <div id="popupContent">
                <h2>Write a post on Connect Fandom!</h2>
                <textarea placeholder="Write your post here..."></textarea>
                <div id="close">X</div>
            </div>
            <div id="overlay"></div>
        `;
			popup.id = 'popup';
			this.shadowRoot.appendChild(popup);

			const closeButton = this.shadowRoot.querySelector('#close');
			closeButton.addEventListener('click', (event) => {
				event.stopPropagation();
				this.shadowRoot.removeChild(popup);
			});

			const overlay = this.shadowRoot.querySelector('#overlay');
			overlay.addEventListener('click', () => {
				this.shadowRoot.removeChild(popup);
			});
		}
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
                <style>
                    /* Estilos para el contenedor section */
                    section {
                        background-color: #fbfbfb;
                        border-radius: 10px;
                        padding: 20px;
                        cursor: pointer;
                    }

                </style>
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
