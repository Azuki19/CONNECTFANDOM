import * as components from './components/indexPadre';
import UserPost, { Attribute } from './components/UserPost/UserPost';
import { data } from './data/data';

class AppContainer extends HTMLElement {
	userposts: UserPost[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		data.forEach((user) => {
			const UserPostCard = this.ownerDocument.createElement('user-post') as UserPost;

			UserPostCard.setAttribute(Attribute.uid, String(user.id));
			UserPostCard.setAttribute(Attribute.name, user.name);
			UserPostCard.setAttribute(Attribute.image, user.image);
			UserPostCard.setAttribute(Attribute.username, user.username);
			UserPostCard.setAttribute(Attribute.email, user.email);
			UserPostCard.setAttribute(Attribute.password, user.password);
			UserPostCard.setAttribute(Attribute.info, user.info);
			UserPostCard.setAttribute(Attribute.followers, String(user.followers));
			UserPostCard.setAttribute(Attribute.TitlePost, user.post1.titlePost);
			UserPostCard.setAttribute(Attribute.InfoPost, user.post1.infoPost);
			UserPostCard.setAttribute(Attribute.TitlePost, user.post1.titlePost);

			this.userposts.push(UserPostCard);
		});
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
            `;

			this.userposts.forEach((userpost) => {
				this.shadowRoot?.appendChild(userpost);
			});
		}
	}
}

customElements.define('app-container', AppContainer);
