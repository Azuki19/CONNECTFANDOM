import Storage, { PersistanceKeys } from '../utils/storage';
import { AppState, Observer } from '../types/store';
import { reducer } from './reducer';
import { Screens } from '../types/navigation';
import { setupAuthListener } from '../utils/firebase';
import { navigate } from './action';

setupAuthListener((user) => {
	if (user) {
		const userData = {
			name: user.name || 'nofunciono',
			username: user.username || 'nofunciono',
			email: user.email || '',
			password: '', // Esto probablemente no debe ser almacenado directamente
			authCredentials: user.authCredentials || '',
			info: user.info || '',
			image: user.image || '',
			type: user.type || '',
		};
		console.log('User data to be dispatched:', userData); // Verifica los datos antes de despachar
		dispatch({
			action: 'SET_USER',
			payload: userData,
		});
		dispatch(navigate('DASHBOARD'));
	} else {
		dispatch(navigate('LOGIN'));
	}
});

export const emptyState: AppState = {
	screen: Screens.LOGIN,
	user: {
		name: '',
		username: '',
		email: '',
		password: '',
		authCredentials: '',
		firebaseID: '',
		info: '',
		image: '',
		type: '',
		followers: '',
	},
	posts: [],
	bands: [],
};

export let appState = Storage.get<AppState>({
	key: PersistanceKeys.STORE,
	defaultValue: emptyState,
});

let observers: Observer[] = [];

const persistStore = (state: AppState) => Storage.set({ key: PersistanceKeys.STORE, value: state });

const notifyObservers = () => observers.forEach((o) => o.render());

export const dispatch = (action: any) => {
	const clone = JSON.parse(JSON.stringify(appState));
	const newState = reducer(action, clone);
	console.log('New App State after dispatch:', newState); // Verifica el nuevo estado después del dispatch
	appState = newState;

	persistStore(newState);
	notifyObservers();
};

export const addObserver = (ref: Observer) => {
	observers = [...observers, ref];
};

// Exportar dispatch para ser utilizado en otros módulos si es necesario
export default dispatch;
