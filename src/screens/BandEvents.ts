import style from './BandEvents.css';
import SlideImage from '../components/Eventss/InfoImage/SlideImage';
import '../components/indexPadre';

import { addObserver, appState, dispatch } from '../store';
import { getPostsAction } from '../store/action';
import { getBandsAction } from '../store/action';

class AppBandEvents extends HTMLElement {
	slideimage: SlideImage[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.initializeData();
		addObserver(this);
	}

	async connectedCallback() {
		if (appState.posts.length === 0) {
			const action = await getPostsAction();
			dispatch(action);
			const action2 = await getBandsAction();
			dispatch(action2);
		}
	}

	async initializeData() {
		try {
			const eventData = appState.bands.filter((bandaa) => bandaa.bandName === 'MY CHEMICAL ROMANCE');
			console.log(eventData[0].events);

			eventData.forEach((bandaa) => {
				console.log('Slide Image:', bandaa.events.event1.slideImage);
				const infoImageCard = document.createElement('slide-image') as SlideImage;
				infoImageCard.setAttribute('slideimage', bandaa.events.event1.slideImage);
				this.slideimage.push(infoImageCard);
			});

			this.render();
		} catch (error) {
			console.error('Error fetching data from Firebase:', error);
		}
	}

	render() {
		console.log('Rendering AppBandEvents...');
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ``;

			const InfoImageContainer = document.createElement('section');
			InfoImageContainer.classList.add('infoImageContainer');

			this.slideimage.forEach((img) => {
				InfoImageContainer.appendChild(img);
			});

			const cssAbuelo = this.ownerDocument.createElement('style');
			cssAbuelo.innerHTML = style;
			console.log('Adding CSS...');
			this.shadowRoot?.appendChild(cssAbuelo);
		}
	}
}

customElements.define('app-band-events', AppBandEvents);
export default AppBandEvents;
