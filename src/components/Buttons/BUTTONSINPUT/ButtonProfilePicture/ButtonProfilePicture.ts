import styles from './ButtonProfilePicture.css';
import { updateUserData } from '../../../../utils/firebase';
import { appState, dispatch } from '../../../../store';
import { navigate } from '../../../../store/action';
import { addObserver } from '../../../../store';

class ButtonProfilePicture extends HTMLElement {
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
				<section class="Button-Profile-Picture">
					<button class="Profile-Picture">CHANGE</button>
				</section>
			`;
		}

		const cssLogOut = this.ownerDocument.createElement('style');
		cssLogOut.innerHTML = styles;
		this.shadowRoot?.appendChild(cssLogOut);
	}

	addListeners() {
		this.shadowRoot.querySelector('.Button-Profile-Picture')?.addEventListener('click', this.onButtonClicked);
	}

	async onButtonClicked() {
		const userId = appState.user.authCredentials;
		const image = appState.editprofile.ProfilePictureInput;
		await updateUserData(userId, { image });
		dispatch(navigate('PROFILE'));
	}
}

customElements.define('button-profile-picture', ButtonProfilePicture);
export default ButtonProfilePicture;
