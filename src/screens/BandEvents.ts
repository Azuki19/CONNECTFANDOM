import style from './BandEvents.css';
import SlideImage from '../components/Eventss/InfoImage/SlideImage';
import * as components from '../components/indexPadre';

import { addObserver, appState, dispatch } from '../store';
import { getBandsAction } from '../store/action';

class AppBandEvents extends HTMLElement {
	slideImages: SlideImage[] = [];
	currentIndex: number = 0;

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

	nextSlide() {
		this.currentIndex = (this.currentIndex + 1) % this.slideImages.length;
		this.updateSlider();
	}

	prevSlide() {
		this.currentIndex = (this.currentIndex - 1 + this.slideImages.length) % this.slideImages.length;
		this.updateSlider();
	}

	updateSlider() {
		const slideTrack = this.shadowRoot?.querySelector('.slide-track') as HTMLElement;
		slideTrack.style.transform = `translateX(-${this.currentIndex * 100}%)`;
	}

	render() {
		console.log('Rendering AppBandEvents...');
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ``;

			const backgroundSection = document.createElement('section');
			backgroundSection.classList.add('background');

			const mainHeaderContainer = document.createElement('header');
			mainHeaderContainer.id = 'main-header-container';

			const miniHeaderContainer = document.createElement('div');
			miniHeaderContainer.id = 'mini-header-container';

			const sliderContainer = document.createElement('section');
			sliderContainer.classList.add('slider-container');

			const slideTrack = document.createElement('div');
			slideTrack.classList.add('slide-track');

			this.slideImages.forEach((img) => {
				const slide = document.createElement('div');
				slide.classList.add('slide');
				slide.appendChild(img);
				slideTrack.appendChild(slide);
			});

			const prevButton = document.createElement('button');
			prevButton.textContent = '<';
			prevButton.classList.add('nav-button', 'prev');
			prevButton.addEventListener('click', () => this.prevSlide());

			const nextButton = document.createElement('button');
			nextButton.textContent = '>';
			nextButton.classList.add('nav-button', 'next');
			nextButton.addEventListener('click', () => this.nextSlide());

			backgroundSection.appendChild(mainHeaderContainer);
			backgroundSection.appendChild(miniHeaderContainer);
			sliderContainer.appendChild(slideTrack);
			backgroundSection.appendChild(sliderContainer);
			backgroundSection.appendChild(prevButton);
			backgroundSection.appendChild(nextButton);

			this.shadowRoot.appendChild(backgroundSection);

			const cssAbuelo = this.ownerDocument.createElement('style');
			cssAbuelo.innerHTML = style;
			this.shadowRoot.appendChild(cssAbuelo);

			mainHeaderContainer.appendChild(new components.MainHeader());
			miniHeaderContainer.appendChild(new components.MiniHeader());

			this.updateSlider();
		}
	}
}

customElements.define('app-band-events', AppBandEvents);
export default AppBandEvents;
