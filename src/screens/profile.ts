import * as components from '../components/indexPadre';
import MainArtistPost, { Attribute } from '../components/MainArtistPost/MainArtistPost';
import MoreAbout, { MoreAboutAttribute } from '../components/MoreAbout/MoreAbout';
import CreatePost, { CreatePostAttribute } from '../components/CreatePost/CreatePost';
import { MyChemicalRomanceData } from '../data/MyChemicalRomanceData';
import { bandsdata } from '../data/bandsData';
import style from './profile.css';
import MiniProfile, { MiniProfileAttribute } from '../components/miniProfile/miniProfile';

class ProfileDashboard extends HTMLElement {
	mainartistpost: MainArtistPost[] = [];
	miniprofile: MiniProfile[] = [];
	moreabout: MoreAbout[] = [];
	createpost: CreatePost[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		const UserData = MyChemicalRomanceData.filter((user) => user.type === 'Artist');
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

		const miniData = MyChemicalRomanceData.filter((mini) => mini.id === 1);
		miniData.forEach((mini) => {
			const miniCard = this.ownerDocument.createElement('mini-profile') as MiniProfile;

			miniCard.setAttribute(MiniProfileAttribute.uid, String(mini.id));
			miniCard.setAttribute(MiniProfileAttribute.username, mini.username);
			miniCard.setAttribute(MiniProfileAttribute.name, mini.name);
			miniCard.setAttribute(MiniProfileAttribute.image, mini.image);
			miniCard.setAttribute(MiniProfileAttribute.followers, String(mini.followers));

			this.miniprofile.push(miniCard);
		});

		const BannerBand = bandsdata.find((band) => band.id === 1);

		if (BannerBand) {
			const MoreAboutCard = this.ownerDocument.createElement('more-about') as MoreAbout;

			MoreAboutCard.setAttribute(MoreAboutAttribute.uid, String(BannerBand.id));
			MoreAboutCard.setAttribute(MoreAboutAttribute.bandName, BannerBand.bandName);
			MoreAboutCard.setAttribute(MoreAboutAttribute.bandImage, BannerBand.bandImage);

			this.moreabout.push(MoreAboutCard);
		}

		const BannerCreatePost = MyChemicalRomanceData.find((post) => post.id === 1);

		if (BannerCreatePost) {
			const CreatePostCard = this.ownerDocument.createElement('create-post') as CreatePost;

			CreatePostCard.setAttribute(CreatePostAttribute.uid, String(BannerCreatePost.id));
			CreatePostCard.setAttribute(CreatePostAttribute.image, BannerCreatePost.image);
			CreatePostCard.setAttribute(CreatePostAttribute.type, BannerCreatePost.type);

			this.createpost.push(CreatePostCard);
		}
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

			const createPostSection = this.shadowRoot.getElementById('create-post-section');
			const userPostsSection = this.shadowRoot.getElementById('user-posts-section');

			const miniProfileSection = this.shadowRoot.getElementById('mini-profile-section');

			const moreAboutSection = this.shadowRoot.getElementById('more-about-section');

			const secondPart = this.shadowRoot.getElementById('second-part');

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

			this.createpost.forEach((createpost) => {
				createPostSection.appendChild(createpost);
			});

			const cssAbuelo = this.ownerDocument.createElement('style');
			cssAbuelo.innerHTML = style;
			this.shadowRoot?.appendChild(cssAbuelo);
		}
	}
}

customElements.define('profile-dashboard', ProfileDashboard);
