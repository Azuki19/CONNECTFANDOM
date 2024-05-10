import styles from './EventName.css';

export enum EventNameAttribute {
	'EventName' = 'EventName',
}

class EventsName extends HTMLElement {
	EventName?: string;

	static get observedAttributes() {
		return Object.values(EventNameAttribute);
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
        <section class='EventName'>
          <div class='Edit-Name'>
					<h1 class='name'>${this.EventName}</h1>
            </div>
          </div>

					</section>
				`;
		}
		const cssEventName = this.ownerDocument.createElement('style');
		cssEventName.innerHTML = styles;
		this.shadowRoot?.appendChild(cssEventName);
	}
}

customElements.define('events-name', EventsName);
export default EventsName;
