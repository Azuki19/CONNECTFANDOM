import styles from './BandInfo.css';

export enum BandInfoAttributtes {
	'id' = 'uid',
	'bandName' = 'bandname',
	'bandInfo' = 'bandinfo',
}

class BandInfo extends HTMLElement {
	uid?: number;
	bandname?: string;
	bandinfo?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}
	static get observedAttributes() {
		const attrs: Record<BandInfoAttributtes, null> = {
			uid: null,
			bandname: null,
			bandinfo: null,
		};
		return Object.keys(attrs);
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(propName: string, oldValue: string | null, newValue: string | null) {
		switch (propName) {
			case BandInfoAttributtes.id:
				this.uid = newValue ? Number(newValue) : undefined;
				break;
			default:
				this[propName] = newValue;
				break;
		}
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `

    <section class="container">
			<h1 class='name'>${this.bandname}</h1>
			<p class='username'>${this.bandinfo}</p>
    </section>

      `;
		}

		const cssMembers = this.ownerDocument.createElement('style');
		cssMembers.innerHTML = styles;
		this.shadowRoot?.appendChild(cssMembers);
	}
}

customElements.define('band-info', BandInfo);
export default BandInfo;
