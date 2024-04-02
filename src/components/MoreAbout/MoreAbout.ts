import styles from './MoreAbout.css';

export enum MoreAboutAttribute {
	'uid' = 'uid',
	'bandName' = 'bandname',
	'bandImage' = 'bandimage',
	'bandInfo' = 'bandinfo',
}

class MoreAbout extends HTMLElement {
	uid?: number;
	bandname?: string;
	bandimage?: string;
	bandinfo?: string;

	static get observedAttributes() {
		return Object.values(MoreAboutAttribute);
	}

	attributeChangedCallback(propName: string, oldValue: string | null, newValue: string | null) {
		if (newValue !== null) {
			switch (propName) {
				case MoreAboutAttribute.uid:
					this[propName] = parseInt(newValue);
					break;
				default:
					this[propName] = newValue;
					break;
			}
		}
		this.render();
	}

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
			<link rel="preconnect" href="https://fonts.googleapis.com">
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
			<link href="https://fonts.googleapis.com/css2?family=Braah+One&family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">


          <section class='bandComponent' id='bandComponent'>
              <img class='bandImg' src="${this.bandimage}"></img>
              		<div class='textContainer'>
                		<h6 class='moreAbout'>More About...</h6>
										<div class='ArrowDiv'>
                    	<h4 class='text'>${this.bandname}</h4>
											<ion-icon id='chevron-forward-outline' name="chevron-forward-outline"></ion-icon>
											</div>
							</div>

          </section>
          `;
		}
		const cssMoreAbout = this.ownerDocument.createElement('style');
		cssMoreAbout.innerHTML = styles;
		this.shadowRoot?.appendChild(cssMoreAbout);
	}
}

customElements.define('more-about', MoreAbout);
export default MoreAbout;
