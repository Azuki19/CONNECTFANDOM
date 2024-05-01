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
	photo1?: string;
	photo2?: string;
	photo3?: string;
	photo4?: string;
	photo5?: string;
	photo6?: string;
	photo7?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}
	static get observedAttributes() {
		const attrs: Record<BandGalleryAttributtes, null> = {
			photo1: null,
			photo2: null,
			photo3: null,
			photo4: null,
			photo5: null,
			photo6: null,
			photo7: null,
		};
		return Object.keys(attrs);
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(propName: string, oldValue: string | null, newValue: string | undefined) {
		switch (propName) {
			/*case Attribute.uid:
				this.uid = newValue ? Number(newValue) : undefined;
				break;*/

			default:
				this[propName] = newValue;
				break;
		}
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `

    <div class="container">
      <img src="${this.photo1}">
      <img src="${this.photo2}">
      <img src="${this.photo3}">
      <img src="${this.photo4}">
      <img src="${this.photo5}">
      <img src="${this.photo6}">
      <img src="${this.photo7}">

    </div>

      `;
		}

		const cssBandGallery = this.ownerDocument.createElement('style');
		cssBandGallery.innerHTML = styles;
		this.shadowRoot?.appendChild(cssBandGallery);
	}
}

customElements.define('band-gallery', BandGallery);
export default BandGallery;
