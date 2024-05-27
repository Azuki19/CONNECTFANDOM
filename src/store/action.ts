import { Screens } from '../types/navigation';
import { getBands, getUserByid, getPosts } from '../utils/firebase';

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
export const getUserDataAction = async (id: string) => {
	const userdata = await getUserByid(id);
	return {
		action: 'GETUSERDATA',
		payload: userdata,
	};
};
