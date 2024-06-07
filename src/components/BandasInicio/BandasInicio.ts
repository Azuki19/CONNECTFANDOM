import styles from './BandasInicio.css';
import { appState, dispatch } from '../../store';
import { navigate } from '../../store/action';
import { addObserver } from '../../store';

export enum BandasInicioAttribute {
	'uid' = 'uid',
	'bandName' = 'bandname',
	'bandImage' = 'bandimage',
	'bandInfo' = 'bandinfo',
}

class BandasInicio extends HTMLElement {
	uid?: number;
	bandname?: string;
	bandimage?: string;
	bandinfo?: string;

	static get observedAttributes() {
		return Object.values(BandasInicioAttribute);
	}

	attributeChangedCallback(propName: string, oldValue: string | null, newValue: string | null) {
		if (newValue !== null) {
			switch (propName) {
				case BandasInicioAttribute.uid:
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

		this.onButtonClicked = this.onButtonClicked.bind(this);
		addObserver(this);
	}

	connectedCallback() {
		this.mount();
	}

	mount() {
		this.render();
		this.addListeners();
	}

	render() {
		console.log('render BandasInicio called');
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
<<<<<<< HEAD
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Braah+One&family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">

                <section class='bandComponent' id='bandComponent'>
                    <img class='bandImg' src="${this.bandimage}"></img>
                    <div class='textContainer'>
                        <h6 class='BandasInicio'>More About...</h6>
                        <div class='ArrowDiv'>
                            <h4 class='text'>${this.bandname}</h4>
                            <ion-icon id='chevron-forward-outline' name="chevron-forward-outline"></ion-icon>
                        </div>
                    </div>
                </section>
            `;
=======
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
>>>>>>> 875692d18b33866f8ed0d860b7ada794f09bd2f7

			const cssMoreAbout = this.ownerDocument.createElement('style');
			cssMoreAbout.innerHTML = styles;
			this.shadowRoot.appendChild(cssMoreAbout);
		}
	}

	addListeners() {
		this.shadowRoot.querySelector('.bandcomponent')?.addEventListener('click', this.onButtonClicked);
	}

	onButtonClicked() {
		console.log('holaaa');
		dispatch(navigate('DASHBOARD'));
	}
}

customElements.define('banda-inicio', BandasInicio);
export default BandasInicio;
