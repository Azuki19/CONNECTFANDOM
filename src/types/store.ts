export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	screen: string;
	posts: any[];
	bands: any[];
	user: userType;
};

export enum ScreenActions {
	'NAVIGATE' = 'NAVIGATE',
	'DASHBOARD' = 'DASHBOARD',
}

export type Actions = ScreenActions;

export interface userType {
	name: string;
	username: string;
	email: string;
	password: string;
	authCredentials: string;
	firebaseID: string;
	info: string;
	image: string;
	type: string;
	followers: string;
}
