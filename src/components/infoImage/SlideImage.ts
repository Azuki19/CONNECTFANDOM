import styles from './SlideImage.css';

export enum infoImageAttribute {
	'slideImage' = 'slideimage',
	'infoEvents' = 'infoevents',
	'dateEvents' = 'dateevents',
	'eventName' = 'eventname',
	'infoImage' = 'infoimage',
}

class SlideImage extends HTMLElement {
	slideimage?: string;
	infoevents?: string;
	dateevents?: string;
	eventname?: string;
	infoimage?: string;

	static get observedAttributes() {
		return Object.values(infoImageAttribute);
	}

	attributeChangedCallback(propName: string, oldValue: string | null, newValue: string | null) {
		if (newValue !== null) {
			this[propName] = newValue;
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
			<section class='container'>
        <section class='imageEvent'>
          <img class='EventImg' src="${this.slideimage}" alt="Event Image"/>
        </section>
        <section class='infocomponent'>
          <section class='one'>
            <h6 class='date'>${this.dateevents}</h6>
            <img class='imageEvent' src="${this.infoimage}" alt="Info Image"/>
          </section>
          <section class='two'>
            <h2>${this.eventname}</h2>
            <p>${this.infoevents}</p>
          </section>
        </section>
				</section>
      `;

			const cssImage = this.ownerDocument.createElement('style');
			cssImage.innerHTML = styles;
			this.shadowRoot.appendChild(cssImage);
		}
	}
}

customElements.define('slide-image', SlideImage);
export default SlideImage;
