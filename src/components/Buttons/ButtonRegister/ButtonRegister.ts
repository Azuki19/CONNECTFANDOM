import styles from './ButtonRegister.css';

import { dispatch } from '../../../store';
import { navigate } from '../../../store/action';
import { addObserver } from '../../../store';

class ButtonRegister extends HTMLElement {
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
				<section class="Button-Register">
					<button class="Register">SIGN IN</button>
				</section>
			`;
		}

		const cssLogOut = this.ownerDocument.createElement('style');
		cssLogOut.innerHTML = styles;
		this.shadowRoot?.appendChild(cssLogOut);
	}

	addListeners() {
		this.shadowRoot.querySelector('.Button-Register')?.addEventListener('click', this.onButtonClicked);
	}

	onButtonClicked() {
		console.log('holaaa');
		dispatch(navigate('EDITPROFILE'));
	}
}

customElements.define('button-register', ButtonRegister);
export default ButtonRegister;
