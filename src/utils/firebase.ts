import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import {
	addDoc,
	collection,
	getDocs,
	getFirestore,
	updateDoc,
	query,
	where,
	doc,
	setDoc,
	getDoc,
	onSnapshot,
} from 'firebase/firestore';
import { emptyState } from '../store';
import { userType } from '../types/store';

const firebaseConfig = {
	apiKey: 'AIzaSyCd85eDHcTUkpO2r4-cnv_M3FBM-fx1b5w',
	authDomain: 'connectfandom-10afd.firebaseapp.com',
	projectId: 'connectfandom-10afd',
	storageBucket: 'connectfandom-10afd.appspot.com',
	messagingSenderId: '97703631721',
	appId: '1:97703631721:web:b939f115fd9ef140b0bbf8',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export const iniciarSesion = async (username: string, password: string) => {
	try {
		const userCredential = await signInWithEmailAndPassword(auth, username, password);
		const authUser = userCredential.user;
		const userData = await getUserByUid(authUser.uid);
		console.log(userData);
		return userData;
	} catch (error) {
		console.error('Error during sign-in:', error);
		return false;
	}
};

export const registrarUsuario = async (name: string, username: string, email: string, password: string) => {
	try {
		const respuesta = await createUserWithEmailAndPassword(auth, email, password);
		const userCredentials = respuesta.user.uid;

		const docRef = await addDoc(collection(db, 'users'), {
			name: name,
			username: username,
			email: email,
			password: password,
			authCredentials: userCredentials,
		});

		await updateDoc(docRef, {
			firebaseID: docRef.id,
		});

		const userData = await getUserByUid(userCredentials);
		console.log(userData);
		return userData;
	} catch (error) {
		console.error('Error during registration:', error);
		return false;
	}
};

export const getUserByUid = async (uid: string) => {
	const q = query(collection(db, 'users'), where('authCredentials', '==', uid));
	const querySnapshot = await getDocs(q);
	if (!querySnapshot.empty) {
		const userData = querySnapshot.docs[0].data() as userType;
		console.log('Fetched user data:', userData); // Verifica los datos obtenidos
		return userData;
	}
	return null;
};

export const setupAuthListener = (callback: (user: userType | null) => void) => {
	onAuthStateChanged(auth, async (user) => {
		if (user) {
			const userData = await getUserByUid(user.uid);
			console.log('User data from Firebase:', userData); // Verifica los datos obtenidos
			callback(userData);
		} else {
			callback(null);
		}
	});
};

export async function checkUsernameExists(username: string) {
	// Lógica para verificar si el nombre de usuario ya existe
	const q = query(collection(db, 'users'), where('Username', '==', username));
	const querySnapshot = await getDocs(q);
	return !querySnapshot.empty;
}

export async function checkEmailExists(email: string) {
	// Lógica para verificar si el correo electrónico ya existe
	const q = query(collection(db, 'users'), where('email', '==', email));
	const querySnapshot = await getDocs(q);
	return !querySnapshot.empty;
}

// Funciones para agregar y obtener posts
export const getPosts = async () => {
	const querySnapshot = await getDocs(collection(db, 'MyChemicalRomanceData'));
	const postdata: Array<any> = [];
	querySnapshot.forEach((doc: any) => {
		postdata.push(doc.data());
	});
	return postdata;
};

export const getBands = async () => {
	const querySnapshot = await getDocs(collection(db, 'bandsdata'));
	const bandsdata: Array<any> = [];
	querySnapshot.forEach((doc: any) => {
		bandsdata.push(doc.data());
	});
	return bandsdata;
};
export const getData = async () => {
	try {
		const querySnapshot = await getDocs(collection(db, 'users'));
		querySnapshot.forEach((doc) => {
			const data = doc.data();
			console.log('Hola');
			console.log(data);
		});
	} catch (error) {
		console.error('Error getting documents: ', error);
	}
};
