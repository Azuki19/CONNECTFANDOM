export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	screen: string;
	posts: any[];
	bands: any[];
	users: userType;
};

export enum ScreenActions {
	'NAVIGATE' = 'NAVIGATE',
	'DASHBOARD' = 'DASHBOARD',
}

export type Actions = ScreenActions;

interface userType {
	name: string;
	username: string;
	email: string;
}
