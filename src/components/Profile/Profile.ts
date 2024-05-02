import styles from './Profile.css';

export enum ProfileAttribute {
	'uid' = 'uid',
	'imagProfile' = 'imagProfile',
	'name' = 'name',
	'username' = 'username',
	'followers' = 'followers',
	'info' = 'info',
	'type' = 'type',
	'email' = 'email',
	'password' = 'password',
}

class ProfileAtt extends HTMLElement {
	uid?: number;
	imagProfile?: string;
	name?: string;
	username?: string;
	followers?: number;
	info?: string;
	type?: string;
	email?: string;
	password?: string;

	static get observedAttributes() {
		return Object.values(ProfileAttribute);
	}

	attributeChangedCallback(propName: string, oldValue: string | null, newValue: string | null) {
		if (newValue !== null) {
			switch (propName) {
				case ProfileAttribute.uid:
				case ProfileAttribute.followers:
					this[propName] = parseInt(newValue);
					break;
				default:
					this[propName] = newValue;
					break;
			}
		}
		this.render();
	}
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}
}
