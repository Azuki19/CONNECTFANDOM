import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, getDocs, getFirestore, updateDoc, query, where } from 'firebase/firestore';

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
	const respuesta = await createUserWithEmailAndPassword(auth, email, password)
		.then(async (userCredential) => {
			// Signed up
			const userCredentials = userCredential.user.uid;

			console.log(userCredentials);

			const docRef = await addDoc(collection(db, 'users'), {
				Name: Name,
				Username: Username,
				email: email,
				password: password,
				authCredentials: userCredentials,
			});
			//console.log("Document written with ID: ", docRef.id);
			await updateDoc(docRef, {
				firebaseID: docRef.id,
			});

			return true; // Devolver true si el registro fue exitoso
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			alert(errorMessage);
			return false; // Devolver false en caso de error
		});

	return respuesta;
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

// Funciones para loguearme y registrarme
export const createUser = (email: string, password: string) => {
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user;
			console.log(user);
		})
		.catch((error: any) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorCode, errorMessage);
		});
};

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
