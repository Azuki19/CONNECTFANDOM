import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import {
	addDoc,
	collection,
	doc,
	getDoc,
	getDocs,
	query,
	where,
	getFirestore,
	setDoc,
	updateDoc,
	onSnapshot,
} from 'firebase/firestore';
import { PostAdd } from '../types/postAdd';
import { userType } from '../types/store';
import { appState, dispatch } from '../store';
import { getUserDataAction } from '../store/action';

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

export const addPost = async (post: Omit<PostAdd, 'id'> & { userId: string }) => {
	try {
		const userDoc = await getDoc(doc(db, 'users', post.userId));
		if (!userDoc.exists()) {
			throw new Error('User not found');
		}
		const user = userDoc.data() as userType;

		const postWithUserId = {
			...post,
			name: user.name || 'nofunciono',
			username: user.username || 'nofunciono',
			image: user.image || '',
		};

		const docRef = await addDoc(collection(db, 'posts'), postWithUserId);
		console.log('Post added with ID: ', docRef.id);
		return docRef.id;
	} catch (e) {
		console.error('Error adding post: ', e);
		throw new Error('Error adding post');
	}
};

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
			followers: '',
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
	querySnapshot.forEach((doc) => {
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

export const updateUserData = async (userId: string, data: Partial<userType>, file?: File) => {
	console.log('user data firebase :3');
	console.log(userId, data);

	const userRef = doc(db, 'users', userId);

	try {
		if (file) {
			const imageUrl = await uploadImage(file, userId);
			data.image = imageUrl;
		}

		await updateDoc(userRef, data);
		console.log('User data updated successfully');
		dispatch(await getUserDataAction(userId));
	} catch (error) {
		console.error('Error updating user data:', error);
	}
};

import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const storage = getStorage(app);

export const uploadImage = async (file: File, userId: string): Promise<string> => {
	const storageRef = ref(storage, `userProfileImages/${userId}/${file.name}`);
	await uploadBytes(storageRef, file);
	const url = await getDownloadURL(storageRef);
	return url;
};

export const subscribeToBandDataChanges = () => {
	const bandsRef = collection(db, 'bandsdata');
	onSnapshot(bandsRef, (snapshot) => {
		const bandsdata: Array<any> = [];
		snapshot.forEach((doc) => {
			bandsdata.push(doc.data());
		});
		dispatch({
			action: 'SET_BANDS',
			payload: bandsdata,
		});
	});
};
