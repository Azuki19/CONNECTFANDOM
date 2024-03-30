(() => {
	'use strict';
	var t = {
			51: (t, e, n) => {
				n.d(e, { A: () => r });
				var o = n(601),
					s = n.n(o),
					i = n(314),
					a = n.n(i)()(s());
				a.push([
					t.id,
					'section {\n\tdisplay: flex;\n\n\tbackground-color: #aff7f7;\n\tborder-radius: 8px;\n\tbox-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n\tmargin-bottom: 20px;\n\tpadding: 20px;\n\twidth: 500px;\n}\n\nsection > div {\n\tmargin-right: 20px;\n}\n\nsection > div img {\n\twidth: 70px;\n\theight: 70px;\n\tmargin-right: 15px;\n\tobject-fit: cover;\n\tborder-radius: 50%;\n}\n\nsection > div h1 {\n\tfont-size: 20px;\n\tmargin: 5px 0;\n}\n\nsection > div p {\n\tmargin: 1px 0;\n}\n\nsection > div:last-child {\n\tflex-grow: 1;\n}\n\nsection > div:last-child p {\n\tmargin-bottom: 5px;\n}\n',
					'',
				]);
				const r = a;
			},
			181: (t, e, n) => {
				n.d(e, { A: () => r });
				var o = n(601),
					s = n.n(o),
					i = n(314),
					a = n.n(i)()(s());
				a.push([t.id, '', '']);
				const r = a;
			},
			409: (t, e, n) => {
				n.d(e, { A: () => r });
				var o = n(601),
					s = n.n(o),
					i = n(314),
					a = n.n(i)()(s());
				a.push([t.id, '', '']);
				const r = a;
			},
			535: (t, e, n) => {
				n.d(e, { A: () => r });
				var o = n(601),
					s = n.n(o),
					i = n(314),
					a = n.n(i)()(s());
				a.push([
					t.id,
					'.bandImg {\n\twidth: 70px;\n\theight: 70px;\n}\n\n.bandComponent {\n\twidth: 500px;\n\theight: 200px;\n}\n\n* {\n\tbackground-color: blueviolet;\n}\n',
					'',
				]);
				const r = a;
			},
			691: (t, e, n) => {
				n.d(e, { A: () => r });
				var o = n(601),
					s = n.n(o),
					i = n(314),
					a = n.n(i)()(s());
				a.push([
					t.id,
					'.profileImg {\n\twidth: 50px;\n\theight: 50px;\n\tborder-radius: 50%; /* Para hacer la imagen redonda */\n\tmargin-right: 15px;\n}\n\n.imagePost {\n\twidth: 70px;\n\theight: 70px;\n\tmargin-right: 15px;\n}\n\n.userPostProfile {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n#userPostProfile img {\n\tborder-radius: 50%;\n}\n\n.userPostComponent {\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: #b62034;\n\tborder-radius: 8px;\n\tbox-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n\tmargin-bottom: 20px;\n\tpadding: 20px;\n}\n\n.userPost {\n\tdisplay: flex;\n\tmargin-top: 15px;\n}\n\n.userPostProfileInfo {\n\tflex-grow: 1;\n}\n\n.PostInfo {\n\tflex-grow: 1;\n}\n',
					'',
				]);
				const r = a;
			},
			314: (t) => {
				t.exports = function (t) {
					var e = [];
					return (
						(e.toString = function () {
							return this.map(function (e) {
								var n = '',
									o = void 0 !== e[5];
								return (
									e[4] && (n += '@supports ('.concat(e[4], ') {')),
									e[2] && (n += '@media '.concat(e[2], ' {')),
									o && (n += '@layer'.concat(e[5].length > 0 ? ' '.concat(e[5]) : '', ' {')),
									(n += t(e)),
									o && (n += '}'),
									e[2] && (n += '}'),
									e[4] && (n += '}'),
									n
								);
							}).join('');
						}),
						(e.i = function (t, n, o, s, i) {
							'string' == typeof t && (t = [[null, t, void 0]]);
							var a = {};
							if (o)
								for (var r = 0; r < this.length; r++) {
									var d = this[r][0];
									null != d && (a[d] = !0);
								}
							for (var c = 0; c < t.length; c++) {
								var m = [].concat(t[c]);
								(o && a[m[0]]) ||
									(void 0 !== i &&
										(void 0 === m[5] ||
											(m[1] = '@layer'.concat(m[5].length > 0 ? ' '.concat(m[5]) : '', ' {').concat(m[1], '}')),
										(m[5] = i)),
									n && (m[2] ? ((m[1] = '@media '.concat(m[2], ' {').concat(m[1], '}')), (m[2] = n)) : (m[2] = n)),
									s &&
										(m[4]
											? ((m[1] = '@supports ('.concat(m[4], ') {').concat(m[1], '}')), (m[4] = s))
											: (m[4] = ''.concat(s))),
									e.push(m));
							}
						}),
						e
					);
				};
			},
			601: (t) => {
				t.exports = function (t) {
					return t[1];
				};
			},
		},
		e = {};
	function n(o) {
		var s = e[o];
		if (void 0 !== s) return s.exports;
		var i = (e[o] = { id: o, exports: {} });
		return t[o](i, i.exports, n), i.exports;
	}
	(n.n = (t) => {
		var e = t && t.__esModule ? () => t.default : () => t;
		return n.d(e, { a: e }), e;
	}),
		(n.d = (t, e) => {
			for (var o in e) n.o(e, o) && !n.o(t, o) && Object.defineProperty(t, o, { enumerable: !0, get: e[o] });
		}),
		(n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
		(() => {
			var t,
				e = n(691);
			!(function (t) {
				(t.uid = 'uid'),
					(t.type = 'type'),
					(t.name = 'name'),
					(t.image = 'image'),
					(t.username = 'username'),
					(t.email = 'email'),
					(t.password = 'password'),
					(t.info = 'info'),
					(t.followers = 'followers'),
					(t.titlePost = 'titlepost'),
					(t.infoPost = 'infopost'),
					(t.imagePost = 'imagepost');
			})(t || (t = {}));
			class o extends HTMLElement {
				static get observedAttributes() {
					return Object.values(t);
				}
				attributeChangedCallback(e, n, o) {
					if (null !== o)
						switch (e) {
							case t.uid:
							case t.followers:
								this[e] = parseInt(o);
								break;
							default:
								this[e] = o;
						}
					this.render();
				}
				constructor() {
					super(), this.attachShadow({ mode: 'open' });
				}
				connectedCallback() {
					this.render();
				}
				render() {
					var t;
					this.shadowRoot &&
						(this.shadowRoot.innerHTML = `\n          <section class='userPostComponent'>\n            <div id='userPostProfile' class='userPostProfile'>\n              <img class='profileImg' src="${this.image}"></img>\n              <div class='userPostProfileInfo'>\n                <h4>${this.name}</h4>\n                <strong><h6>${this.username}</h6></strong>\n              </div>\n            </div>\n            <div class='userPost'>\n              <img class='imagePost' src="${this.imagepost}"></img>\n              <div class='PostInfo'>\n                <h5>${this.titlepost}</h5>\n                <p>${this.infopost}</p>\n              </div>\n            </div>\n          </section>\n          `);
					const n = this.ownerDocument.createElement('style');
					(n.innerHTML = e.A), null === (t = this.shadowRoot) || void 0 === t || t.appendChild(n);
				}
			}
			customElements.define('user-post', o);
			var s,
				i = n(51);
			!(function (t) {
				(t.uid = 'uid'),
					(t.type = 'type'),
					(t.name = 'name'),
					(t.image = 'image'),
					(t.username = 'username'),
					(t.email = 'email'),
					(t.password = 'password'),
					(t.info = 'info'),
					(t.followers = 'followers'),
					(t.titlePost = 'titlepost'),
					(t.infoPost = 'infopost'),
					(t.imagePost = 'imagepost');
			})(s || (s = {}));
			class a extends HTMLElement {
				static get observedAttributes() {
					return Object.values(s);
				}
				attributeChangedCallback(t, e, n) {
					if (null !== n)
						switch (t) {
							case s.uid:
							case s.followers:
								this[t] = parseInt(n);
								break;
							default:
								this[t] = n;
						}
					this.render();
				}
				constructor() {
					super(), this.attachShadow({ mode: 'open' });
				}
				connectedCallback() {
					this.render();
				}
				render() {
					var t;
					this.shadowRoot &&
						(this.shadowRoot.innerHTML = `\n        <section>\n          <div>\n             <img src="${this.image}" alt="">\n             <h1>${this.name}</h1>\n             <p>${this.username}</p>\n          </div>\n\n          <div>\n              <p>${this.titlepost}</p>\n              <p>${this.infopost}</p>\n          </div>\n         </section>\n         `);
					const e = this.ownerDocument.createElement('style');
					(e.innerHTML = i.A), null === (t = this.shadowRoot) || void 0 === t || t.appendChild(e);
				}
			}
			customElements.define('artist-post', a);
			var r,
				d = n(535);
			!(function (t) {
				(t.uid = 'uid'), (t.bandName = 'bandname'), (t.bandImage = 'bandimage'), (t.bandInfo = 'bandinfo');
			})(r || (r = {}));
			class c extends HTMLElement {
				static get observedAttributes() {
					return Object.values(r);
				}
				attributeChangedCallback(t, e, n) {
					null !== n && (t === r.uid ? (this[t] = parseInt(n)) : (this[t] = n)), this.render();
				}
				constructor() {
					super(), this.attachShadow({ mode: 'open' });
				}
				connectedCallback() {
					this.render();
				}
				render() {
					var t;
					this.shadowRoot &&
						(this.shadowRoot.innerHTML = `\n          <section class='bandComponent' id='bandComponent'>\n              <img class='bandImg' src="${this.bandimage}"></img>\n              <div class='textContainer'>\n                <h6 class='moreAbout'>More About...</h6>\n                <div class='textContainer'>\n                    <h4>${this.bandname}</h4>\n              </div>\n\n          </section>\n          `);
					const e = this.ownerDocument.createElement('style');
					(e.innerHTML = d.A), null === (t = this.shadowRoot) || void 0 === t || t.appendChild(e);
				}
			}
			customElements.define('more-about', c);
			var m = n(409);
			class l extends HTMLElement {
				constructor() {
					super(), this.attachShadow({ mode: 'open' });
				}
				connectedCallback() {
					this.render();
				}
				render() {
					var t;
					this.shadowRoot &&
						(this.shadowRoot.innerHTML =
							"\n\t\t\t<section class='sectionminiheader'>\n\t\t\t<p>FANDOOOOOOOOOOM</p>\n\t\t\t</section>\n\t\t");
					const e = this.ownerDocument.createElement('style');
					(e.innerHTML = m.A), null === (t = this.shadowRoot) || void 0 === t || t.appendChild(e);
				}
			}
			customElements.define('mini-header', l);
			const p = l;
			var h,
				u = n(181);
			!(function (t) {
				(t.uid = 'uid'), (t.image = 'image'), (t.type = 'type');
			})(h || (h = {}));
			class g extends HTMLElement {
				static get observedAttributes() {
					return Object.values(h);
				}
				attributeChangedCallback(t, e, n) {
					null !== n && (t === h.uid ? (this[t] = parseInt(n)) : (this[t] = n)), this.render();
				}
				constructor() {
					super(), this.attachShadow({ mode: 'open' });
				}
				connectedCallback() {
					this.render();
				}
				render() {
					var t;
					this.shadowRoot &&
						(this.shadowRoot.innerHTML = `\n      <section>\n        <div>\n           <img src="${this.image}" alt="">\n           <h2>Write a post on Connect Fandom!</h2>\n        </div>\n\n           <div>\n           <i class="fa-regular fa-image"></i>\n           </div>\n       </section>\n       `);
					const e = this.ownerDocument.createElement('style');
					(e.innerHTML = u.A), null === (t = this.shadowRoot) || void 0 === t || t.appendChild(e);
				}
			}
			customElements.define('create-post', g);
			const f = [
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
							infoPost: 'llll',
							imagePost: 'https://i.pinimg.com/564x/d4/ae/a5/d4aea579422b62be8dbad4420779faf1.jpg',
						},
					},
					{
						id: 2,
						type: 'User',
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
							infoPost: 'Sslsdas',
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
						followers: 1e3,
						post1: {
							titlePost: 'MCR Band',
							infoPost: 'andjnasjd',
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
							infoPost: 'Loveeeeee',
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
						followers: 50,
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
						followers: 90,
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
						followers: 60,
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
						followers: 200,
						post1: {
							titlePost: 'MCR Band',
							infoPost: 'JASNDKANSDK',
							imagePost: 'https://www.sopitas.com/wp-content/uploads/2020/04/my-chemical-romance-destacada.jpg',
						},
					},
				],
				b = [
					{
						id: 1,
						bandName: 'MY CHEMICAL ROMANCE',
						bandImage: 'https://pm1.aminoapps.com/7154/e3e685c9781ec3c4fcaff7d5a0f685b1d259e141r1-1242-1540v2_hq.jpg',
						bandInfo:
							'Formed in NJ, My Chemical Romance made its debut in 2002 with the independently released album I Brought You My Bullets, You Brought Me Your Love. The band signed to Reprise Records the following year and made its major label debut with 2004’s Three Cheers for Sweet Revenge, now 3x certified Platinum. The album contained the Platinum hit "Im Not Okay (I Promise)," the Gold-certified "Helena," and "The Ghost of You." Rolling Stone hailed the 3x Platinum The Black Parade as one of the top albums of 2006.Lead single “Welcome to the Black Parade” topped both Billboard’s Alternative Songs tally and the UK Official Singles chart and is now 3x Platinum.',
						bandGallery: {
							photo1:
								'https://www.billboard.com/wp-content/uploads/stylus/500264-my_chemical_romance_617_409.jpg?w=617',
							photo2:
								'https://cms.kerrang.com/images/_1200x630_crop_center-center_82_none/My-Chemical-Romance-Danger-Days-promo-3.jpg?mtime=1573469727',
						},
					},
					{
						id: 2,
						bandName: 'MY CHEMICAL ROMANCE',
						bandImage: 'https://pm1.aminoapps.com/7154/e3e685c9781ec3c4fcaff7d5a0f685b1d259e141r1-1242-1540v2_hq.jpg',
						bandInfo:
							'Formed in NJ, My Chemical Romance made its debut in 2002 with the independently released album I Brought You My Bullets, You Brought Me Your Love. The band signed to Reprise Records the following year and made its major label debut with 2004’s Three Cheers for Sweet Revenge, now 3x certified Platinum. The album contained the Platinum hit "Im Not Okay (I Promise)," the Gold-certified "Helena," and "The Ghost of You." Rolling Stone hailed the 3x Platinum The Black Parade as one of the top albums of 2006.Lead single “Welcome to the Black Parade” topped both Billboard’s Alternative Songs tally and the UK Official Singles chart and is now 3x Platinum.',
						bandGallery: {
							photo1:
								'https://www.billboard.com/wp-content/uploads/stylus/500264-my_chemical_romance_617_409.jpg?w=617',
							photo2:
								'https://cms.kerrang.com/images/_1200x630_crop_center-center_82_none/My-Chemical-Romance-Danger-Days-promo-3.jpg?mtime=1573469727',
						},
					},
				];
			class w extends HTMLElement {
				constructor() {
					super(),
						(this.userpost = []),
						(this.artistpost = []),
						(this.moreabout = []),
						(this.createpost = []),
						this.attachShadow({ mode: 'open' }),
						f
							.filter((t) => 'User' === t.type)
							.forEach((e) => {
								const n = this.ownerDocument.createElement('user-post');
								n.setAttribute(t.uid, String(e.id)),
									n.setAttribute(t.type, e.type),
									n.setAttribute(t.name, e.name),
									n.setAttribute(t.image, e.image),
									n.setAttribute(t.username, e.username),
									n.setAttribute(t.email, e.email),
									n.setAttribute(t.password, e.password),
									n.setAttribute(t.info, e.info),
									n.setAttribute(t.followers, String(e.followers)),
									n.setAttribute(t.titlePost, e.post1.titlePost),
									n.setAttribute(t.infoPost, e.post1.infoPost),
									n.setAttribute(t.imagePost, e.post1.imagePost),
									this.userpost.push(n);
							}),
						f
							.filter((t) => 'Artist' === t.type)
							.forEach((t) => {
								const e = this.ownerDocument.createElement('artist-post');
								e.setAttribute(s.uid, String(t.id)),
									e.setAttribute(s.type, t.type),
									e.setAttribute(s.name, t.name),
									e.setAttribute(s.image, t.image),
									e.setAttribute(s.username, t.username),
									e.setAttribute(s.email, t.email),
									e.setAttribute(s.password, t.password),
									e.setAttribute(s.info, t.info),
									e.setAttribute(s.followers, String(t.followers)),
									e.setAttribute(s.titlePost, t.post1.titlePost),
									e.setAttribute(s.infoPost, t.post1.infoPost),
									e.setAttribute(s.imagePost, t.post1.imagePost),
									this.artistpost.push(e);
							});
					const e = b.find((t) => 1 === t.id);
					if (e) {
						const t = this.ownerDocument.createElement('more-about');
						t.setAttribute(r.uid, String(e.id)),
							t.setAttribute(r.bandName, e.bandName),
							t.setAttribute(r.bandImage, e.bandImage),
							this.moreabout.push(t);
					}
					const n = f.find((t) => 1 === t.id);
					if (n) {
						const t = this.ownerDocument.createElement('create-post');
						t.setAttribute(h.uid, String(n.id)),
							t.setAttribute(h.image, n.image),
							t.setAttribute(h.type, n.type),
							this.createpost.push(t);
					}
				}
				connectedCallback() {
					this.render();
				}
				render() {
					this.shadowRoot &&
						((this.shadowRoot.innerHTML =
							'\n            <header> CONNECT FANDOM </header>\n\t\t\t\t\t\t<div id="mini-header-container"></div>\n            <section id="artist-posts-section">\n            </section>\n\t\t\t\t\t\t<div id="a">\n\t\t\t\t\t\t<section id="create-post-section">\n            </section>\n            <section id="user-posts-section">\n            </section>\n\t\t\t\t\t\t</div>\n            <section id="more-about-section">\n            </section>\n        '),
						this.shadowRoot.getElementById('mini-header-container').appendChild(new p()),
						this.shadowRoot.getElementById('artist-posts-section'),
						this.shadowRoot.getElementById('user-posts-section'),
						this.shadowRoot.getElementById('more-about-section'),
						this.shadowRoot.getElementById('create-post-section'));
				}
			}
			customElements.define('app-container', w);
		})();
})();
