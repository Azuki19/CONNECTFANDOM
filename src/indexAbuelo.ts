import * as components from './components/indexPadre';
import UserPost, { Attribute } from './components/UserPost/UserPost';
import ArtistPost, { ArtistAttribute } from './components/ArtistPost/ArtistPost';
import MoreAbout, { MoreAboutAttribute } from './components/MoreAbout/MoreAbout';
import { data } from './data/data';
import { bandsdata } from './data/bandsData';

class AppContainer extends HTMLElement {
	userpost: UserPost[] = [];
	artistpost: ArtistPost[] = [];
	moreabout: MoreAbout[] = [];

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

		data.forEach((artist) => {
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

		bandsdata.forEach((band) => {
			const MoreAboutCard = this.ownerDocument.createElement('more-about') as MoreAbout;

			MoreAboutCard.setAttribute(MoreAboutAttribute.uid, String(band.id));
			MoreAboutCard.setAttribute(MoreAboutAttribute.bandName, band.bandName);
			MoreAboutCard.setAttribute(MoreAboutAttribute.bandImage, band.bandImage);

			this.artistpost.push(MoreAboutCard);
		});
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
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
		}
	}
}

customElements.define('app-container', AppContainer);
