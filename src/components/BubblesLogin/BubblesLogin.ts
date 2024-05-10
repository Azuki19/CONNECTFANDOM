import styles from './BubblesLogin.css';
import { dispatch } from '../../store';
import { navigate } from '../../store/action';
import { addObserver } from '../../store';

class BubblesLogin extends HTMLElement {
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

      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Braah+One&family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">

      <section class='sectiobubbles'>
					<div class='minibubble'>
          <ion-icon name="logo-facebook" id="logo-facebook"></ion-icon>
					</div>
					<div class='minibubble'>
          <ion-icon name="logo-google" id="logo-google"></ion-icon>
  				</div>
          <div class='minibubble'>
          <ion-icon name="logo-apple" id="logo-apple"></ion-icon>
          </div>
          <div class='minibubble'>
          <ion-icon name="logo-twitter" id="logo-twitter"></ion-icon>
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
		this.shadowRoot.querySelector('#logo-google').addEventListener('click', this.onButtonClicked);
		this.shadowRoot.querySelector('#logo-apple').addEventListener('click', this.onButtonClicked);
		this.shadowRoot.querySelector('#logo-facebook').addEventListener('click', this.onButtonClicked);
		this.shadowRoot.querySelector('#logo-twitter').addEventListener('click', this.onButtonClicked);
	}

	onButtonClicked(event) {
		// Determinar el destino en función del elemento clickeado
		const target = event.target.id;
		switch (target) {
			case 'logo-google':
				dispatch(navigate('DASHBOARD')); // Cambiar a la página de inicio, por ejemplo
				break;
			case 'logo-apple':
				dispatch(navigate('DASHBOARD')); // Cambiar a la página de inicio, por ejemplo
				break;
			case 'logo-facebook':
				dispatch(navigate('DASHBOARD')); // Cambiar a la página de inicio, por ejemplo
				break;
			case 'logo-twitter':
				dispatch(navigate('DASHBOARD')); // Cambiar a la página de inicio, por ejemplo
				break;
			default:
				break;
		}
	}
}

customElements.define('bubbles-login', BubblesLogin);
export default BubblesLogin;
