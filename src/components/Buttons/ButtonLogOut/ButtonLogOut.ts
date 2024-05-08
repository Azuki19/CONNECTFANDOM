// import styles from './ButtonLogOut.css';
// import { dispatch } from '../../../store/index';
// import { navigate } from '../../../store/action';
// import { Screens } from '../../../types/trips';

// class ButtonLogOut extends HTMLElement {
// 	constructor() {
// 		super();
// 		this.attachShadow({ mode: 'open' });
// 	}

// 	connectedCallback() {
// 		this.render();
// 	}

// 	LogButton() {
// 		dispatch(navigate(Screens.DASHBOARD));
// 	}

// 	render() {
// 		if (this.shadowRoot) {
// 			this.shadowRoot.innerHTML = `
// 				<section class="Button-Log-Out">
// 					<button class="Log-Out">LOG OUT</button>
// 				</section>
// 			`;
// 		}

// 		//query del botón hacer la acción
// 		if (this.shadowRoot) {
// 			const button = this.shadowRoot.querySelector('.Log-Out');
// 			if (button) {
// 				button.addEventListener('click', this.LogButton.bind(this));
// 				console.log('hola');
// 			}
// 		}

// 		const cssLogOut = this.ownerDocument.createElement('style');
// 		cssLogOut.innerHTML = styles;
// 		this.shadowRoot?.appendChild(cssLogOut);
// 	}
// }

// customElements.define('button-logout', ButtonLogOut);
// export default ButtonLogOut;

import styles from './ButtonLogOut.css';
import { dispatch } from '../../../store/index';
import { navigate } from '../../../store/action';
import { Screens } from '../../../types/trips';

class ButtonLogOut extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	LogButton() {
		dispatch(navigate(Screens.DASHBOARD));
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
				<section class="Button-Log-Out">
					<button class="Log-Out">LOG OUT</button>
				</section>
			`;
		}

		//query del botón hacer la acción
		if (this.shadowRoot) {
			const button = this.shadowRoot.querySelector('.Log-Out');
			if (button) {
				button.addEventListener('click', this.LogButton.bind(this));
				console.log('hola');
			}
		}

		const cssLogOut = this.ownerDocument.createElement('style');
		cssLogOut.innerHTML = styles;
		this.shadowRoot?.appendChild(cssLogOut);
	}
}

customElements.define('button-logout', ButtonLogOut);
export default ButtonLogOut;
