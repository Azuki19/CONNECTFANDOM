import styles from './CreatePost.css';
import { dispatch } from '../../store';
import { navigate } from '../../store/action';
import { addObserver } from '../../store';

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

		this.onButtonClicked = this.onButtonClicked.bind(this);
		addObserver(this);
	}

	connectedCallback() {
		this.render();
		this.shadowRoot?.addEventListener('click', this.handleClick);
		this.mount();
	}

	disconnectedCallback() {
		this.shadowRoot?.removeEventListener('click', this.handleClick);
	}

	mount() {
		this.render();
		this.addListeners();
	}

	handleClick = () => {
		if (!this.shadowRoot.querySelector('#popup')) {
			const popup = document.createElement('div');
			popup.innerHTML = `
            <div id="popupContent">
							<div id="titlee">
                <h2 id="title-c">WRITE A POST</h2>
							</div>
							<div id="MCR">
							<h3 id="MCRtext"> My Chemical Romance</h3>
							</div>
							<div id="downpop">
                <input type="text" placeholder="Title" id="postTitle" /> <!-- Input para el título del post -->
                <input type="text" placeholder="Share your thoughts on Connect Fandom!" id="postInput" />
                <input type="text" placeholder="Image URL" id="postURL" /> <!-- Input para etiquetas -->
                <div id="close">X</div>
                <section id="button-container"></section>
              </div>
            </div>
            <div id="overlay"></div>
        `;

			const buttonContainer = popup.querySelector('#button-container');
			const sendButton = document.createElement('button');
			sendButton.textContent = 'Send';
			sendButton.addEventListener('click', this.onButtonClicked);
			buttonContainer?.appendChild(sendButton);

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
	};

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

	addListeners() {
		this.shadowRoot.querySelector('#button-container')?.addEventListener('click', this.onButtonClicked);
	}

	onButtonClicked() {
		console.log('holaaa');
		dispatch(navigate('DASHBOARD'));
	}
}

customElements.define('create-post', CreatePost);
export default CreatePost;
