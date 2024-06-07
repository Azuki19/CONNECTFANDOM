import styles from './ButtonName.css';

import { dispatch } from '../../../../store';
import { navigate } from '../../../../store/action';
import { addObserver, appState } from '../../../../store';
import { updateUserData } from '../../../../utils/firebase'; // Asegúrate de importar esto

class ButtonName extends HTMLElement {
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
				<section class="Button-Name">
					<button class="Name">CHANGE</button>
				</section>
			`;
		}

		const cssLogOut = this.ownerDocument.createElement('style');
		cssLogOut.innerHTML = styles;
		this.shadowRoot?.appendChild(cssLogOut);
	}

	addListeners() {
		this.shadowRoot.querySelector('.Name')?.addEventListener('click', this.onButtonClicked);
	}

	async onButtonClicked() {
		const nameInput = document.getElementById('Name') as HTMLInputElement;
		const newName = nameInput.value;

		if (newName) {
			try {
				const userId = appState.user.firebaseID;
				await updateUserData(userId, { name: newName });
				alert('Name updated successfully!');
				dispatch(navigate('DASHBOARD'));
			} catch (error) {
				console.error('Error updating name:', error);
				alert('Failed to update name. Please try again.');
			}
		} else {
			alert('Please enter a name.');
		}
	}
}

customElements.define('button-name', ButtonName);
export default ButtonName;
