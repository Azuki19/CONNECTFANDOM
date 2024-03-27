(() => {
	'use strict';
	var t = {
			51: (t, e, o) => {
				o.d(e, { A: () => r });
				var s = o(601),
					a = o.n(s),
					n = o(314),
					i = o.n(n)()(a());
				i.push([t.id, '', '']);
				const r = i;
			},
			535: (t, e, o) => {
				o.d(e, { A: () => r });
				var s = o(601),
					a = o.n(s),
					n = o(314),
					i = o.n(n)()(a());
				i.push([t.id, '', '']);
				const r = i;
			},
			691: (t, e, o) => {
				o.d(e, { A: () => r });
				var s = o(601),
					a = o.n(s),
					n = o(314),
					i = o.n(n)()(a());
				i.push([
					t.id,
					'.profileImg {\n\twidth: 50px;\n\theight: 50px;\n\tborder-radius: 50%; /* Para hacer la imagen redonda */\n\tmargin-right: 15px;\n}\n\n.imagePost {\n\twidth: 70px;\n\theight: 70px;\n\tmargin-right: 15px;\n}\n\n.userPostProfile {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n#userPostProfile img {\n\tborder-radius: 50%;\n}\n\n.userPostComponent {\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: #b62034;\n\tborder-radius: 8px;\n\tbox-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n\tmargin-bottom: 20px;\n\tpadding: 20px;\n}\n\n.userPost {\n\tdisplay: flex;\n\tmargin-top: 15px;\n}\n\n.userPostProfileInfo {\n\tflex-grow: 1;\n}\n\n.PostInfo {\n\tflex-grow: 1;\n}\n',
					'',
				]);
				const r = i;
			},
			314: (t) => {
				t.exports = function (t) {
					var e = [];
					return (
						(e.toString = function () {
							return this.map(function (e) {
								var o = '',
									s = void 0 !== e[5];
								return (
									e[4] && (o += '@supports ('.concat(e[4], ') {')),
									e[2] && (o += '@media '.concat(e[2], ' {')),
									s && (o += '@layer'.concat(e[5].length > 0 ? ' '.concat(e[5]) : '', ' {')),
									(o += t(e)),
									s && (o += '}'),
									e[2] && (o += '}'),
									e[4] && (o += '}'),
									o
								);
							}).join('');
						}),
						(e.i = function (t, o, s, a, n) {
							'string' == typeof t && (t = [[null, t, void 0]]);
							var i = {};
							if (s)
								for (var r = 0; r < this.length; r++) {
									var d = this[r][0];
									null != d && (i[d] = !0);
								}
							for (var l = 0; l < t.length; l++) {
								var m = [].concat(t[l]);
								(s && i[m[0]]) ||
									(void 0 !== n &&
										(void 0 === m[5] ||
											(m[1] = '@layer'.concat(m[5].length > 0 ? ' '.concat(m[5]) : '', ' {').concat(m[1], '}')),
										(m[5] = n)),
									o && (m[2] ? ((m[1] = '@media '.concat(m[2], ' {').concat(m[1], '}')), (m[2] = o)) : (m[2] = o)),
									a &&
										(m[4]
											? ((m[1] = '@supports ('.concat(m[4], ') {').concat(m[1], '}')), (m[4] = a))
											: (m[4] = ''.concat(a))),
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
	function o(s) {
		var a = e[s];
		if (void 0 !== a) return a.exports;
		var n = (e[s] = { id: s, exports: {} });
		return t[s](n, n.exports, o), n.exports;
	}
	(o.n = (t) => {
		var e = t && t.__esModule ? () => t.default : () => t;
		return o.d(e, { a: e }), e;
	}),
		(o.d = (t, e) => {
			for (var s in e) o.o(e, s) && !o.o(t, s) && Object.defineProperty(t, s, { enumerable: !0, get: e[s] });
		}),
		(o.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
		(() => {
			var t,
				e = o(691);
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
			class s extends HTMLElement {
				static get observedAttributes() {
					return Object.values(t);
				}
				attributeChangedCallback(e, o, s) {
					if (null !== s)
						switch (e) {
							case t.uid:
							case t.followers:
								this[e] = parseInt(s);
								break;
							default:
								this[e] = s;
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
					const o = this.ownerDocument.createElement('style');
					(o.innerHTML = e.A), null === (t = this.shadowRoot) || void 0 === t || t.appendChild(o);
				}
			}
			customElements.define('user-post', s);
			var a,
				n = o(51);
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
			})(a || (a = {}));
			class i extends HTMLElement {
				static get observedAttributes() {
					return Object.values(a);
				}
				attributeChangedCallback(t, e, o) {
					if (null !== o)
						switch (t) {
							case a.uid:
							case a.followers:
								this[t] = parseInt(o);
								break;
							default:
								this[t] = o;
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
						(this.shadowRoot.innerHTML = `\n        <section>\n          <div>\n             <img src="${this.image}" alt="">\n             <h1>${this.name}</h1>\n             <p>${this.username}</p>\n          </div>\n\n             <div>\n                <p>${this.titlepost}</p>\n                <p>${this.infopost}</p>\n                <p>${this.imagepost}</p>\n             </div>\n         </section>\n         `);
					const e = this.ownerDocument.createElement('style');
					(e.innerHTML = n.A), null === (t = this.shadowRoot) || void 0 === t || t.appendChild(e);
				}
			}
			customElements.define('artist-post', i);
			var r,
				d = o(535);
			!(function (t) {
				(t.uid = 'uid'), (t.bandName = 'bandname'), (t.bandImage = 'bandimage'), (t.bandInfo = 'bandinfo');
			})(r || (r = {}));
			class l extends HTMLElement {
				static get observedAttributes() {
					return Object.values(r);
				}
				attributeChangedCallback(t, e, o) {
					null !== o && (t === r.uid ? (this[t] = parseInt(o)) : (this[t] = o)), this.render();
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
			customElements.define('more-about', l);
			const m = [
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
						post1: { titlePost: 'MCR Band', infoPost: 'oojooooojjjj', imagePost: 'bubjbjbjj' },
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
						post1: { titlePost: 'MCR Band', infoPost: 'NKNKMKM', imagePost: 'JNIKNKMKM' },
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
						post1: { titlePost: 'MCR Band', infoPost: 'NJNINKN', imagePost: 'HBJBKBNN' },
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
						post1: { titlePost: 'MCR Band', infoPost: 'JASNDKANSDK', imagePost: 'ASKDOSJD' },
					},
				],
				c = [
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
				];
			class p extends HTMLElement {
				constructor() {
					super(),
						(this.userpost = []),
						(this.artistpost = []),
						(this.moreabout = []),
						this.attachShadow({ mode: 'open' }),
						m
							.filter((t) => 'User' === t.type)
							.forEach((e) => {
								const o = this.ownerDocument.createElement('user-post');
								o.setAttribute(t.uid, String(e.id)),
									o.setAttribute(t.type, e.type),
									o.setAttribute(t.name, e.name),
									o.setAttribute(t.image, e.image),
									o.setAttribute(t.username, e.username),
									o.setAttribute(t.email, e.email),
									o.setAttribute(t.password, e.password),
									o.setAttribute(t.info, e.info),
									o.setAttribute(t.followers, String(e.followers)),
									o.setAttribute(t.titlePost, e.post1.titlePost),
									o.setAttribute(t.infoPost, e.post1.infoPost),
									o.setAttribute(t.imagePost, e.post1.imagePost),
									this.userpost.push(o);
							}),
						m.forEach((t) => {
							const e = this.ownerDocument.createElement('artist-post');
							e.setAttribute(a.uid, String(t.id)),
								e.setAttribute(a.type, t.type),
								e.setAttribute(a.name, t.name),
								e.setAttribute(a.image, t.image),
								e.setAttribute(a.username, t.username),
								e.setAttribute(a.email, t.email),
								e.setAttribute(a.password, t.password),
								e.setAttribute(a.info, t.info),
								e.setAttribute(a.followers, String(t.followers)),
								e.setAttribute(a.titlePost, t.post1.titlePost),
								e.setAttribute(a.infoPost, t.post1.infoPost),
								e.setAttribute(a.imagePost, t.post1.imagePost),
								this.artistpost.push(e);
						}),
						c.forEach((t) => {
							const e = this.ownerDocument.createElement('more-about');
							e.setAttribute(r.uid, String(t.id)),
								e.setAttribute(r.bandName, t.bandName),
								e.setAttribute(r.bandImage, t.bandImage),
								this.artistpost.push(e);
						});
				}
				connectedCallback() {
					this.render();
				}
				render() {
					this.shadowRoot &&
						((this.shadowRoot.innerHTML = '\n\t\t\t<header> CONNECT FANDOM </header>\n            '),
						this.artistpost.forEach((t) => {
							var e;
							null === (e = this.shadowRoot) || void 0 === e || e.appendChild(t);
						}),
						this.userpost.forEach((t) => {
							var e;
							null === (e = this.shadowRoot) || void 0 === e || e.appendChild(t);
						}),
						this.moreabout.forEach((t) => {
							var e;
							null === (e = this.shadowRoot) || void 0 === e || e.appendChild(t);
						}));
				}
			}
			customElements.define('app-container', p);
		})();
})();
