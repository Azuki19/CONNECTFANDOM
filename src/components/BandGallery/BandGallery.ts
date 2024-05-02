import styles from './BandGallery.css';

export enum BandGalleryAttributtes {
	'photo1' = 'photo1',
	'photo2' = 'photo2',
	'photo3' = 'photo3',
	'photo4' = 'photo4',
	'photo5' = 'photo5',
	'photo6' = 'photo6',
	'photo7' = 'photo7',
}

class BandGallery extends HTMLElement {
	private currentIndex: number = 0;
	private photos: string[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		return Object.values(BandGalleryAttributtes);
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(propName: string, oldValue: string | null, newValue: string | null) {
		if (oldValue !== newValue) {
			this[propName] = newValue;
			this.photos = Object.values(this.attributes)
				.map((attr) => attr?.value)
				.filter((value) => value && value.startsWith('http')); // Filtramos solo las URLs válidas
			this.render();
		}
	}

	//FLECHAS

	private next() {
		this.currentIndex = (this.currentIndex + 1) % this.photos.length;
		this.render();
	}

	private prev() {
		this.currentIndex = (this.currentIndex - 1 + this.photos.length) % this.photos.length;
		this.render();
	}

	//RENDER

	private render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
                <div class="container">
                    <img class="image" src="${this.photos[this.currentIndex]}" alt="Photo ${this.currentIndex + 1}">
                    <div class="prev">&#10094;</div>
                    <div class="next">&#10095;</div>
                </div>
            `;

			const prevElement = this.shadowRoot.querySelector('.prev');
			if (prevElement) {
				prevElement.addEventListener('click', () => this.prev());
			}

			const nextElement = this.shadowRoot.querySelector('.next');
			if (nextElement) {
				nextElement.addEventListener('click', () => this.next());
			}
		}

		const cssBandGallery = this.ownerDocument.createElement('style');
		cssBandGallery.innerHTML = styles;
		this.shadowRoot?.appendChild(cssBandGallery);
	}
}

customElements.define('band-gallery', BandGallery);
export default BandGallery;
