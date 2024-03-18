interface DataShape {
	id: number;
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
		name: 'Maria Lopez',
		image: 'https://i.pinimg.com/564x/d4/ae/a5/d4aea579422b62be8dbad4420779faf1.jpg',
		username: 'PepitaAzul1',
		email: 'MariaLopez12@gmail.com',
		password: 'Octubre11CMR',
		info: '1111111',
		followers: 100,
		post1: {
			titlePost: 'Band CMR',
			infoPost: 'llll',
			imagePost: 'https://i.pinimg.com/564x/d4/ae/a5/d4aea579422b62be8dbad4420779faf1.jpg',
		},
	},
	{
		id: 2,
		name: 'Natalia Mora',
		image: 'https://i.pinimg.com/564x/51/fd/bc/51fdbcff0c67d57344d217f7630e5b65.jpg',
		username: 'NatMo02',
		email: 'NataliaMora@gmail.com',
		password: 'Mora123',
		info: '000000',
		followers: 300,
		post1: {
			titlePost: 'Boy Band',
			infoPost: 'ssssss',
			imagePost: 'https://i.pinimg.com/564x/51/fd/bc/51fdbcff0c67d57344d217f7630e5b65.jpg',
		},
	},
	{
		id: 3,
		name: 'Jose Montoya',
		image: 'https://i.pinimg.com/564x/55/1c/6a/551c6a9cb66e0d6197278059a845f336.jpg',
		username: 'MontoyaJ',
		email: 'MontoyaJ11@gmail.com',
		password: 'MontoyaFail2',
		info: '2222222',
		followers: 500,
		post1: {
			titlePost: 'Band*s',
			infoPost: 'Sslsdas',
			imagePost: 'https://i.pinimg.com/564x/55/1c/6a/551c6a9cb66e0d6197278059a845f336.jpg',
		},
	},
	{
		id: 4,
		name: 'Ana Lucia',
		image: 'https://i.pinimg.com/564x/26/03/e7/2603e72dc4855f4ab01e5479d8adc1fb.jpg',
		username: 'Azuki19',
		email: 'AnaLuciaAzuki19@gmail.com',
		password: 'Azuki19LOL',
		info: '99999999',
		followers: 1000,
		post1: {
			titlePost: 'MCR Band',
			infoPost: 'andjnasjd',
			imagePost: 'https://i.pinimg.com/564x/26/03/e7/2603e72dc4855f4ab01e5479d8adc1fb.jpg',
		},
	},
	{
		id: 5,
		name: 'Cris Marin',
		image: 'https://i.pinimg.com/564x/9b/8e/e7/9b8ee7fd2c384d74c4d9c95e730075d5.jpg',
		username: 'Mona12',
		email: 'Mona12Cris@gmail.com',
		password: 'MCRmona12',
		info: '5555555',
		followers: 600,
		post1: {
			titlePost: 'MCR Band',
			infoPost: 'Loveeeeee',
			imagePost: 'https://i.pinimg.com/564x/9b/8e/e7/9b8ee7fd2c384d74c4d9c95e730075d5.jpg',
		},
	},
];
