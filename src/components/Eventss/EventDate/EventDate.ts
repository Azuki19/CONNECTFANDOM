import styles from './EventDate.css';

export enum EventDateAttribute {
	'dateEvents' = 'dateevents',
}

class DateEvents extends HTMLElement {
	dateevents?: string;

	static get observedAttributes() {
		return Object.values(EventDateAttribute);
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
        <section class='EventDate'>
          <div class='Edit-EventDate'>
            <h1 class='Date'>${this.dateevents} </h1>
            </div>
          </div>
					</section>
				`;
		}
		const cssEventDate = this.ownerDocument.createElement('style');
		cssEventDate.innerHTML = styles;
		this.shadowRoot?.appendChild(cssEventDate);
	}
}

customElements.define('date-event', DateEvents);
export default DateEvents;
