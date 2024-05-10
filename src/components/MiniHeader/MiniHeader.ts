import styles from './MiniHeader.css';

import { dispatch } from '../../store';
import { navigate } from '../../store/action';
import { addObserver } from '../../store';
class MiniHeader extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		this.onButtonClicked = this.onButtonClicked.bind(this);
		this.addListeners();
	}

	connectedCallback() {
		this.mount();
	}

	mount() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
					<section class='sectionminiheader'>
							<h4 id="feed">FEED</h4>
							<h4 id="artists">ARTISTS</h4>
							<h4 id="events">EVENTS</h4>
							<h4 id="about-the-band">ABOUT THE BAND</h4>
					</section>
			`;
		}
		const cssMiniHeader = this.ownerDocument.createElement('style');
		cssMiniHeader.innerHTML = styles;
		this.shadowRoot?.appendChild(cssMiniHeader);
	}

	addListeners() {
		this.shadowRoot.querySelectorAll('.sectionminiheader h4').forEach((h4) => {
			h4.addEventListener('click', this.onButtonClicked);
		});
	}

	onButtonClicked(event) {
		const target = event.target.getAttribute('id');
		console.log('Clicked on:', target);
		// Aquí puedes definir las acciones correspondientes para cada identificador
		switch (target) {
			case 'feed':
				// Acción para FEED
				dispatch(navigate('DASHBOARD'));
				break;
			case 'artists':
				// Acción para ARTISTS
				dispatch(navigate('ARTISTDASHBOARD'));
				break;
			case 'events':
				// Acción para EVENTS
				dispatch(navigate(''));
				break;
			case 'about-the-band':
				// Acción para ABOUT THE BAND
				dispatch(navigate('ABOUTTHEBAND'));
				break;
			default:
				break;
		}
	}
}

customElements.define('mini-header', MiniHeader);
export default MiniHeader;
