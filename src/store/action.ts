import { Screens } from '../types/navigation';
import { addPost, getBands, getPosts } from '../utils/firebase';

export const addPostsAction = async (posts: any) => {
	//Ir al utils de firebase y ejecutar la función getPosts
	const postData = await addPost(posts);
	return {
		action: 'ADDPOSTS',
		payload: postData,
	};
};

export const getPostsAction = async () => {
	//Ir al utils de firebase y ejecutar la función getPosts
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
