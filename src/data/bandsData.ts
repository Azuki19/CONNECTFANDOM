interface DataShape {
	id: number;
	bandName: string;
	bandImage: string;
	bandInfo: string;
	bandGallery: {
		photo1: string;
		photo2: string;
		photo3: string;
		photo4: string;
		photo5: string;
		photo6: string;
		photo7: string;
	};
}

export const bandsdata: DataShape[] = [
	{
		id: 1,
		bandName: 'MY CHEMICAL ROMANCE',
		bandImage: 'https://pbs.twimg.com/media/GKGEoDiXgAApA5N?format=png&name=small',
		bandInfo:
			'Formed in NJ, My Chemical Romance made its debut in 2002 with the independently released album I Brought You My Bullets, You Brought Me Your Love. The band signed to Reprise Records the following year and made its major label debut with 2004’s Three Cheers for Sweet Revenge, now 3x certified Platinum. The album contained the Platinum hit "Im Not Okay (I Promise)," the Gold-certified "Helena," and "The Ghost of You." Rolling Stone hailed the 3x Platinum The Black Parade as one of the top albums of 2006.Lead single “Welcome to the Black Parade” topped both Billboard’s Alternative Songs tally and the UK Official Singles chart and is now 3x Platinum.',
		bandGallery: {
			photo1: 'https://www.billboard.com/wp-content/uploads/stylus/500264-my_chemical_romance_617_409.jpg?w=617',
			photo2:
				'https://cms.kerrang.com/images/_1200x630_crop_center-center_82_none/My-Chemical-Romance-Danger-Days-promo-3.jpg?mtime=1573469727',
			photo3:
				'https://punkeando.com.mx/wp-content/webpc-passthru.php?src=https://punkeando.com.mx/wp-content/uploads/2022/05/my-chemical-romance-top-10.jpg&nocache=1',
			photo4:
				'https://portalpopline.com.br/wp-content/uploads/2022/05/my-chemical-romance-The-Foundations-of-Decay-single.jpg',
			photo5:
				'https://www.nacionrex.com/__export/1572556814750/sites/debate/img/2019/10/31/my-chemical-romance-regresa_crop1572556749434.jpg_673822677.jpg',
			photo6:
				'https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/ap101201125099.jpg?crop=1.00xw:0.846xh;0,0.0782xh&resize=900:*',
			photo7: 'https://www.altwire.net/wp-content/uploads/2022/02/MCRTBP.jpeg',
		},
	},
	{
		id: 2,
		bandName: 'PIERCE THE VEIL',
		bandImage: 'https://store.fearlessrecords.com/cdn/shop/collections/piercetheveil.jpg?v=1662006994',
		bandInfo:
			'Pierce The Veil es una banda estadounidense de post-hardcore formada en el año 1998 bajo el nombre de Early Times, en el 2004 renombrada Before Today, y tras un pequeño hiato en el 2006, la banda oficialmente pasó a llamarse Pierce The Veil, bajo este nombre la banda ha lanzado cinco álbumes de estudio, A Flair for the Dramatic en junio del 2007, Selfish Machines en junio del 2010, Collide with the Sky en julio de 2012, Misadventures en mayo de 2016 y The Jaws Of Life el 10 de febrero de 2023.',
		bandGallery: {
			photo1: 'https://tracktohell.com/wp-content/uploads/2020/04/PTV730.jpg',
			photo2:
				'https://cms.kerrang.com/images/_1200x630_crop_center-center_82_none/My-Chemical-Romance-Danger-Days-promo-3.jpg?mtime=1573469727https://fearlessrecords.com/wp-content/uploads/2023/02/W1A0301-scaled-e1676010334222.jpg',
			photo3: 'https://www.mondosonoro.com/wp-content/uploads/2016/05/piercetheveil.jpg',
			photo4: 'https://setlist.me/wp-content/uploads/2023/03/DSC08403-2.jpg',
			photo5:
				'https://i0.wp.com/expectador.cl/wp-content/uploads/2023/04/Diseno-sin-titulo-3.png?resize=1020%2C600&ssl=1',
			photo6: 'https://www.metalmusicarchives.com/images/artists/pierce-the-veil-20190506143001.jpg',
			photo7:
				'https://punkeando.com.mx/wp-content/webpc-passthru.php?src=https://punkeando.com.mx/wp-content/uploads/2023/03/Pierce-The-Veil-Carpa-Velodromo-CDMX-2023.jpg&nocache=1',
		},
	},
];
