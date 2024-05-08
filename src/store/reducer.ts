export const reducer = (currentAction: any, currentState: any) => {
	const { type, payload } = currentAction;

	switch (type) {
		case 'NAVIGATESCREENS':
			currentState.screen = payload;
			break;
	}

	return currentState;
};
