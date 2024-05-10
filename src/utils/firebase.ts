import { initializeApp } from 'firebase/app';
import { addDoc, collection, doc, getDocs, getFirestore, setDoc } from 'firebase/firestore';

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
};
