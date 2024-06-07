import { Screens } from '../types/navigation';
import { addPost, getBands, getUserByUid, getPosts } from '../utils/firebase';
import { AppState, editprofileinputs } from '../types/store';

export const addPostsAction = async (posts: any) => {
	//Ir al utils de firebase y ejecutar la función getPosts
	const postData = await addPost(posts);
	return {
		action: 'ADDPOSTS',
		payload: postData,
	};
};

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

export const editProfileInfo = (editProfileInputs: any) => {
	return {
		action: 'EDITPROFILE',
		payload: editProfileInputs,
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
