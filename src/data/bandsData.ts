interface DataShape {
	id: number;
	bandName: string;
	bandImage: string;
	bandInfo: string;
	bandGallery: {
		photo1: string;
		photo2: string;
	};
}

export const bandsdata: DataShape[] = [
	{
		id: 1,
		bandName: 'MY CHEMICAL ROMANCE',
		bandImage: 'https://pm1.aminoapps.com/7154/e3e685c9781ec3c4fcaff7d5a0f685b1d259e141r1-1242-1540v2_hq.jpg',
		bandInfo:
			'Formed in NJ, My Chemical Romance made its debut in 2002 with the independently released album I Brought You My Bullets, You Brought Me Your Love. The band signed to Reprise Records the following year and made its major label debut with 2004’s Three Cheers for Sweet Revenge, now 3x certified Platinum. The album contained the Platinum hit "Im Not Okay (I Promise)," the Gold-certified "Helena," and "The Ghost of You." Rolling Stone hailed the 3x Platinum The Black Parade as one of the top albums of 2006.Lead single “Welcome to the Black Parade” topped both Billboard’s Alternative Songs tally and the UK Official Singles chart and is now 3x Platinum.',
		bandGallery: {
			photo1: 'https://www.billboard.com/wp-content/uploads/stylus/500264-my_chemical_romance_617_409.jpg?w=617',
			photo2:
				'https://cms.kerrang.com/images/_1200x630_crop_center-center_82_none/My-Chemical-Romance-Danger-Days-promo-3.jpg?mtime=1573469727',
		},
	},
];
