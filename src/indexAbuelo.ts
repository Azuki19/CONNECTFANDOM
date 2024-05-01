import * as components from './components/indexPadre';
import { bandsdata } from './data/bandsData';
import BandGallery, { BandGalleryAttributtes } from './components/BandGallery/BandGallery';

class AppAboutTheBand extends HTMLElement {
	bandgallerys: BandGallery[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		const PhotosData = bandsdata.filter((band) => band.bandName === 'MY CHEMICAL ROMANCE');

		PhotosData.forEach((band) => {
			const bandGalleryCard = document.createElement('band-gallery') as BandGallery;

			// Set attributes for each photo
			bandGalleryCard.setAttribute('photo1', band.bandGallery.photo1);
			bandGalleryCard.setAttribute('photo2', band.bandGallery.photo2);
			bandGalleryCard.setAttribute('photo3', band.bandGallery.photo3);
			bandGalleryCard.setAttribute('photo4', band.bandGallery.photo4);
			bandGalleryCard.setAttribute('photo5', band.bandGallery.photo5);
			bandGalleryCard.setAttribute('photo6', band.bandGallery.photo6);
			bandGalleryCard.setAttribute('photo7', band.bandGallery.photo7);

			this.bandgallerys.push(bandGalleryCard);
		});
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.bandgallerys.forEach((bandgallery) => {
				this.shadowRoot?.appendChild(bandgallery);
			});
		}
	}
}

customElements.define('app-about-the-band', AppAboutTheBand);
