import styles from './InfoEvent.css';

export enum InfoEventAttribute {
	'infoEvents' = 'infoEvents',
}

class InfoEvent extends HTMLElement {
	infoEvents?: string;

	static get observedAttributes() {
		return Object.values(InfoEventAttribute);
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
        <section class='InfoEvent'>
          <div class='Edit-InfoEvent'>
            <img class='EventInfo' src="${this.infoEvents}" alt="">
            </div>
          </div>

					</section>
				`;
		}
		const cssInfoEvent = this.ownerDocument.createElement('style');
		cssInfoEvent.innerHTML = styles;
		this.shadowRoot?.appendChild(cssInfoEvent);
	}
}

customElements.define('info-event', InfoEvent);
export default InfoEvent;
