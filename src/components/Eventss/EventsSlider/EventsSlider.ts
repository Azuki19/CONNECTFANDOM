import styles from './EventsSlider.css';

export enum EventsSliderAttribute {
	'EventSlider' = 'EventSlider',
}

class EventsSlider extends HTMLElement {
	EventSlider?: string;

	static get observedAttributes() {
		return Object.values(EventsSliderAttribute);
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
        <section class='Slider'>
          <div class='Edit-Slider'>
            <img class='imgSlider' src="${this.EventSlider}" alt="">
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

customElements.define('events-slider', EventsSlider);
export default EventsSlider;
