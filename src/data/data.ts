interface DataShape {
	id: number;
	name: any;
	image: string;
	username: any;
	email: any;
	password: any;
	info: any;
	followers: number;
	Post1: {
		TitlePost: any;
		InfoPost: any;
		ImagePost: string;
	};
}

export const data: DataShape[] = [
	{
		id: 1,
		name: 'Maria Lopez',
		image: 'https://www.stereoboard.com/images/stories/2013/images/2021%20A-Z/W/when_we_were_young_js_141123.jpg',
		username: 'PepitaAzul1',
		email: 'MariaLopez12@gmail.com',
		password: 'Octubre11CMR',
		info: '1111111',
		followers: 100,
		Post1: {
			TitlePost: 'Band CMR',
			InfoPost: 'llll',
			ImagePost: 'jasdjnasd',
		},
	},
	{
		id: 2,
		name: 'Natalia Mora',
		image: 'https://upload.wikimedia.org/wikipedia/commons/1/13/My_Chemical_Romance_rain.jpg',
		username: 'NatMo02',
		email: 'NataliaMora@gmail.com',
		password: 'Mora123',
		info: '000000',
		followers: 300,
		Post1: {
			TitlePost: 'Boy Band',
			InfoPost: 'ssssss',
			ImagePost: 'jasdjnasd',
		},
	},
	{
		id: 3,
		name: 'Jose Montoya',
		image: 'https://cdns-images.dzcdn.net/images/artist/e34296360cda10a29f85c7170a60178d/500x500.jpg',
		username: 'MontoyaJ',
		email: 'MontoyaJ11@gmail.com',
		password: 'MontoyaFail2',
		info: '2222222',
		followers: 500,
		Post1: {
			TitlePost: 'Band*s',
			InfoPost: 'Sslsdas',
			ImagePost: 'jasdjnasd',
		},
	},
	{
		id: 4,
		name: 'Ana Lucia',
		image: 'https://townsquare.media/site/366/files/2022/07/attachment-my_chemical_romance_2005.jpg',
		username: 'Azuki19',
		email: 'AnaLuciaAzuki19@gmail.com',
		password: 'Azuki19LOL',
		info: '99999999',
		followers: 1000,
		Post1: {
			TitlePost: 'MCR Band',
			InfoPost: 'andjnasjd',
			ImagePost: 'jaaknsdjsjd',
		},
	},
	{
		id: 5,
		name: 'Cris Marin',
		image: 'https://www.sopitas.com/wp-content/uploads/2020/04/my-chemical-romance-destacada.jpg',
		username: 'Mona12',
		email: 'Mona12Cris@gmail.com',
		password: 'MCRmona12',
		info: '5555555',
		followers: 600,
		Post1: {
			TitlePost: 'MCR Band',
			InfoPost: 'Loveeeeee',
			ImagePost: 'akfksdnf',
		},
	},
];
