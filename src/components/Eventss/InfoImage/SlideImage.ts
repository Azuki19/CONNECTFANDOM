import styles from './SlideImage.css';

export enum infoImageAttribute {
	'slideImage' = 'slideimage',
}

class SlideImage extends HTMLElement {
	slideimage?: string;

	static get observedAttributes() {
		return Object.values(infoImageAttribute);
	}

	attributeChangedCallback(propName: string, oldValue: string | null, newValue: string | null) {
		if (newValue !== null) {
			switch (propName) {
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
        <section class='imageEvent'>
            <img class='EventImg' src="${this.slideimage}" alt=""/>
					</section>
				`;
		}
		const cssImage = this.ownerDocument.createElement('style');
		cssImage.innerHTML = styles;
		this.shadowRoot?.appendChild(cssImage);
	}
}

customElements.define('slide-image', SlideImage);
export default SlideImage;
