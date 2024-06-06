import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
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
	let authUser: any = '';

	const respuesta = await signInWithEmailAndPassword(auth, username, password)
		.then((userCredential) => {
			// Signed in
			authUser = userCredential.user;
			console.log(authUser);
			return true;
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(error);
			return false; // Añadir retorno false en caso de error
		});

	return respuesta;
};

// Funciones para Registrarme y loguearme
export const registrarUsuario = async (Name: string, Username: string, email: string, password: string) => {
	const respuesta = await createUserWithEmailAndPassword(auth, email, password);

	const userCredentials = respuesta.user.uid;

	console.log(userCredentials);

	try {
		const docRef = await addDoc(collection(db, 'users'), {
			Name: Name,
			Username: Username,
			email: email,
			password: password,
			authCredentials: userCredentials,
		});

		await updateDoc(docRef, {
			firebaseID: docRef.id,
		});
	} catch (error) {
		const errorMessage = error.message;
		alert(errorMessage);
		return false;
	}

	return respuesta;
};



//llama el usaurio logeado
export const getUserByid = async (id: string) => {
	//forma 1 con authcredential
	const q = query(collection(db, 'users'));
	const allUsers: userType[] = [];

	/*onSnapshot(q, (querySnapshot) => {
		querySnapshot.forEach((doc) => {
			allUsers.push({
				name: doc.data().Name,
				username: doc.data().Username,
				email: doc.data().email,
				password: doc.data().password,
				firebaseID: doc.data().firebaseID,
				authCredentials: doc.data().authCredentials,
			});
		});
	});*/

	const user = allUsers.find((user) => user.authCredentials === id);

	console.log(user);

	return user;
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
