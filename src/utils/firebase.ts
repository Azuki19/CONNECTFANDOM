import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, doc, getDocs, getFirestore, setDoc, updateDoc } from 'firebase/firestore';

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
const songDocuments = collection(db, 'bands');
const auth = getAuth(app);

export const iniciarSesion = async (username: string, password: string) => {
	let authUser: any = '';

	const respuesta = await signInWithEmailAndPassword(auth, username, password)
		.then((userCredential) => {
			// Signed in
			authUser = userCredential.user;
			console.log(authUser);
			return true
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(error)
		});

		return respuesta
};

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
function signInWithUsernameAndPassword(auth: any, username: string, password: string) {
	throw new Error('Function not implemented.');
}
