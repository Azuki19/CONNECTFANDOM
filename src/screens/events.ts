<<<<<<< HEAD
import * as components from '../components/indexPadre';
import { bandsdata } from '../data/bandsData';
import style from './events.css';

class AppAboutTheBand extends HTMLElement {
	eventdate: EventDate[] = [];
	eventimage: EventImage[] = [];
	eventsname: EventName[] = [];
	eventsslider: EventSlider[] = [];
	infoevents: InfoEvents[] = [];
=======
import { bandsdata } from '../data/bandsData';
import DateEvents from '../components/Eventss/EventDate/EventDate';
import style from './events.css';

class AppEvents extends HTMLElement {
	dateventss: DateEvents[] = [];
>>>>>>> 234082921cc229d7717c4848e2d664760f4dfaf4

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

<<<<<<< HEAD
		const EventsData = bandsdata.filter((date) => date.type === 'Date');
		EventsData.forEach((date) => {
			const EventDateCard = this.ownerDocument.createElement('event-date') as EventDate;
			EventDateCard.setAttribute('EventDate', date.EventDate);

			this.eventdate.push(EventDateCard);
		});

		const ImageData = bandsdata.filter((image) => image.type === 'Image');
		ImageData.forEach((image) => {
			const EventImageCard = this.ownerDocument.createElement('event-image') as EventImage;
			EventImageCard.setAttribute('EventImage', image.EventImage);

			this.eventimage.push(EventImageCard);
		});

		const NameData = bandsdata.filter((name) => name.type === 'Name');
		NameData.forEach((name) => {
			const EventNameCard = this.ownerDocument.createElement('event-name') as EventName;
			EventNameCard.setAttribute('EventName', name.EventName);

			this.eventsname.push(EventNameCard);
		});

		const SliderData = bandsdata.filter((slider) => slider.type === 'Slider');
		SliderData.forEach((slider) => {
			const EventSliderCard = this.ownerDocument.createElement('event-slider') as EventSlider;
			EventSliderCard.setAttribute('EventSlider', slider.EventSlider);

			this.eventsslider.push(EventSliderCard);
		});
	}
}
=======
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
>>>>>>> 234082921cc229d7717c4848e2d664760f4dfaf4
