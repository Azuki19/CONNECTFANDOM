// interface DataShape {
// 	id: number;
// 	type: string;
// 	name: string;
// 	image: string;
// 	username: string;
// 	email: string;
// 	password: string;
// 	info: string;
// 	followers: number;
// 	posts: {
// 		post1: {
// 			titlePost: string;
// 			infoPost: string;
// 			imagePost?: string;
// 		};
// 		post2?: {
// 			titlePost2: string;
// 			infoPost2: string;
// 			imagePost2: string;
// 		};
// 	};
// }

// export const MyChemicalRomanceData: DataShape[] = [
// 	{
// 		id: 1,
// 		type: 'User',
// 		name: 'Ana ₊˚ ✧ | 🦇',
// 		image: 'https://i.pinimg.com/564x/d4/ae/a5/d4aea579422b62be8dbad4420779faf1.jpg',
// 		username: 'gerardway_gf',
// 		email: 'analucia27259@gmail.com',
// 		password: '123456ana',
// 		info: 'Hi! im Ana. gerard way enthusiast ♡',
// 		followers: 100,
// 		posts: {
// 			post1: {
// 				titlePost: 'Gee b-day!!🎉🎂',
// 				infoPost:
// 					'Since gerards birthday is really soon, I wanted to share this silly little drawing I made. ❤️ ❤️ Here are all the funny Gerards through the time! keep an eye on the cake lol !! ^-^',
// 				imagePost: 'https://i.pinimg.com/564x/fd/e2/2e/fde22ef455c55d897ba1ae585f69e618.jpg',
// 			},
// 		},
// 	},
// 	{
// 		id: 2,
// 		type: 'User',
// 		name: 'Natalie ♡',
// 		image: 'https://i.pinimg.com/564x/c0/fd/69/c0fd6900759453ce876a112cb0027d5c.jpg',
// 		username: 'NatMo02',
// 		email: 'NataliaMora@gmail.com',
// 		password: 'Mora123',
// 		info: 'I love mcr. Black Parade Best Album!! 4ever',
// 		followers: 300,
// 		posts: {
// 			post1: {
// 				titlePost: 'frankie performance',
// 				infoPost: 'I reaaaaally loved the new frank performance🎸🎸',
// 				imagePost: 'https://i.pinimg.com/564x/08/88/2a/08882a8ce06cbd4319362e624119c691.jpg',
// 			},
// 		},
// 	},
// 	{
// 		id: 3,
// 		type: 'User',
// 		name: '🖤not maria',
// 		image: 'https://i.pinimg.com/564x/55/1c/6a/551c6a9cb66e0d6197278059a845f336.jpg',
// 		username: 'maria_loves_frank',
// 		email: 'MariaLopez12@gmail.com',
// 		password: 'MariaFail2',
// 		info: '2222222',
// 		followers: 500,
// 		posts: {
// 			post1: {
// 				titlePost: 'Gerard ♡',
// 				infoPost:
// 					'Is Gerard Way actually the best fucking human in this planet we call the earth and inspired so many people at a point that he saved so many lives including mine or am i just insanely in love with him? 🖤',
// 				imagePost: 'https://i.pinimg.com/564x/ca/35/b6/ca35b64276c9f71c1363c477ab767973.jpg',
// 			},
// 		},
// 	},
// 	{
// 		id: 4,
// 		type: 'User',
// 		name: 'Jose 🎸 mcr fan',
// 		image: 'https://i.pinimg.com/564x/26/03/e7/2603e72dc4855f4ab01e5479d8adc1fb.jpg',
// 		username: 'MontoyaJ',
// 		email: 'MontoyaJ11@gmail.com',
// 		password: 'josejose12345',
// 		info: '99999999',
// 		followers: 1000,
// 		posts: {
// 			post1: {
// 				titlePost: 'WHY????',
// 				infoPost:
// 					'Lets be honest, they DO NOT HAVE a single song where they NEEDED to use a FLAMETHROWER, LIKE??!! OHMYGOOOOD???',
// 				imagePost: 'https://i.pinimg.com/564x/49/5d/5e/495d5ea8192f0805ee931372cf559dbc.jpg',
// 			},
// 		},
// 	},
// 	{
// 		id: 5,
// 		type: 'User',
// 		name: 'Cris Marin',
// 		image: 'https://i.pinimg.com/564x/9b/8e/e7/9b8ee7fd2c384d74c4d9c95e730075d5.jpg',
// 		username: 'LaMonaPriv12',
// 		email: 'Mona12Cris@gmail.com',
// 		password: 'MCRmona12',
// 		info: '5555555',
// 		followers: 600,
// 		posts: {
// 			post1: {
// 				titlePost: 'Gee and Mikey photo',
// 				infoPost: 'Look at the new pic, they are soo cute 🥹♡ im gonna cry',
// 				imagePost: 'https://i.pinimg.com/564x/5c/63/b7/5c63b77e465be04e0960b239f6db9db3.jpg',
// 			},
// 		},
// 	},
// 	{
// 		id: 6,
// 		type: 'Artist',
// 		name: 'Gerard Way',
// 		image: 'https://i.pinimg.com/564x/bf/ee/f6/bfeef61a8a0242fc7ff5db2ce8b5e40c.jpg',
// 		username: 'gerardway',
// 		email: 'gerardwayMCR@gmail.com',
// 		password: 'gerardway100',
// 		info: '00000000',
// 		followers: 50.0,
// 		posts: {
// 			post1: {
// 				titlePost: 'Goodnight',
// 				infoPost: 'Love to you, eternally. You are all brave and brilliant. Goodnight for now.',
// 				imagePost: 'no image',
// 			},
// 			post2: {
// 				titlePost2: 'New Music?',
// 				infoPost2:
// 					'I am continuing to make music, though I have a lot of writing to do. I still have sessions and write songs. Doing smaller releases.',
// 				imagePost2: 'https://pbs.twimg.com/media/CgIZIV4UAAAnCiK?format=jpg&name=large',
// 			},
// 		},
// 	},
// 	{
// 		id: 7,
// 		type: 'Artist',
// 		name: 'frnkiero: Party (goth) Dad',
// 		image: 'https://rollingstone.uol.com.br/media/_versions/frank_iero_cred_mitchell_wojcik_widelg.jpg',
// 		username: 'FrankIero',
// 		email: 'FrankIeroMCR@gmail.com',
// 		password: '500FrankIero',
// 		info: '1111111',
// 		followers: 90.0,
// 		posts: {
// 			post1: {
// 				titlePost: '🖤🖤🖤',
// 				infoPost: 'Hell yeah!! “always a good idea to have a few microkorgs laying around!!!” 🖤 nice haul !',
// 				imagePost: 'no image',
// 			},
// 			post2: {
// 				titlePost2: 'Reverb Store!',
// 				infoPost2:
// 					'My Official Reverb Store opens tomorrow at 10am cst!!! Thank you for having me! I can’t wait to see what you all grab! Happy hunting frendz! KTF 🖤 xofrnk.',
// 				imagePost2: 'https://pbs.twimg.com/media/FzqUufCXgAIpPtQ?format=jpg&name=900x900',
// 			},
// 		},
// 	},
// 	{
// 		id: 8,
// 		type: 'Artist',
// 		name: 'mikeyway',
// 		image: 'https://guitar.com/wp-content/uploads/2023/06/Mikey-Way-hero-image-Fender@2000x1500.jpg',
// 		username: 'mikeyway',
// 		email: 'MikeyWayMCR@gmail.com',
// 		password: '12MikeyWay',
// 		info: '1222222',
// 		followers: 60.0,
// 		posts: {
// 			post1: {
// 				titlePost: '⚡',
// 				infoPost: 'This has been a long time coming. Can’t wait to welcome you all to the world of Electric Century!⚡',
// 				imagePost: 'https://pbs.twimg.com/media/ExGY6M0VkAELAzA?format=jpg&name=large',
// 			},
// 			post2: {
// 				titlePost2: 'Frankenstyle',
// 				infoPost2: 'Rowan calls Frankenstein -“Frankenstyle”, and I’m never correcting her because it rules',
// 				imagePost2: 'no image',
// 			},
// 		},
// 	},
// 	{
// 		id: 9,
// 		type: 'Artist',
// 		name: 'raytoro',
// 		image: 'https://pbs.twimg.com/profile_images/795850216620441600/wVUeaz0y_400x400.jpg',
// 		username: 'raytoro',
// 		email: 'RayToroMCR@gmail.com',
// 		password: 'RayToro123',
// 		info: '13323233',
// 		followers: 200.0,
// 		posts: {
// 			post1: {
// 				titlePost: 'GRACIAS!',
// 				infoPost: 'Gracias México! You made tonight so special for us. We’ll never forget it.',
// 				imagePost: 'no image',
// 			},
// 			post2: {
// 				titlePost2: 'Special Moment🖤',
// 				infoPost2:
// 					'This is such a beautiful photo. Thank you for capturing this special moment, and being so respectful!',
// 				imagePost2: 'https://pbs.twimg.com/media/FfYpslWXkAAGFjA?format=jpg&name=medium',
// 			},
// 		},
// 	},
// ];
