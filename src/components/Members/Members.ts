import styles from './Members.css';

export enum MembersAttributtes {
	'type' = 'type',
	'name' = 'name',
	'image' = 'image',
	'username' = 'username',
}

class Members extends HTMLElement {
	type?: string;
	name?: string;
	image?: string;
	username?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}
	static get observedAttributes() {
		const attrs: Record<MembersAttributtes, null> = {
			type: null,
			name: null,
			image: null,
			username: null,
		};
		return Object.keys(attrs);
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(propName: string, oldValue: string | null, newValue: string | null) {
		switch (propName) {
			case MembersAttributtes.image:
				this.image = newValue;
				break;
			case MembersAttributtes.name:
				this.name = newValue;
				break;
			case MembersAttributtes.username:
				this.username = newValue;
				break;
			default:
				break;
		}
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `

    <section class="container">
      <img class='Image' src="${this.image}">
			<h1 class='name'>${this.name}</h1>
			<p class='username'>@${this.username}</p>
    </section>

      `;
		}

		const cssMembers = this.ownerDocument.createElement('style');
		cssMembers.innerHTML = styles;
		this.shadowRoot?.appendChild(cssMembers);
	}
}

customElements.define('members-app', Members);
export default Members;
