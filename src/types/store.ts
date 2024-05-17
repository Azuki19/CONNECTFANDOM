export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	screen: string;
	posts: any[];
	bands: any[];
};

export enum ScreenActions {
	'NAVIGATE' = 'NAVIGATE',
	'DASHBOARD' = 'DASHBOARD',
}

export type Actions = ScreenActions;
