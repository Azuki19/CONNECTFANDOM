import style from './BandEvents.css';
import { getPosts, getBands } from '../utils/firebase';
import SlideImage from '../components/Eventss/InfoImage/SlideImage';
import '../components/indexPadre';

class AppBandEvents extends HTMLElement {
	slideimage: SlideImage[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.initializeData();
	}

	async initializeData() {
		try {
			const [bands] = await Promise.all([getPosts(), getBands()]);

			const eventDateData = bands.filter((bandaa) => bandaa.bandName === 'MY CHEMICAL ROMANCE');

			eventDateData.forEach((bandaa) => {
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
			const section = document.createElement('section');
			section.classList.add('info-oooImage');

			const InfoImageContainer = document.createElement('div');
			InfoImageContainer.classList.add('infoImageContainer');

			this.slideimage.forEach((img) => {
				InfoImageContainer.appendChild(img);
			});
			section.appendChild(InfoImageContainer);
			this.shadowRoot?.appendChild(section);

			const cssAbuelo = this.ownerDocument.createElement('style');
			cssAbuelo.innerHTML = style;
			console.log('Adding CSS...');
			this.shadowRoot?.appendChild(cssAbuelo);
		}
	}
}

customElements.define('app-band-events', AppBandEvents);
export default AppBandEvents;
