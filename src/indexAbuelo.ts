import * as components from './components/indexPadre';
import UserPost, { Attribute } from './components/UserPost/UserPost';
import ArtistPost, { ArtistAttribute } from './components/ArtistPost/ArtistPost';
import MoreAbout, { MoreAboutAttribute } from './components/MoreAbout/MoreAbout';
import CreatePost, { CreatePostAttribute } from './components/CreatePost/CreatePost';
import { data } from './data/data';
import { bandsdata } from './data/bandsData';

class AppContainer extends HTMLElement {
	userpost: UserPost[] = [];
	artistpost: ArtistPost[] = [];
	moreabout: MoreAbout[] = [];
	createpost: CreatePost[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		const UserData = data.filter((user) => user.type === 'User');

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
			UserPostCard.setAttribute(Attribute.titlePost, user.post1.titlePost);
			UserPostCard.setAttribute(Attribute.infoPost, user.post1.infoPost);
			UserPostCard.setAttribute(Attribute.imagePost, user.post1.imagePost);

			this.userpost.push(UserPostCard);
		});

		const ArtistData = data.filter((user) => user.type === 'Artist');

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
			ArtistPostCard.setAttribute(ArtistAttribute.titlePost, artist.post1.titlePost);
			ArtistPostCard.setAttribute(ArtistAttribute.infoPost, artist.post1.infoPost);
			ArtistPostCard.setAttribute(ArtistAttribute.imagePost, artist.post1.imagePost);

			this.artistpost.push(ArtistPostCard);
		});

		const BannerBand = bandsdata.find((band) => band.id === 1);

		if (BannerBand) {
			const MoreAboutCard = this.ownerDocument.createElement('more-about') as MoreAbout;

			MoreAboutCard.setAttribute(MoreAboutAttribute.uid, String(BannerBand.id));
			MoreAboutCard.setAttribute(MoreAboutAttribute.bandName, BannerBand.bandName);
			MoreAboutCard.setAttribute(MoreAboutAttribute.bandImage, BannerBand.bandImage);

			this.artistpost.push(MoreAboutCard);
		}

		const BannerCreatePost = data.find((post) => post.id === 1);

		if (BannerCreatePost) {
			const CreatePostCard = this.ownerDocument.createElement('create-post') as CreatePost;

			CreatePostCard.setAttribute(CreatePostAttribute.uid, String(BannerCreatePost.id));
			CreatePostCard.setAttribute(CreatePostAttribute.image, BannerCreatePost.image);
			CreatePostCard.setAttribute(CreatePostAttribute.type, BannerCreatePost.type);

			this.artistpost.push(CreatePostCard);
		}
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
			<mini-header></mini-header>
			<header> CONNECT FANDOM </header>
            `;
			this.artistpost.forEach((artistpost) => {
				this.shadowRoot?.appendChild(artistpost);
			});

			this.userpost.forEach((userpost) => {
				this.shadowRoot?.appendChild(userpost);
			});

			this.moreabout.forEach((moreabout) => {
				this.shadowRoot?.appendChild(moreabout);
			});

			this.createpost.forEach((createpost) => {
				this.shadowRoot?.appendChild(createpost);
			});
		}
	}
}

customElements.define('app-container', AppContainer);
