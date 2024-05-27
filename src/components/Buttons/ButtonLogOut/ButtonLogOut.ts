import styles from './ButtonLogOut.css';

import { dispatch } from '../../../store';
import { navigate } from '../../../store/action';
import { addObserver } from '../../../store';

class ButtonLogOut extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		this.onButtonClicked = this.onButtonClicked.bind(this);
		addObserver(this);

		this.logout() {
			indexedDB.deleteDatabase('firebase-heartbeat-database');
			indexedDB.deleteDatabase('firebaseLocalStorageDb');
			window.location.reload();
		}

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
			`;
		}
		const section = document.createElement('section');
		section.classList.add('Button-Log-Out');

		const logoutBtn = document.createElement('button');
		logoutBtn.classList.add('Log-Out');
		logoutBtn.textContent = 'LOG OUT';
		logoutBtn.addEventListener('click', this.logout);

		section.appendChild(logoutBtn);
		this.shadowRoot?.appendChild(section);

		const cssLogOut = this.ownerDocument.createElement('style');
		cssLogOut.innerHTML = styles;
		this.shadowRoot?.appendChild(cssLogOut);
	}
	addListeners() {
		this.shadowRoot.querySelector('.Button-Log-Out')?.addEventListener('click', this.onButtonClicked);
	}

	onButtonClicked() {
		console.log('holaaa');
		dispatch(navigate('LOGIN'));
	}

	logout() {
		indexedDB.deleteDatabase('firebase-heartbeat-database');
		indexedDB.deleteDatabase('firebaseLocalStorageDb');
		window.location.reload();
	}
}

customElements.define('button-logout', ButtonLogOut);
export default ButtonLogOut;
