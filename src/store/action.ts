import { Screens } from '../types/navigation';
<<<<<<< HEAD
import { addPost, getBands, getPosts } from '../utils/firebase';

export const addPostsAction = async (posts: any) => {
	//Ir al utils de firebase y ejecutar la función getPosts
	const postData = await addPost(posts);
	return {
		action: 'ADDPOSTS',
		payload: postData,
	};
};
=======
import { getBands, getUserByUid, getPosts } from '../utils/firebase';
>>>>>>> b5bade23d2368c016700a4434edddba0efbdd1d6

export const getPostsAction = async () => {
	// Ir al utils de firebase y ejecutar la función getPosts
	const posts = await getPosts();
	return {
		action: 'GETPOSTS',
		payload: posts,
	};
};

export const navigate = (screen: any) => {
	return {
		action: 'NAVIGATE',
		payload: screen,
	};
};

export const getBandsAction = async () => {
	const bands = await getBands();
	return {
		action: 'GETBANDS',
		payload: bands,
	};
};

export const getUserDataAction = async (id: string) => {
	const userdata = await getUserByUid(id);
	return {
		action: 'GETUSERDATA',
		payload: userdata,
	};
};
