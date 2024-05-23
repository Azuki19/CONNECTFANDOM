import style from './BandEvents.css';
import SlideImage from '../components/Eventss/InfoImage/SlideImage';
import '../components/indexPadre';

import { addObserver, appState, dispatch } from '../store';
import { getBandsAction } from '../store/action';

class AppBandEvents extends HTMLElement {
	slideImages: SlideImage[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.initializeData();
		addObserver(this);
	}

	async connectedCallback() {
		if (appState.bands.length === 0) {
			const action = await getBandsAction();
			dispatch(action);
		}
	}

	async initializeData() {
		try {
			const bandData = appState.bands.find((band) => band.bandName === 'MY CHEMICAL ROMANCE');
			if (bandData && bandData.events) {
				const { event1, event2, event3 } = bandData.events;

				const eventList = [event1, event2, event3];

				eventList.forEach((event) => {
					if (event && event.slideImage) {
						const slideImageElement = document.createElement('slide-image') as SlideImage;
						slideImageElement.setAttribute('slideimage', event.slideImage);
						this.slideImages.push(slideImageElement);
					}
				});
			}

			this.render();
		} catch (error) {
			console.error('Error fetching data from Firebase:', error);
		}
	}

	render() {
		console.log('Rendering AppBandEvents...');
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ``;

			const infoImageContainer = document.createElement('section');
			infoImageContainer.classList.add('infoImageContainer');

			this.slideImages.forEach((img) => {
				infoImageContainer.appendChild(img);
			});

			const cssAbuelo = this.ownerDocument.createElement('style');
			cssAbuelo.innerHTML = style;
			this.shadowRoot.appendChild(cssAbuelo);
			this.shadowRoot.appendChild(infoImageContainer);
		}
	}
}

customElements.define('app-band-events', AppBandEvents);
export default AppBandEvents;
