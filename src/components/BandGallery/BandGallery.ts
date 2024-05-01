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
      <h3 class="text-center section-subheading">- popular Delivery -</h3>
      <h1 class="text-center section-heading">Tranding food</h1>
    </div>
    <div class="container">
      <div class="swiper tranding-slider">
        <div class="swiper-wrapper">
          <!-- Slide-start -->
          <div class="swiper-slide tranding-slide">
            <div class="tranding-slide-img">
              <img src="${this.photo1}">
            </div>
            <div class="tranding-slide-content">
              <h1 class="food-price">$20</h1>
              <div class="tranding-slide-content-bottom">
                <h2 class="food-name">
                  Special Pizza
                </h2>
                <h3 class="food-rating">
                  <span>4.5</span>
                  <div class="rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </h3>
              </div>
            </div>
          </div>
          <!-- Slide-end -->
          <!-- Slide-start -->
          <div class="swiper-slide tranding-slide">
            <div class="tranding-slide-img">
              <img src="${this.photo2}">
            </div>
            <div class="tranding-slide-content">
              <h1 class="food-price">$20</h1>
              <div class="tranding-slide-content-bottom">
                <h2 class="food-name">
                  Meat Ball
                </h2>
                <h3 class="food-rating">
                  <span>4.5</span>
                  <div class="rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </h3>
              </div>
            </div>
          </div>
          <!-- Slide-end -->
          <!-- Slide-start -->
          <div class="swiper-slide tranding-slide">
            <div class="tranding-slide-img">
              <img src="${this.photo3}">
            </div>
            <div class="tranding-slide-content">
              <h1 class="food-price">$40</h1>
              <div class="tranding-slide-content-bottom">
                <h2 class="food-name">
                  Burger
                </h2>
                <h3 class="food-rating">
                  <span>4.5</span>
                  <div class="rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </h3>
              </div>
            </div>
          </div>
          <!-- Slide-end -->
          <!-- Slide-start -->
          <div class="swiper-slide tranding-slide">
            <div class="tranding-slide-img">
              <img src="${this.photo4}">
            </div>
            <div class="tranding-slide-content">
              <h1 class="food-price">$15</h1>
              <div class="tranding-slide-content-bottom">
                <h2 class="food-name">
                  Frish Curry
                </h2>
                <h3 class="food-rating">
                  <span>4.5</span>
                  <div class="rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </h3>
              </div>
            </div>
          </div>
          <!-- Slide-end -->
          <!-- Slide-start -->
          <div class="swiper-slide tranding-slide">
            <div class="tranding-slide-img">
              <img src="${this.photo5}">
            </div>
            <div class="tranding-slide-content">
              <h1 class="food-price">$15</h1>
              <div class="tranding-slide-content-bottom">
                <h2 class="food-name">
                  Pane Cake
                </h2>
                <h3 class="food-rating">
                  <span>4.5</span>
                  <div class="rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </h3>
              </div>
            </div>
          </div>
          <!-- Slide-end -->
          <!-- Slide-start -->
          <div class="swiper-slide tranding-slide">
            <div class="tranding-slide-img">
              <img src="${this.photo6}">
            </div>
            <div class="tranding-slide-content">
              <h1 class="food-price">$20</h1>
              <div class="tranding-slide-content-bottom">
                <h2 class="food-name">
                  Vanilla cake
                </h2>
                <h3 class="food-rating">
                  <span>4.5</span>
                  <div class="rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </h3>
              </div>
            </div>
          </div>
          <!-- Slide-end -->
          <!-- Slide-start -->
          <div class="swiper-slide tranding-slide">
            <div class="tranding-slide-img">
              <img src="${this.photo7}">
            </div>
            <div class="tranding-slide-content">
              <h1 class="food-price">$8</h1>
              <div class="tranding-slide-content-bottom">
                <h2 class="food-name">
                  Straw Cake
                </h2>
                <h3 class="food-rating">
                  <span>4.5</span>
                  <div class="rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </h3>
              </div>
            </div>
          </div>
          <!-- Slide-end -->
        </div>

        <div class="tranding-slider-control">
          <div class="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div class="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div class="swiper-pagination"></div>
        </div>

      </div>
    </div>
  </section>


      `;
		}

		const cssBandGallery = this.ownerDocument.createElement('style');
		cssBandGallery.innerHTML = styles;
		this.shadowRoot?.appendChild(cssBandGallery);
	}
}

customElements.define('band-gallery', BandGallery);
export default BandGallery;
