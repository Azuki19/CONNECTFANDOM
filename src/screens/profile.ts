import * as components from '../components/indexPadre';
import UserPost, { Attribute } from '../components/UserPost/UserPost';
import { CreatePost } from '../components/indexPadre';
import { EditProfile } from '../components/indexPadre';
import style from './profile.css';

import { addObserver, appState, dispatch } from '../store';
import { getPostsAction } from '../store/action';
import { getBandsAction } from '../store/action';
import { getUserDataAction } from '../store/action';

class ProfileDashboard extends HTMLElement {
	userpost: UserPost[] = [];
	createpost: CreatePost[] = [];
	editprofile: EditProfile[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.initializeData();
		addObserver(this);
	}

	async connectedCallback() {
		if (appState.userdata.Name === '' || Object.keys(appState.userdata).length === 0) {
			const action = await getUserDataAction(String(appState.user));
			dispatch(action);
		} else {
			this.render();
		}
	}

	async initializeData() {
		try {
			const UserData = appState.posts.filter((user) => user.id === 1);
			UserData.forEach((user) => {
				const UserPostCard = this.ownerDocument.createElement('user-post') as UserPost;

				UserPostCard.setAttribute(Attribute.uid, String(user.id));
				UserPostCard.setAttribute(Attribute.type, user.type);
				UserPostCard.setAttribute(Attribute.name, user.name);
				UserPostCard.setAttribute(Attribute.image, user.image);
				UserPostCard.setAttribute(Attribute.username, user.username);
				UserPostCard.setAttribute(Attribute.email, user.email);
				UserPostCard.setAttribute(Attribute.password, user.password);
				UserPostCard.setAttribute(Attribute.info, user.info);
				UserPostCard.setAttribute(Attribute.followers, String(user.followers));
				UserPostCard.setAttribute(Attribute.titlePost, user.posts.post1.titlePost);
				UserPostCard.setAttribute(Attribute.infoPost, user.posts.post1.infoPost);
				UserPostCard.setAttribute(Attribute.imagePost, user.posts.post1.imagePost);

				this.userpost.push(UserPostCard);
			});

			const EditProfileData = appState.posts.filter((user) => user.id === 1);

			EditProfileData.forEach((user) => {
				const EditProfileCard = this.ownerDocument.createElement('edit-profile') as EditProfile;
				EditProfileCard.setAttribute('uid', String(user.id));
				EditProfileCard.setAttribute('type', user.type);
				EditProfileCard.setAttribute('name', user.name);
				EditProfileCard.setAttribute('image', user.image);
				EditProfileCard.setAttribute('username', user.username);
				EditProfileCard.setAttribute('email', user.email);
				EditProfileCard.setAttribute('info', user.info);
				EditProfileCard.setAttribute('followers', String(user.followers));

				this.editprofile.push(EditProfileCard);
			});

			const BannerCreatePost = appState.posts.find((post) => post.id === 1);

			if (BannerCreatePost) {
				const CreatePostCard = this.ownerDocument.createElement('create-post') as CreatePost;

				CreatePostCard.setAttribute('uid', String(BannerCreatePost.id));
				CreatePostCard.setAttribute('image', BannerCreatePost.image);
				CreatePostCard.setAttribute('type', BannerCreatePost.type);

				this.createpost.push(CreatePostCard);
			}
			this.render();
		} catch (error) {
			console.error('Error fetching data from Firebase:', error);
		}
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
			<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
			<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

			<link rel="preconnect" href="https://fonts.googleapis.com">
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
			<link href="https://fonts.googleapis.com/css2?family=Braah+One&family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">

			<section id='background'>
				<header id="main-header-container"></header>
				<div id="mini-header-container"></div>

        <H1 class='title'>PROFILE</H1>

					<div id='downpart'>
						<div id="postsContainer">
							<section id="create-post-section">
            	</section>

							<div class='line1'>
								<hr></hr>
							</div>
              <div id="postsContainer">
							<section id="create-post-section">
            	</section>
            	<section id="user-posts-section">
            	</section>
              </div>
						</div>
					  <div id="second-part" class='second-part'>
    				<label id="edit-profile-container"></label>
						<section id='button-settings-section'></section>
						<section id='button-logout-section''></section>

</section>


            </section>
						</div>
					</div>
			</section>
        `;

			const mainHeaderContainer = this.shadowRoot.getElementById('main-header-container');
			mainHeaderContainer.appendChild(new components.MainHeader());

			const miniHeaderContainer = this.shadowRoot.getElementById('mini-header-container');
			miniHeaderContainer.appendChild(new components.MiniHeader());

			const createPostSection = this.shadowRoot.getElementById('create-post-section');
			const userPostsSection = this.shadowRoot.getElementById('user-posts-section');

			const EditProfileContainer = this.shadowRoot.getElementById('edit-profile-container');

			const ButtonSettings = this.shadowRoot.getElementById('button-settings-section');
			ButtonSettings.appendChild(new components.ButtonSettings());

			const ButtonLogOut = this.shadowRoot.getElementById('button-logout-section');
			ButtonLogOut.appendChild(new components.ButtonLogOut());

			const secondPart = this.shadowRoot.getElementById('second-part');

			//Agarro las secciones del html, las volvio constantes o cajitas.Luego cojio los componentes de maaaaas arriba y las metió en estas cajitas

			this.userpost.forEach((userpost) => {
				userPostsSection.appendChild(userpost);
			});

			this.createpost.forEach((createpost) => {
				createPostSection.appendChild(createpost);
			});

			this.editprofile.forEach((user) => {
				EditProfileContainer.appendChild(user);
			});

			const cssAbuelo = this.ownerDocument.createElement('style');
			cssAbuelo.innerHTML = style;
			this.shadowRoot?.appendChild(cssAbuelo);
		}
	}
}

customElements.define('profile-dashboard', ProfileDashboard);
export default ProfileDashboard;
