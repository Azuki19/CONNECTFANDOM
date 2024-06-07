import * as components from '../components/indexPadre';
import BandasInicio, { BandasInicioAttribute } from '../components/BandasInicio/BandasInicio';
import style from './mainDashboard.css';
import { addObserver, appState, dispatch } from '../store';
import { getBandsAction } from '../store/action';

class AppBandsMainDashboard extends HTMLElement {
	BandaInicio: BandasInicio[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.initializeData();
		addObserver(this);
	}

	async connectedCallback() {
		if (appState.posts.length === 0) {
			const action2 = await getBandsAction();
			dispatch(action2);
		}
	}

	async initializeData() {
		try {
			const BannerBand = appState.bands.find((band) => band.name === 'MY CHEMICAL ROMANCE');
			console.log('BannerBand:', BannerBand); // Verifica que encuentra la banda

			if (BannerBand) {
				const BandasInicioCard = this.ownerDocument.createElement('banda-info') as BandasInicio;

				BandasInicioCard.setAttribute(BandasInicioAttribute.uid, String(BannerBand.id));
				BandasInicioCard.setAttribute(BandasInicioAttribute.bandName, BannerBand.bandName);
				BandasInicioCard.setAttribute(BandasInicioAttribute.bandImage, BannerBand.bandImage);

				console.log('BandasInicioCard:', BandasInicioCard); // Verifica que las propiedades se están estableciendo

				this.BandaInicio.push(BandasInicioCard);
			}
			this.render();
		} catch (error) {
			console.error('Error fetching data from Firebase:', error);
		}
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Braah+One&family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">

        <section id='background'>
            <header id="main-header-container"></header>
            <div id="mini-header-container"></div>
        </section>
        <section id="bandas-inicio-section">
        </section>
        `;

			const mainHeaderContainer = this.shadowRoot.getElementById('main-header-container');
			mainHeaderContainer.appendChild(new components.MainHeader());

			const miniHeaderContainer = this.shadowRoot.getElementById('mini-header-container');
			miniHeaderContainer.appendChild(new components.MiniHeader());

			const BandasInicioSection = this.shadowRoot.getElementById('bandas-inicio-section');
			console.log('BandaInicio:', this.BandaInicio); // Verifica que BandaInicio contiene elementos

			this.BandaInicio.forEach((BandaInicio) => {
				BandasInicioSection.appendChild(BandaInicio);
			});

			const cssAbuelo = this.ownerDocument.createElement('style');
			cssAbuelo.innerHTML = style;
			this.shadowRoot?.appendChild(cssAbuelo);
		}
	}
}

customElements.define('app-bands-main-dashboard', AppBandsMainDashboard);
export default AppBandsMainDashboard;
