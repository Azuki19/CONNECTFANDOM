import styles from './ButtonInfo.css';
import { updateUserData } from '../../../../utils/firebase';

import { appState, dispatch } from '../../../../store';
import { navigate } from '../../../../store/action';
import { addObserver } from '../../../../store';

class ButtonInfo extends HTMLElement {
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
				<section class="Button-Info">
					<button class="Info">CHANGE</button>
				</section>
			`;
		}

		const cssLogOut = this.ownerDocument.createElement('style');
		cssLogOut.innerHTML = styles;
		this.shadowRoot?.appendChild(cssLogOut);
	}
	addListeners() {
		this.shadowRoot.querySelector('.Button-Info')?.addEventListener('click', this.onButtonClicked);
	}

	onButtonClicked() {
		updateUserData(appState.user.authCredentials, { info: appState.editprofile.InfoInput });
	}
}

customElements.define('button-info', ButtonInfo);
export default ButtonInfo;
