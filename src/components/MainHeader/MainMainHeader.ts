import styles from './MainMainHeader.css';
import { dispatch } from '../../store';
import { navigate } from '../../store/action';
import { addObserver } from '../../store';
import { ScreenActions } from '../../types/store';
import { Screens } from '../../types/navigation';

class MainMainHeader extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.onButtonClicked = this.onButtonClicked.bind(this);
		addObserver(this);
	}

	connectedCallback() {
		this.render();
		this.addListeners();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
				<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
				<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
				<section class='sectionmainheader'>
					<div class='div1'>
						<h1 id="connect-fandom">CONNECT FANDOM!</h1>
					</div>
					<div class='div2'>
						<ion-icon class='settings-outline' name="settings-outline" id="settings"></ion-icon>
					</div>
				</section>
			`;
		}
		const cssMainHeader = this.ownerDocument.createElement('style');
		cssMainHeader.innerHTML = styles;
		this.shadowRoot?.appendChild(cssMainHeader);
	}

	addListeners() {
		// Escuchar eventos de clic en el h1 y los iconos
		this.shadowRoot.querySelector('#connect-fandom').addEventListener('click', this.onButtonClicked);
		this.shadowRoot.querySelector('#settings').addEventListener('click', this.onButtonClicked);
	}

	onButtonClicked(event) {
		// Determinar el destino en función del elemento clickeado
		const target = event.target.id;
		switch (target) {
			case 'connect-fandom':
				dispatch(navigate('BANDASINICIO')); // Cambiar a la página de inicio, por ejemplo
				break;
			case 'settings':
				dispatch(navigate(Screens.MAINSETTINGS)); // Cambiar a la página de configuraciones
				break;
			default:
				break;
		}
	}
}

customElements.define('main-main-header', MainMainHeader);
export default MainMainHeader;
