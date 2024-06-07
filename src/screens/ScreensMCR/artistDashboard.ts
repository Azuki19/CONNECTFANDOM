import * as components from '../../components/indexPadre';
import MainArtistPost, { Attribute } from '../../components/MainArtistPost/MainArtistPost';
import MoreAbout, { MoreAboutAttribute } from '../../components/MoreAbout/MoreAbout';
import style from './artistDashboard.css';
import MiniProfile, { MiniProfileAttribute } from '../../components/miniProfile/miniProfile';

import { addObserver, appState, dispatch } from '../../store';
import { getPostsAction } from '../../store/action';
import { getBandsAction } from '../../store/action';

class AppArtistDashboard extends HTMLElement {
	mainartistpost: MainArtistPost[] = [];
	miniprofile: MiniProfile[] = [];
	moreabout: MoreAbout[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.initializeData();
		addObserver(this);
	}

	async connectedCallback() {
		if (appState.posts.length === 0) {
			const action = await getPostsAction();
			dispatch(action);
			const action2 = await getBandsAction();
			dispatch(action2);
		}
	}

	async initializeData() {
		try {
			const UserData = appState.posts.filter((user) => user.type === 'Artist');
			UserData.forEach((user) => {
				const UserPostCard = this.ownerDocument.createElement('main-artist-post') as MainArtistPost;

				UserPostCard.setAttribute(Attribute.uid, String(user.id));
				UserPostCard.setAttribute(Attribute.type, user.type);
				UserPostCard.setAttribute(Attribute.name, user.name);
				UserPostCard.setAttribute(Attribute.image, user.image);
				UserPostCard.setAttribute(Attribute.username, user.username);
				UserPostCard.setAttribute(Attribute.titlePost, user.posts.post1.titlePost);
				UserPostCard.setAttribute(Attribute.infoPost, user.posts.post1.infoPost);
				UserPostCard.setAttribute(Attribute.imagePost, user.posts.post1.imagePost);

				if (user.posts.post2) {
					UserPostCard.setAttribute(Attribute.titlePost2, user.posts.post2.titlePost2);
					UserPostCard.setAttribute(Attribute.infoPost2, user.posts.post2.infoPost2);
					UserPostCard.setAttribute(Attribute.imagePost2, user.posts.post2.imagePost2);
				}

				this.mainartistpost.push(UserPostCard);
			});

			const miniData = appState.posts.filter((mini) => mini.id === 1);
			miniData.forEach((mini) => {
				const miniCard = this.ownerDocument.createElement('mini-profile') as MiniProfile;

				miniCard.setAttribute(MiniProfileAttribute.uid, String(mini.id));
				miniCard.setAttribute(MiniProfileAttribute.username, mini.username);
				miniCard.setAttribute(MiniProfileAttribute.name, mini.name);
				miniCard.setAttribute(MiniProfileAttribute.image, mini.image);
				miniCard.setAttribute(MiniProfileAttribute.followers, mini.followers);

				this.miniprofile.push(miniCard);
			});

			const BannerBand = appState.bands.find((band) => band.id === 1);

			if (BannerBand) {
				const MoreAboutCard = this.ownerDocument.createElement('more-about') as MoreAbout;

				MoreAboutCard.setAttribute(MoreAboutAttribute.uid, String(BannerBand.id));
				MoreAboutCard.setAttribute(MoreAboutAttribute.bandName, BannerBand.bandName);
				MoreAboutCard.setAttribute(MoreAboutAttribute.bandImage, BannerBand.bandImage);

				this.moreabout.push(MoreAboutCard);
			}
			// Llama a render() al final de initializeData()
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

					<div id='downpart'>
						<div id="postsContainer">
							<section id="create-post-section">
            	</section>

							<div class='line1'>
								<hr></hr>
							</div>

            	<section id="user-posts-section">
            	</section>
						</div>
					  <div id="second-part" class='second-part'>
            	<section id="mini-profile-section">
            	</section>
            	<section id="more-about-section">
            </section>
						</div>
					</div>
			</section>
        `;

			const mainHeaderContainer = this.shadowRoot.getElementById('main-header-container');
			mainHeaderContainer.appendChild(new components.MainHeader());

			const miniHeaderContainer = this.shadowRoot.getElementById('mini-header-container');
			miniHeaderContainer.appendChild(new components.MiniHeader());

			const userPostsSection = this.shadowRoot.getElementById('user-posts-section');

			const miniProfileSection = this.shadowRoot.getElementById('mini-profile-section');

			const moreAboutSection = this.shadowRoot.getElementById('more-about-section');

			//Agarro las secciones del html, las volvio constantes o cajitas.Luego cojio los componentes de maaaaas arriba y las metió en estas cajitas

			this.mainartistpost.forEach((mainartistpost) => {
				userPostsSection.appendChild(mainartistpost);
			});

			this.miniprofile.forEach((miniprofile) => {
				miniProfileSection.appendChild(miniprofile);
			});

			this.moreabout.forEach((moreabout) => {
				moreAboutSection.appendChild(moreabout);
			});

			const cssAbuelo = this.ownerDocument.createElement('style');
			cssAbuelo.innerHTML = style;
			this.shadowRoot?.appendChild(cssAbuelo);
		}
	}
}

customElements.define('app-artist-dashboard', AppArtistDashboard);
export default AppArtistDashboard;
