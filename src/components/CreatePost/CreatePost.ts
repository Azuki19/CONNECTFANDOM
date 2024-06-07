// import styles from './CreatePost.css';
// import { dispatch } from '../../store';
// import { getPostsAction, navigate } from '../../store/action';
// import { addObserver } from '../../store';
// import { addPost } from '../../utils/firebase';

// export enum CreatePostAttribute {
// 	'uid' = 'uid',
// 	'image' = 'image',
// 	'type' = 'type',
// }

// class CreatePost extends HTMLElement {
// 	uid?: number;
// 	image?: string;
// 	type?: string;

// 	static get observedAttributes() {
// 		return Object.values(CreatePostAttribute);
// 	}

// 	attributeChangedCallback(propName: string, oldValue: string | null, newValue: string | null) {
// 		if (newValue !== null) {
// 			switch (propName) {
// 				case CreatePostAttribute.uid:
// 					this[propName] = parseInt(newValue);
// 					break;
// 				default:
// 					this[propName] = newValue;
// 					break;
// 			}
// 		}
// 		this.render();
// 	}

// 	constructor() {
// 		super();
// 		this.attachShadow({ mode: 'open' });

// 		this.onButtonClicked = this.onButtonClicked.bind(this);
// 		addObserver(this);
// 	}

// 	connectedCallback() {
// 		this.render();
// 		this.shadowRoot?.addEventListener('click', this.handleClick);
// 		this.mount();
// 	}

// 	disconnectedCallback() {
// 		this.shadowRoot?.removeEventListener('click', this.handleClick);
// 	}

// 	mount() {
// 		this.render();
// 		this.addListeners();
// 	}

// 	handleClick = () => {
// 		if (!this.shadowRoot.querySelector('#popup')) {
// 			const popup = document.createElement('div');
// 			popup.id = 'popup';

// 			const popupContent = document.createElement('div');
// 			popupContent.id = 'popupContent';

// 			const titleContainer = document.createElement('div');
// 			titleContainer.id = 'titlee';
// 			const title = document.createElement('h2');
// 			title.id = 'title-c';
// 			title.textContent = 'WRITE A POST';
// 			titleContainer.appendChild(title);

// 			const mcrContainer = document.createElement('div');
// 			mcrContainer.id = 'MCR';
// 			const mcrText = document.createElement('h3');
// 			mcrText.id = 'MCRtext';
// 			mcrText.textContent = 'My Chemical Romance';
// 			mcrContainer.appendChild(mcrText);

// 			const downpop = document.createElement('div');
// 			downpop.id = 'downpop';

// 			// Crear los inputs
// 			const postTitleInput = document.createElement('input');
// 			postTitleInput.type = 'text';
// 			postTitleInput.placeholder = 'Title';
// 			postTitleInput.id = 'postTitle';

// 			const postInput = document.createElement('input');
// 			postInput.type = 'text';
// 			postInput.placeholder = 'Share your thoughts on Connect Fandom!';
// 			postInput.id = 'postInput';

// 			const postURLInput = document.createElement('input');
// 			postURLInput.type = 'text';
// 			postURLInput.placeholder = 'Image URL';
// 			postURLInput.id = 'postURL';

// 			// Añadir los inputs al contenedor
// 			downpop.appendChild(postTitleInput);
// 			downpop.appendChild(postInput);
// 			downpop.appendChild(postURLInput);

// 			const closeButton = document.createElement('div');
// 			closeButton.id = 'close';
// 			closeButton.textContent = 'X';
// 			closeButton.addEventListener('click', (event) => {
// 				event.stopPropagation();
// 				this.shadowRoot.removeChild(popup);
// 			});

// 			const buttonContainer = document.createElement('section');
// 			buttonContainer.id = 'button-container';

// 			downpop.appendChild(closeButton);
// 			downpop.appendChild(buttonContainer);

// 			popupContent.appendChild(titleContainer);
// 			popupContent.appendChild(mcrContainer);
// 			popupContent.appendChild(downpop);

// 			const overlay = document.createElement('div');
// 			overlay.id = 'overlay';
// 			overlay.addEventListener('click', () => {
// 				this.shadowRoot.removeChild(popup);
// 			});

// 			popup.appendChild(popupContent);
// 			popup.appendChild(overlay);

// 			this.shadowRoot.appendChild(popup);

// 			const sendButton = document.createElement('button');
// 			sendButton.textContent = 'Send';
// 			sendButton.addEventListener('click', () => {
// 				const form = {
// 					title: postTitleInput.value,
// 					content: postInput.value,
// 					imageUrl: postURLInput.value,
// 				};
// 				this.onButtonClicked(form);
// 			});
// 			buttonContainer.appendChild(sendButton);
// 		}
// 	};

// 	render() {
// 		if (this.shadowRoot) {
// 			this.shadowRoot.innerHTML = `
//                 <style>
//                     /* Estilos para el contenedor section */
//                     section {
//                         background-color: #fbfbfb;
//                         border-radius: 10px;
//                         padding: 20px;
//                         cursor: pointer;
//                     }
//                 </style>
//                 <section>
//                     <div>
//                         <img src="${this.image}" alt="">
//                         <h2>Write a post on Connect Fandom!</h2>
//                     </div>
//                     <div>
//                         <ion-icon class='image-outline' name="image-outline"></ion-icon>
//                     </div>
//                 </section>
//             `;
// 		}

// 		const cssCreatePost = this.ownerDocument.createElement('style');
// 		cssCreatePost.innerHTML = styles;
// 		this.shadowRoot?.appendChild(cssCreatePost);
// 	}

// 	addListeners() {
// 		this.shadowRoot.querySelector('#button-container')?.addEventListener('click', this.onButtonClicked);
// 	}

// 	// 	onButtonClicked(form: any) {
// 	// 		console.log('holaaa');
// 	// 		dispatch(addPost(form));
// 	// 		dispatch(navigate('DASHBOARD'));
// 	// 	}
// 	// }

// 	onButtonClicked = async (form: any) => {
// 		try {
// 			console.log('Adding post...');
// 			await addPost(form); // Espera a que se agregue el post
// 			const action = await getPostsAction(); // Obtiene los posts actualizados
// 			dispatch(action); // Despacha la acción para actualizar el estado con los posts
// 			dispatch(navigate('DASHBOARD')); // Navega al dashboard
// 		} catch (error) {
// 			console.error('Error adding post:', error);
// 		}
// 	};
// }
// customElements.define('create-post', CreatePost);
// export default CreatePost;

import styles from './CreatePost.css';
import { dispatch } from '../../store';
import { getPostsAction, navigate } from '../../store/action';
import { addObserver } from '../../store';
import { addPost } from '../../utils/firebase';
import { getAuth } from 'firebase/auth';

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
			popup.id = 'popup';

			const popupContent = document.createElement('div');
			popupContent.id = 'popupContent';

			const titleContainer = document.createElement('div');
			titleContainer.id = 'titlee';
			const title = document.createElement('h2');
			title.id = 'title-c';
			title.textContent = 'WRITE A POST';
			titleContainer.appendChild(title);

			const mcrContainer = document.createElement('div');
			mcrContainer.id = 'MCR';
			const mcrText = document.createElement('h3');
			mcrText.id = 'MCRtext';
			mcrText.textContent = 'My Chemical Romance';
			mcrContainer.appendChild(mcrText);

			const downpop = document.createElement('div');
			downpop.id = 'downpop';

			// Crear los inputs
			const postTitleInput = document.createElement('input');
			postTitleInput.type = 'text';
			postTitleInput.placeholder = 'Title';
			postTitleInput.id = 'postTitle';

			const postInput = document.createElement('input');
			postInput.type = 'text';
			postInput.placeholder = 'Share your thoughts on Connect Fandom!';
			postInput.id = 'postInput';

			const postURLInput = document.createElement('input');
			postURLInput.type = 'file';
			postURLInput.placeholder = 'Image URL';
			postURLInput.id = 'postURL';

			// Añadir los inputs al contenedor
			downpop.appendChild(postTitleInput);
			downpop.appendChild(postInput);
			downpop.appendChild(postURLInput);

			const closeButton = document.createElement('div');
			closeButton.id = 'close';
			closeButton.textContent = 'X';
			closeButton.addEventListener('click', (event) => {
				event.stopPropagation();
				this.shadowRoot.removeChild(popup);
			});

			const buttonContainer = document.createElement('section');
			buttonContainer.id = 'button-container';

			downpop.appendChild(closeButton);
			downpop.appendChild(buttonContainer);

			popupContent.appendChild(titleContainer);
			popupContent.appendChild(mcrContainer);
			popupContent.appendChild(downpop);

			const overlay = document.createElement('div');
			overlay.id = 'overlay';
			overlay.addEventListener('click', () => {
				this.shadowRoot.removeChild(popup);
			});

			popup.appendChild(popupContent);
			popup.appendChild(overlay);

			this.shadowRoot.appendChild(popup);

			const sendButton = document.createElement('button');
			sendButton.textContent = 'Send';
			sendButton.addEventListener('click', () => {
				const form = {
					title: postTitleInput.value,
					content: postInput.value,
					imageUrl: postURLInput.value,
					userId: this.uid, // Añadimos el UID del usuario autenticado
				};
				this.onButtonClicked(form);
			});
			buttonContainer.appendChild(sendButton);
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

	onButtonClicked = async (form: any) => {
		try {
			const auth = getAuth();
			const user = auth.currentUser;
			if (user) {
				form.userId = user.uid; // Añadir el UID del usuario autenticado
			}
			console.log('Adding post...', form);
			await addPost(form); // Espera a que se agregue el post
			const action = await getPostsAction(); // Obtiene los posts actualizados
			dispatch(action); // Despacha la acción para actualizar el estado con los posts
			dispatch(navigate('DASHBOARD')); // Navega al dashboard
		} catch (error) {
			console.error('Error adding post:', error);
		}
	};
}
customElements.define('create-post', CreatePost);
export default CreatePost;
