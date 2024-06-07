import styles from './MainHeader.css';
import { dispatch } from '../../store';
import { navigate } from '../../store/action';
import { addObserver } from '../../store';

class MainHeader extends HTMLElement {
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
						<ion-icon class='person-circle-outline' name="person-circle-outline" id="profile"></ion-icon>
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
		this.shadowRoot.querySelector('#profile').addEventListener('click', this.onButtonClicked);
	}

	onButtonClicked(event) {
		// Determinar el destino en función del elemento clickeado
		const target = event.target.id;
		switch (target) {
			case 'connect-fandom':
				dispatch(navigate('DASHBOARD')); // Cambiar a la página de inicio, por ejemplo
				break;
			case 'settings':
				dispatch(navigate('EDITPROFILE')); // Cambiar a la página de configuraciones
				break;
			case 'profile':
				dispatch(navigate('PROFILE')); // Cambiar a la página de perfil del usuario
				break;
			default:
				break;
		}
	}
}

customElements.define('main-header', MainHeader);
export default MainHeader;
