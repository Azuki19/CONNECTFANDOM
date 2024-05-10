import { Screens } from '../types/trips';

export const navigate = (screen: any) => {
	return {
		type: 'NAVIGATE',
		payload: screen,
	};
};
