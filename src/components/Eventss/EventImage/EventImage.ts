import styles from './EventImage.css';

export enum EventImageAttribute {
	'EventImage1' = 'EventImage1',
}

class EventImage extends HTMLElement {
	EventImage1?: string;

	static get observedAttributes() {
		return Object.values(EventImageAttribute);
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
          <div class='Edit-image'>
            <img class='EventImg' src="${this.EventImage1}" alt="">
            </div>
          </div>

					</section>
				`;
		}
		const cssSlider = this.ownerDocument.createElement('style');
		cssSlider.innerHTML = styles;
		this.shadowRoot?.appendChild(cssSlider);
	}
}

customElements.define('event-image', EventImage);
export default EventImage;
