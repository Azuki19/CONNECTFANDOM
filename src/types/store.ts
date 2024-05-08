export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	screen: string;
};

export enum ScreenActions {
	'NAVIGATESCREENS' = 'NAVIGATESCREENS',
}

export type Actions = ScreenActions;
