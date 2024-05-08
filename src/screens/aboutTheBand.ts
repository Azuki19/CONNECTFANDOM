import * as components from '../components/indexPadre';
import { bandsdata } from '../data/bandsData';
import { MyChemicalRomanceData } from '../data/MyChemicalRomanceData';
import { BandGallery } from '../components/indexPadre';
import { Members } from '../components/indexPadre';
import { BandInfo } from '../components/indexPadre';
import style from './aboutTheBand.css';

class AppAboutTheBand extends HTMLElement {
	bandgallerys: BandGallery[] = [];
	members: Members[] = [];
	bandinfo: BandInfo[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		const PhotosData = bandsdata.filter((band) => band.bandName === 'MY CHEMICAL ROMANCE');

		PhotosData.forEach((band) => {
			const bandGalleryCard = document.createElement('band-gallery') as BandGallery;

			bandGalleryCard.setAttribute('photo1', band.bandGallery.photo1);
			bandGalleryCard.setAttribute('photo2', band.bandGallery.photo2);
			bandGalleryCard.setAttribute('photo3', band.bandGallery.photo3);
			bandGalleryCard.setAttribute('photo4', band.bandGallery.photo4);
			bandGalleryCard.setAttribute('photo5', band.bandGallery.photo5);
			bandGalleryCard.setAttribute('photo6', band.bandGallery.photo6);
			bandGalleryCard.setAttribute('photo7', band.bandGallery.photo7);

			this.bandgallerys.push(bandGalleryCard);
		});

		const MemberData = MyChemicalRomanceData.filter((artist) => artist.type === 'Artist');

		MemberData.forEach((artist) => {
			const MemberCard = document.createElement('members-app') as Members;

			MemberCard.setAttribute('image', artist.image);
			MemberCard.setAttribute('name', artist.name);
			MemberCard.setAttribute('username', artist.username);

			this.members.push(MemberCard);
		});

		const InfoData = bandsdata.filter((info) => info.bandName === 'MY CHEMICAL ROMANCE');

		InfoData.forEach((info) => {
			const InfoCard = document.createElement('band-info') as BandInfo;

			InfoCard.setAttribute('uid', String(info.id));
			InfoCard.setAttribute('bandname', info.bandName);
			InfoCard.setAttribute('bandinfo', info.bandInfo);

			this.bandinfo.push(InfoCard);
		});
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			const section = document.createElement('section');
			section.classList.add('background');

			const mainHeaderContainer = document.createElement('header');
			mainHeaderContainer.id = 'main-header-container';

			const miniHeaderContainer = document.createElement('div');
			miniHeaderContainer.id = 'mini-header-container';

			const title = document.createElement('h1');
			title.classList.add('title');
			title.textContent = 'ABOUT THE BAND';

			const upSection = document.createElement('section');
			upSection.classList.add('up');

			const bandGalleryContainer = document.createElement('label');
			bandGalleryContainer.id = 'band-gallery-container';

			const membersBigContainer = document.createElement('label');
			membersBigContainer.id = 'members-big-container';

			const membersContainer = document.createElement('label');
			membersContainer.id = 'members-container';

			const infoContainer = document.createElement('label');
			infoContainer.id = 'info-container';

			this.shadowRoot.appendChild(section);
			section.appendChild(mainHeaderContainer);
			section.appendChild(miniHeaderContainer);
			section.appendChild(title);
			section.appendChild(upSection);
			section.appendChild(membersBigContainer);
			upSection.appendChild(bandGalleryContainer);
			upSection.appendChild(membersBigContainer);
			membersBigContainer.appendChild(membersContainer);
			section.appendChild(infoContainer);

			this.bandgallerys.forEach((bandgallery) => {
				bandGalleryContainer.appendChild(bandgallery);
			});

			this.members.forEach((member) => {
				membersContainer.appendChild(member);
			});

			this.bandinfo.forEach((info) => {
				infoContainer.appendChild(info);
			});

			const cssAbuelo = this.ownerDocument.createElement('style');
			cssAbuelo.innerHTML = style;
			this.shadowRoot.appendChild(cssAbuelo);

			mainHeaderContainer.appendChild(new components.MainHeader());
			miniHeaderContainer.appendChild(new components.MiniHeader());
		}
	}
}

customElements.define('app-about-the-band', AppAboutTheBand);
export default AppAboutTheBand;
