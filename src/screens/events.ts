import * as components from '../components/indexPadre';
import { bandsdata } from '../data/bandsData';
import style from './events.css';

class AppAboutTheBand extends HTMLElement {
	eventdate: EventDate[] = [];
	eventimage: EventImage[] = [];
	eventsname: EventName[] = [];
	eventsslider: EventSlider[] = [];
	infoevents: InfoEvents[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

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
