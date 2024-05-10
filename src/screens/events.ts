import { bandsdata } from '../data/bandsData';
import DateEvents from '../components/Eventss/EventDate/EventDate';
import style from './events.css';

class AppEvents extends HTMLElement {
	dateventss: DateEvents[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		const eventDateData = bandsdata.filter((band) => band.bandName === 'MY CHEMICAL ROMANCE');

		eventDateData.forEach((band) => {
			const eventDateCard = document.createElement('date-events') as DateEvents;

			eventDateCard.setAttribute('dateEvents', band.events.event1.dateEvents || '');

			this.dateventss.push(eventDateCard);
		});
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			const section = document.createElement('section');
			section.classList.add('EventDate');

			const eventDateContainer = document.createElement('div');
			eventDateContainer.classList.add('EventDateContainer');

			section.appendChild(eventDateContainer);

			this.dateventss.forEach((events) => {
				eventDateContainer.appendChild(events);
			});

			const cssAbuelo = this.ownerDocument.createElement('style');
			cssAbuelo.innerHTML = style;
			this.shadowRoot.appendChild(cssAbuelo);
		}
	}
}

customElements.define('app-events', AppEvents);
export default AppEvents;
