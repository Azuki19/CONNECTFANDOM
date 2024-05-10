import styles from './ButtonSettings.css';
import { dispatch } from '../../../store';
import { navigate } from '../../../store/action';
import { addObserver } from '../../../store';

class ButtonSettings extends HTMLElement {
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
			<section class='Button-Settings'>
        <button class='Settings'>SETTINGS</button>
			</section>

		`;
		}

		const cssSettinngs = this.ownerDocument.createElement('style');
		cssSettinngs.innerHTML = styles;
		this.shadowRoot?.appendChild(cssSettinngs);
	}
	addListeners() {
		this.shadowRoot.querySelector('.Settings')?.addEventListener('click', this.onButtonClicked);
	}

	onButtonClicked() {
		console.log('holaaa');
		dispatch(navigate('EDITPROFILE'));
	}
}

customElements.define('button-settings', ButtonSettings);
export default ButtonSettings;
