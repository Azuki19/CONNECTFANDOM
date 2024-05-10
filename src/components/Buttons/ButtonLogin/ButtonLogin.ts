import styles from './ButtonLogin.css';

import { dispatch } from '../../../store';
import { navigate } from '../../../store/action';
import { addObserver } from '../../../store';

class ButtonLogin extends HTMLElement {
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
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
				<section class="Button-Log-In">
					<button class="Log-In">LOG IN</button>
				</section>
			`;
		}

		const cssLogOut = this.ownerDocument.createElement('style');
		cssLogOut.innerHTML = styles;
		this.shadowRoot?.appendChild(cssLogOut);
	}

	addListeners() {
		this.shadowRoot.querySelector('.Button-Log-In')?.addEventListener('click', this.onButtonClicked);
	}

	onButtonClicked() {
		console.log('holaaa');
		dispatch(navigate('DASHBOARD'));
	}
}

customElements.define('button-login', ButtonLogin);
export default ButtonLogin;
