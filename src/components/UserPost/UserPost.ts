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
                <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
                <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

            `;
		}

		/* <section class='userPostComponent'>
            <div id='userPostProfile' class='userPostProfile'>
              <img class='profileImg' src="${this.image}"></img>
              <div class='userPostProfileInfo'>
                <h4>${this.name}</h4>
                <strong><h6 class='username'>${this.username}</h6></strong>
              </div>
            </div>
            <div class='userPost'>
              <img class='imagePost' src="${this.imagepost}"></img>
              <div class='Inner'>
								<div class='PostInfo'>
								<div class='up'>
                	<h5>${this.titlepost}</h5>
									<ion-icon name="language-outline"></ion-icon>
									</div>
                <p>${this.infopost}</p>
								<div class='buttons'>
								<ion-icon class='heart-outline' name="heart-outline"></ion-icon>
								<ion-icon name="chatbubble-ellipses-outline"></ion-icon>
              </div>
							</div>
            </div>
          </section>  */

		// Crear la sección de usuario con sus elementos
		const userPostSection = document.createElement('section');
		userPostSection.classList.add('userPostComponent');

		// Crear el contenedor del perfil de usuario
		const userPostProfileDiv = document.createElement('div');
		userPostProfileDiv.id = 'userPostProfile';
		userPostProfileDiv.classList.add('userPostProfile');

		// Crear la imagen de perfil
		const profileImg = document.createElement('img');
		profileImg.classList.add('profileImg');
		profileImg.src = this.image;

		// Crear el contenedor de información del perfil de usuario
		const userPostProfileInfoDiv = document.createElement('div');
		userPostProfileInfoDiv.classList.add('userPostProfileInfo');

		// Crear el nombre de usuario
		const nameHeading = document.createElement('h4');
		nameHeading.textContent = this.name;

		// Crear el nombre de usuario con strong
		const usernameStrong = document.createElement('strong');
		const usernameHeading = document.createElement('h6');
		usernameHeading.classList.add('username');
		usernameHeading.textContent = this.username;
		usernameStrong.appendChild(usernameHeading);

		// Agregar el nombre y el nombre de usuario al contenedor de información del perfil de usuario
		userPostProfileInfoDiv.appendChild(nameHeading);
		userPostProfileInfoDiv.appendChild(usernameStrong);

		// Agregar la imagen de perfil y la información del perfil de usuario al contenedor del perfil de usuario
		userPostProfileDiv.appendChild(profileImg);
		userPostProfileDiv.appendChild(userPostProfileInfoDiv);

		// Crear el contenedor del post del usuario
		const userPostDiv = document.createElement('div');
		userPostDiv.classList.add('userPost');

		// Crear la imagen del post
		const imagePost = document.createElement('img');
		imagePost.classList.add('imagePost');
		imagePost.src = this.imagepost;

		// Crear el contenedor interno del post
		const innerDiv = document.createElement('div');
		innerDiv.classList.add('Inner');

		// Crear el contenedor de información del post
		const postInfoDiv = document.createElement('div');
		postInfoDiv.classList.add('PostInfo');

		// Crear el título del post
		const titleHeading = document.createElement('h5');
		titleHeading.textContent = this.titlepost;

		// Crear el icono de idioma
		const languageIcon = document.createElement('ion-icon');
		languageIcon.setAttribute('name', 'language-outline');

		// Crear el párrafo de información del post
		const infoParagraph = document.createElement('p');
		infoParagraph.textContent = this.infopost;

		// Crear el contenedor de botones
		const buttonsDiv = document.createElement('div');
		buttonsDiv.classList.add('buttons');

		// Crear el icono del corazón
		const heartIcon = document.createElement('ion-icon');
		heartIcon.classList.add('heart-outline');
		heartIcon.setAttribute('name', 'heart-outline');

		// Crear el icono de burbujas de chat
		const chatIcon = document.createElement('ion-icon');
		chatIcon.setAttribute('name', 'chatbubble-ellipses-outline');

		// Agregar los elementos al contenedor de información del post
		postInfoDiv.appendChild(titleHeading);
		postInfoDiv.appendChild(languageIcon);
		postInfoDiv.appendChild(infoParagraph);
		postInfoDiv.appendChild(buttonsDiv);

		// Agregar los botones al contenedor de botones
		buttonsDiv.appendChild(heartIcon);
		buttonsDiv.appendChild(chatIcon);

		// Agregar el contenedor de información del post al contenedor interno del post
		innerDiv.appendChild(postInfoDiv);

		// Agregar la imagen del post y el contenedor interno del post al contenedor del post del usuario
		userPostDiv.appendChild(imagePost);
		userPostDiv.appendChild(innerDiv);

		// Agregar el contenedor del perfil de usuario y el contenedor del post del usuario a la sección de usuario
		userPostSection.appendChild(userPostProfileDiv);
		userPostSection.appendChild(userPostDiv);

		// Agregar el componente completo al Shadow DOM
		this.shadowRoot.appendChild(userPostSection);

		const cssUserPost = this.ownerDocument.createElement('style');
		cssUserPost.innerHTML = styles;
		this.shadowRoot?.appendChild(cssUserPost);

		heartIcon.addEventListener('click', () => {
			const nameIcon = heartIcon.getAttribute('name');
			if (nameIcon == 'heart') {
				heartIcon.setAttribute('name', 'heart-outline');
			} else {
				heartIcon.setAttribute('name', 'heart');
			}
		});
	}
}

customElements.define('user-post', UserPost);
export default UserPost;
