export const reducer = (currentAction: any, currentState: any) => {
	const { action, payload } = currentAction;

	switch (action) {
		case 'NAVIGATE':
			currentState.screen = payload;
			break;

		case 'GETPOSTS':
			currentState.posts = payload;
			break;

		case 'GETBANDS':
			currentState.bands = payload;
			break;

		case 'SET_USER':
			currentState.user = payload;
			break;
	}

	return currentState;
};
