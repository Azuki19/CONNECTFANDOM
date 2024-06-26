import * as components from '../components/indexPadre';
import BandasInicio, { BandasInicioAttribute } from '../components/BandasInicio/BandasInicio';
import style from './mainDashboard.css';
import { addObserver, appState, dispatch } from '../store';
import { getBandsAction } from '../store/action';

class AppBandsMainDashboard extends HTMLElement {
	bandainicio: BandasInicio[] = [];

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
			const BannerBand = appState.bands.find((band) => band.name === 'MY CHEMICAL ROMANCE');
			console.log('BannerBand:', BannerBand);

			if (BannerBand) {
				const BandasInicioCard = this.ownerDocument.createElement('banda-inicio') as BandasInicio;
				BandasInicioCard.setAttribute(BandasInicioAttribute.bandName, BannerBand.bandName);
				BandasInicioCard.setAttribute(BandasInicioAttribute.bandImage, BannerBand.bandImage);
				BandasInicioCard.setAttribute(BandasInicioAttribute.bandInfo, BannerBand.bandInfo || '');

				this.bandainicio.push(BandasInicioCard);
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
                  <header id="mainmain-header-container"></header>
              </section>
              <section id="bandas-inicio-section"></section>
          `;

			const mainmainHeaderContainer = this.shadowRoot.getElementById('mainmain-header-container');
			mainmainHeaderContainer.appendChild(new components.MainMainHeader());

			const BandasInicioSection = this.shadowRoot.getElementById('bandas-inicio-section');

			const cssAbuelo = this.ownerDocument.createElement('style');
			cssAbuelo.innerHTML = style;
			this.shadowRoot?.appendChild(cssAbuelo);
		}
	}
}

customElements.define('app-main-dashboard', AppBandsMainDashboard);
export default AppBandsMainDashboard;
