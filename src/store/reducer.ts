export const reducer = (currentAction: any, currentState: any) => {
	console.log(currentAction);
	const { action, payload } = currentAction;

	switch (action) {
		case 'ADDPOSTS':
			currentAction.posts = payload;
			break;

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

		case 'EDITPROFILE':
			currentState.editprofile = payload;
			break;

		case 'GETUSERDATA':
			currentState.user = payload;
			break;
	}

	return currentState;
};
