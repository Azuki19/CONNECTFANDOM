import styles from './MoreAbout.css';

export enum Attribute {
	'uid' = 'uid',
	'bandName' = 'bandname',
	'bandImage' = 'bandimage',
	'bandInfo' = 'bandinfo',
}

class UserPost extends HTMLElement {
	uid?: number;
	bandname?: string;
	bandimage?: string;
	bandinfo?: string;

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
          <section class='bandComponent' id='bandComponent'>
              <img class='bandImg' src="${this.bandimage}"></img>
              <div class='textContainer'>
                <h6 class='moreAbout'>More About...</h6>
                <div class='textContainer'>
                    <h4>${this.bandname}</h4>
              </div>

          </section>
          `;
		}
		const cssMoreAbout = this.ownerDocument.createElement('style');
		cssMoreAbout.innerHTML = styles;
		this.shadowRoot?.appendChild(cssMoreAbout);
	}
}

customElements.define('user-post', UserPost);
export default UserPost;
