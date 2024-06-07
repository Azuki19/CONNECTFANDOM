import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { addDoc, collection, doc, getDoc, getDocs, query, where, getFirestore, setDoc, updateDoc } from 'firebase/firestore';
import { PostAdd } from '../types/postAdd';
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

		const userData = {
			name,
			username,
			email,
			password,
			authCredentials: userCredentials,
			info: '',
			image: '',
			type: '',
		};

		const userRef = doc(db, 'users', userCredentials); // Obtener referencia del documento
		await setDoc(userRef, userData); // Establecer datos iniciales

		// Agregar firebaseID después de la creación del documento
		await updateDoc(userRef, {
			firebaseID: userCredentials,
		});

		console.log('User registered with data:', userData); // Verifica los datos almacenados
		return userData;
	} catch (error) {
		console.error('Error during registration:', error);
		return null;
	}
};

export const actualizarUsuario = async (userId, updatedData) => {
	try {
		// Referencia al documento del usuario en Firestore
		const userDocRef = doc(db, 'users', userId);

		// Actualizar el documento del usuario con los datos proporcionados
		await updateDoc(userDocRef, updatedData);

		// Obtener el documento actualizado para verificar los cambios
		const updatedUserDoc = await getDoc(userDocRef);
		const updatedUserData = updatedUserDoc.data();

		console.log('User data updated successfully:', updatedUserData);
		return updatedUserData;
	} catch (error) {
		console.error('Error updating user:', error);
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
	console.log('No user data found for UID:', uid);
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
// Nueva función para agregar posts
export const addPost = async (post: Omit<PostAdd, 'id'>) => {
	try {
		const docRef = await addDoc(collection(db, 'posts'), post);
		console.log('Post added with ID: ', docRef.id);
		return docRef.id;
	} catch (e) {
		console.error('Error adding post: ', e);
		throw new Error('Error adding post');
	}
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

// export const actualizarDatosUsuarioConImagen = async (
// 	name: string,
// 	username: string,
// 	email: string,
// 	password: string,
// 	authCredentials: string,
// 	firebaseID: '',
// 	info: string,
// 	image: string,
// 	type: string,
// 	followers: string
// ) => {
// 	console.log('actualizarDatosUsuarioConImagen');
// 	const userRef = doc(db, 'users', appState.user);

// 	const imageURL = await subirImagen(img);

// 	await updateDoc(userRef, {
// 		name: name,
// 		username: username,
// 		email: email,
// 		password: password,
// 		authCredentials: authCredentials,
// 		firebaseID: firebaseID,
// 		info: info,
// 		image: image,
// 		type: type,
// 		followers: followers,
// 	});
// };

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
		console.error('Error getting documents:', error);
	}
};
