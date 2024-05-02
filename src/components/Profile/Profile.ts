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
}
