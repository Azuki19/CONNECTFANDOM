import { Screens } from '../types/trips';

export const navigate = (screen: Screens) => {
	return {
		type: 'NAVIGATESCREENS',
		payload: screen,
	};
};
