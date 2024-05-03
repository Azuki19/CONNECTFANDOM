import * as components from '../components/indexPadre';
import UserPost, { Attribute } from '../components/UserPost/UserPost';
import ArtistPost, { ArtistAttribute } from '../components/ArtistPost/ArtistPost';
import MoreAbout, { MoreAboutAttribute } from '../components/MoreAbout/MoreAbout';
import CreatePost, { CreatePostAttribute } from '../components/CreatePost/CreatePost';
import { MyChemicalRomanceData } from '../data/MyChemicalRomanceData';
import { bandsdata } from '../data/bandsData';
import style from './dashboard.css';

class AppDashboard extends HTMLElement {
	userpost: UserPost[] = [];
	artistpost: ArtistPost[] = [];
	moreabout: MoreAbout[] = [];
	createpost: CreatePost[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		const UserData = MyChemicalRomanceData.filter((user) => user.type === 'User');

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

		const ArtistData = MyChemicalRomanceData.filter((user) => user.type === 'Artist');

		ArtistData.forEach((artist) => {
			const ArtistPostCard = this.ownerDocument.createElement('artist-post') as ArtistPost;

			ArtistPostCard.setAttribute(ArtistAttribute.uid, String(artist.id));
			ArtistPostCard.setAttribute(ArtistAttribute.type, artist.type);
			ArtistPostCard.setAttribute(ArtistAttribute.name, artist.name);
			ArtistPostCard.setAttribute(ArtistAttribute.image, artist.image);
			ArtistPostCard.setAttribute(ArtistAttribute.username, artist.username);
			ArtistPostCard.setAttribute(ArtistAttribute.email, artist.email);
			ArtistPostCard.setAttribute(ArtistAttribute.password, artist.password);
			ArtistPostCard.setAttribute(ArtistAttribute.info, artist.info);
			ArtistPostCard.setAttribute(ArtistAttribute.followers, String(artist.followers));
			ArtistPostCard.setAttribute(ArtistAttribute.titlePost, artist.posts.post1.titlePost);
			ArtistPostCard.setAttribute(ArtistAttribute.infoPost, artist.posts.post1.infoPost);
			ArtistPostCard.setAttribute(ArtistAttribute.imagePost, artist.posts.post1.imagePost);

			this.artistpost.push(ArtistPostCard);
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
		this.setupScrollHandlers();
	}

	setupScrollHandlers() {
		if (this.shadowRoot) {
			const arrowBack = this.shadowRoot.getElementById('chevron-back-outline');
			const arrowForward = this.shadowRoot.getElementById('chevron-forward-outline');
			const artistPostsSection = this.shadowRoot.getElementById('artist-posts-section');

			arrowBack?.addEventListener('click', () => {
				artistPostsSection?.scrollBy({ left: -400, behavior: 'smooth' });
			});

			arrowForward?.addEventListener('click', () => {
				artistPostsSection?.scrollBy({ left: 400, behavior: 'smooth' });
			});
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

						<div id='arrows'>
							<div id='arrow1'>
								<ion-icon id='chevron-back-outline'name="chevron-back-outline"></ion-icon>
							</div>

            		<section class='artist-posts-section' id="artist-posts-section">
            		</section>

								<div id='arrow2'>
									<ion-icon id='chevron-forward-outline' name="chevron-forward-outline"></ion-icon>
								</div>

						</div>

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
            <section id="more-about-section">
            </section>
					</div>
			</section>
        `;

			const mainHeaderContainer = this.shadowRoot.getElementById('main-header-container');
			mainHeaderContainer.appendChild(new components.MainHeader());

			const miniHeaderContainer = this.shadowRoot.getElementById('mini-header-container');
			miniHeaderContainer.appendChild(new components.MiniHeader());

			const artistPostsSection = this.shadowRoot.getElementById('artist-posts-section');
			const userPostsSection = this.shadowRoot.getElementById('user-posts-section');
			const moreAboutSection = this.shadowRoot.getElementById('more-about-section');
			const createPostSection = this.shadowRoot.getElementById('create-post-section');

			//Agarro las secciones del html, las volvio constantes o cajitas.Luego cojio los componentes de maaaaas arriba y las metió en estas cajitas

			this.artistpost.forEach((artistpost) => {
				artistPostsSection.appendChild(artistpost);
			});

			this.userpost.forEach((userpost) => {
				userPostsSection.appendChild(userpost);
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

customElements.define('app-dashboard', AppDashboard);
