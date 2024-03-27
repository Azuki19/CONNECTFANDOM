import * as components from './components/indexPadre';
import UserPost, { Attribute } from './components/UserPost/UserPost';
import ArtistPost, { ArtistAttribute } from './components/ArtistPost/ArtistPost';
import { data } from './data/data';

class AppContainer extends HTMLElement {
	userposts: UserPost[] = [];
	artistpost: ArtistPost[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		data.forEach((user) => {
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

			this.userposts.push(UserPostCard);
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

			this.userposts.forEach((userpost) => {
				this.shadowRoot?.appendChild(userpost);
			});
		}
	}
}

customElements.define('app-container', AppContainer);
