interface DataShape {
	id: number;
	type: string;
	name: string;
	image: string;
	username: string;
	email: string;
	password: string;
	info: string;
	followers: number;
	post1: {
		titlePost: string;
		infoPost: string;
		imagePost: string;
	};
}

export const data: DataShape[] = [
	{
		id: 1,
		type: 'User',
		name: 'Maria Lopez',
		image: 'https://i.pinimg.com/564x/d4/ae/a5/d4aea579422b62be8dbad4420779faf1.jpg',
		username: 'PepitaAzul1',
		email: 'MariaLopez12@gmail.com',
		password: 'Octubre11CMR',
		info: '1111111',
		followers: 100,
		post1: {
			titlePost: 'Band CMR',
			infoPost:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			imagePost: 'https://i.pinimg.com/564x/d4/ae/a5/d4aea579422b62be8dbad4420779faf1.jpg',
		},
	},
	{
		id: 2,
		type: 'User',
		name: 'Natalia Mora',
		image: 'https://i.pinimg.com/564x/c0/fd/69/c0fd6900759453ce876a112cb0027d5c.jpg',
		username: 'NatMo02',
		email: 'NataliaMora@gmail.com',
		password: 'Mora123',
		info: '000000',
		followers: 300,
		post1: {
			titlePost: 'Boy Band',
			infoPost: '.',
			imagePost: 'https://i.pinimg.com/564x/d4/ae/a5/d4aea579422b62be8dbad4420779faf1.jpg',
		},
	},
	{
		id: 3,
		type: 'User',
		name: 'Jose Montoya',
		image: 'https://i.pinimg.com/564x/55/1c/6a/551c6a9cb66e0d6197278059a845f336.jpg',
		username: 'MontoyaJ',
		email: 'MontoyaJ11@gmail.com',
		password: 'MontoyaFail2',
		info: '2222222',
		followers: 500,
		post1: {
			titlePost: 'Band*s',
			infoPost:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			imagePost: 'https://i.pinimg.com/564x/55/1c/6a/551c6a9cb66e0d6197278059a845f336.jpg',
		},
	},
	{
		id: 4,
		type: 'User',
		name: 'Ana Lucia',
		image: 'https://i.pinimg.com/564x/26/03/e7/2603e72dc4855f4ab01e5479d8adc1fb.jpg',
		username: 'Azuki19',
		email: 'AnaLuciaAzuki19@gmail.com',
		password: 'Azuki19LOL',
		info: '99999999',
		followers: 1000,
		post1: {
			titlePost: 'MCR Band',
			infoPost:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			imagePost: 'https://i.pinimg.com/564x/26/03/e7/2603e72dc4855f4ab01e5479d8adc1fb.jpg',
		},
	},
	{
		id: 5,
		type: 'User',
		name: 'Cris Marin',
		image: 'https://i.pinimg.com/564x/9b/8e/e7/9b8ee7fd2c384d74c4d9c95e730075d5.jpg',
		username: 'Mona12',
		email: 'Mona12Cris@gmail.com',
		password: 'MCRmona12',
		info: '5555555',
		followers: 600,
		post1: {
			titlePost: 'MCR Band',
			infoPost:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			imagePost: 'https://i.pinimg.com/564x/9b/8e/e7/9b8ee7fd2c384d74c4d9c95e730075d5.jpg',
		},
	},
	{
		id: 6,
		type: 'Artist',
		name: 'Gerard Way',
		image: 'https://www.sopitas.com/wp-content/uploads/2020/04/my-chemical-romance-destacada.jpg',
		username: 'Gerard-Way',
		email: 'gerardwayMCR@gmail.com',
		password: 'gerardway100',
		info: '00000000',
		followers: 50.0,
		post1: {
			titlePost: 'MCR Band',
			infoPost: 'oojooooojjjj',
			imagePost: 'https://www.sopitas.com/wp-content/uploads/2020/04/my-chemical-romance-destacada.jpg',
		},
	},
	{
		id: 7,
		type: 'Artist',
		name: 'Frank Iero',
		image: 'https://www.sopitas.com/wp-content/uploads/2020/04/my-chemical-romance-destacada.jpg',
		username: 'Frank-Iero',
		email: 'FrankIeroMCR@gmail.com',
		password: '500FrankIero',
		info: '1111111',
		followers: 90.0,
		post1: {
			titlePost: 'MCR Band',
			infoPost: 'NKNKMKM',
			imagePost: 'https://www.sopitas.com/wp-content/uploads/2020/04/my-chemical-romance-destacada.jpg',
		},
	},
	{
		id: 8,
		type: 'Artist',
		name: 'Mikey Way',
		image: 'https://www.sopitas.com/wp-content/uploads/2020/04/my-chemical-romance-destacada.jpg',
		username: 'Mikey-Way',
		email: 'MikeyWayMCR@gmail.com',
		password: '12MikeyWay',
		info: '1222222',
		followers: 60.0,
		post1: {
			titlePost: 'MCR Band',
			infoPost: 'NJNINKN',
			imagePost: 'https://www.sopitas.com/wp-content/uploads/2020/04/my-chemical-romance-destacada.jpg',
		},
	},
	{
		id: 9,
		type: 'Artist',
		name: 'Ray Toro',
		image: 'https://www.sopitas.com/wp-content/uploads/2020/04/my-chemical-romance-destacada.jpg',
		username: 'Ray-Toro',
		email: 'RayToroMCR@gmail.com',
		password: 'RayToro123',
		info: '13323233',
		followers: 200.0,
		post1: {
			titlePost: 'MCR Band',
			infoPost: 'JASNDKANSDK',
			imagePost: 'https://www.sopitas.com/wp-content/uploads/2020/04/my-chemical-romance-destacada.jpg',
		},
	},
];
