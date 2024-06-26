import styles from './MainArtistPost.css';

export enum Attribute {
	'uid' = 'uid',
	'type' = 'type',
	'name' = 'name',
	'image' = 'image',
	'username' = 'username',
	'titlePost' = 'titlepost',
	'infoPost' = 'infopost',
	'imagePost' = 'imagepost',
	'titlePost2' = 'titlepost2',
	'infoPost2' = 'infopost2',
	'imagePost2' = 'imagepost2',
}

class MainArtistPost extends HTMLElement {
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
	titlepost2?: string;
	infopost2?: string;
	imagepost2?: string;

	static get observedAttributes() {
		return Object.values(Attribute);
	}

	attributeChangedCallback(propName: string, oldValue: string | null, newValue: string | null) {
		if (newValue !== null) {
			switch (propName) {
				case Attribute.uid:
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

								<link rel="preconnect" href="https://fonts.googleapis.com">
								<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
								<link href="https://fonts.googleapis.com/css2?family=Braah+One&family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">

								`;

			/* <section class='ArtistPostComponent'>
								<div id='ArtistPostProfile' class='ArtistPostProfile'>
									<img class='profileImg' src="${this.image}"></img>
									<div class='ArtistPostProfileInfo'>
										<h4 class='name'>${this.name}</h4>
										<strong><h6 class='username'>@ ${this.username}</h6></strong>
									</div>
								</div>
								<div class='ArtistPost'>
									<img class='imagePost' src="${this.imagepost}"></img>
									<div class='Inner'>
										<div class='PostInfo'>
										<div class='up'>
											<h5>${this.titlepost}</h5>
											<ion-icon name="ellipsis-vertical-outline"></ion-icon>
										</div>
										<p>${this.infopost}</p>
										<div class='buttons'>
										<ion-icon class='heart-outline' name="heart-outline"></ion-icon>
										<ion-icon name="chatbubble-ellipses-outline"></ion-icon>
									</div>
								</div>
			</section>

										<div class='line'>
											<hr></hr>
										</div>
							*/
		}
		const userPostSection = document.createElement('section');
		userPostSection.classList.add('userPostComponent');

		const userPostProfileDiv = document.createElement('div');
		userPostProfileDiv.id = 'userPostProfile';
		userPostProfileDiv.classList.add('userPostProfile');

		const profileImg = document.createElement('img');
		profileImg.classList.add('profileImg');
		profileImg.src = this.image || '';

		const userPostProfileInfoDiv = document.createElement('div');
		userPostProfileInfoDiv.classList.add('userPostProfileInfo');

		const nameHeading = document.createElement('h4');
		nameHeading.textContent = this.name || '';
		nameHeading.classList.add('name');

		const usernameStrong = document.createElement('strong');
		const usernameHeading = document.createElement('h6');
		usernameHeading.classList.add('username');
		usernameHeading.textContent = `@${this.username}` || '';
		usernameStrong.appendChild(usernameHeading);

		userPostProfileInfoDiv.appendChild(nameHeading);
		userPostProfileInfoDiv.appendChild(usernameStrong);

		userPostProfileDiv.appendChild(profileImg);
		userPostProfileDiv.appendChild(userPostProfileInfoDiv);

		const userPostDiv = document.createElement('div');
		userPostDiv.classList.add('userPost');

		const imagePost = document.createElement('img');
		imagePost.classList.add('imagePost');
		imagePost.src = this.imagepost || '';

		const innerDiv = document.createElement('div');
		innerDiv.classList.add('Inner');

		const postInfoDiv = document.createElement('div');
		postInfoDiv.classList.add('PostInfo');

		const infoParagraph = document.createElement('p');
		infoParagraph.textContent = this.infopost || '';
		infoParagraph.classList.add('text');

		const upDiv = document.createElement('div');
		upDiv.classList.add('up');

		const titleHeading = document.createElement('h5');
		titleHeading.textContent = this.titlepost || '';
		titleHeading.classList.add('title');

		upDiv.appendChild(titleHeading);

		const buttonsDiv = document.createElement('div');
		buttonsDiv.classList.add('buttons');

		const heartIcon = document.createElement('ion-icon');
		heartIcon.classList.add('heart-outline');
		heartIcon.setAttribute('name', 'heart-outline');

		const chatIcon = document.createElement('ion-icon');
		chatIcon.setAttribute('name', 'chatbubble-ellipses-outline');
		chatIcon.classList.add('chatbubble-ellipses-outline');

		postInfoDiv.appendChild(upDiv);
		postInfoDiv.appendChild(infoParagraph);
		postInfoDiv.appendChild(buttonsDiv);

		buttonsDiv.appendChild(heartIcon);
		buttonsDiv.appendChild(chatIcon);

		innerDiv.appendChild(postInfoDiv);

		userPostDiv.appendChild(imagePost);
		userPostDiv.appendChild(innerDiv);

		userPostSection.appendChild(userPostProfileDiv);
		userPostSection.appendChild(userPostDiv);

		this.shadowRoot?.appendChild(userPostSection);

		const lineDiv = document.createElement('div');
		lineDiv.classList.add('linepost');
		const hrElement = document.createElement('hr');

		lineDiv.appendChild(hrElement);
		this.shadowRoot?.appendChild(lineDiv);

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

		const userPostSection2 = document.createElement('section');
		userPostSection2.classList.add('userPostComponent');

		const userPostProfileDiv2 = document.createElement('div');
		userPostProfileDiv2.id = 'userPostProfile';
		userPostProfileDiv2.classList.add('userPostProfile');

		const profileImg2 = document.createElement('img');
		profileImg2.classList.add('profileImg');
		profileImg2.src = this.image || '';

		const userPostProfileInfoDiv2 = document.createElement('div');
		userPostProfileInfoDiv2.classList.add('userPostProfileInfo');

		const nameHeading2 = document.createElement('h4');
		nameHeading2.textContent = this.name || '';
		nameHeading2.classList.add('name');

		const usernameStrong2 = document.createElement('strong');
		const usernameHeading2 = document.createElement('h6');
		usernameHeading2.classList.add('username');
		usernameHeading2.textContent = `@${this.username}` || '';
		usernameStrong2.appendChild(usernameHeading2);

		userPostProfileInfoDiv2.appendChild(nameHeading2);
		userPostProfileInfoDiv2.appendChild(usernameStrong2);

		userPostProfileDiv2.appendChild(profileImg2);
		userPostProfileDiv2.appendChild(userPostProfileInfoDiv2);

		const userPostDiv2 = document.createElement('div');
		userPostDiv2.classList.add('userPost');

		const imagePost2 = document.createElement('img');
		imagePost2.classList.add('imagePost');
		imagePost2.src = this.imagepost2 || '';

		const innerDiv2 = document.createElement('div');
		innerDiv2.classList.add('Inner');

		const postInfoDiv2 = document.createElement('div');
		postInfoDiv2.classList.add('PostInfo');

		const infoParagraph2 = document.createElement('p');
		infoParagraph2.textContent = this.infopost2 || '';
		infoParagraph2.classList.add('text');

		const upDiv2 = document.createElement('div');
		upDiv2.classList.add('up');

		const titleHeading2 = document.createElement('h5');
		titleHeading2.textContent = this.titlepost2 || '';
		titleHeading2.classList.add('title');

		upDiv2.appendChild(titleHeading2);

		const buttonsDiv2 = document.createElement('div');
		buttonsDiv2.classList.add('buttons');

		const heartIcon2 = document.createElement('ion-icon');
		heartIcon2.classList.add('heart-outline');
		heartIcon2.setAttribute('name', 'heart-outline');

		const chatIcon2 = document.createElement('ion-icon');
		chatIcon2.setAttribute('name', 'chatbubble-ellipses-outline');
		chatIcon2.classList.add('chatbubble-ellipses-outline');

		postInfoDiv2.appendChild(upDiv2);
		postInfoDiv2.appendChild(infoParagraph2);
		postInfoDiv2.appendChild(buttonsDiv2);

		buttonsDiv2.appendChild(heartIcon2);
		buttonsDiv2.appendChild(chatIcon2);

		innerDiv2.appendChild(postInfoDiv2);

		userPostDiv2.appendChild(imagePost2);
		userPostDiv2.appendChild(innerDiv2);

		userPostSection2.appendChild(userPostProfileDiv2);
		userPostSection2.appendChild(userPostDiv2);

		this.shadowRoot?.appendChild(userPostSection2);

		const lineDiv2 = document.createElement('div');
		lineDiv2.classList.add('linepost');
		const hrElement2 = document.createElement('hr');

		lineDiv2.appendChild(hrElement2);
		this.shadowRoot?.appendChild(lineDiv2);

		heartIcon2.addEventListener('click', () => {
			const nameIcon2 = heartIcon2.getAttribute('name');
			if (nameIcon2 == 'heart') {
				heartIcon2.setAttribute('name', 'heart-outline');
			} else {
				heartIcon2.setAttribute('name', 'heart');
			}
		});
	}
}

customElements.define('main-artist-post', MainArtistPost);
export default MainArtistPost;
