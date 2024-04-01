(()=>{"use strict";var t={51:(t,e,n)=>{n.d(e,{A:()=>r});var o=n(601),i=n.n(o),a=n(314),s=n.n(a)()(i());s.push([t.id,".artistContainer {\n\tdisplay: flex;\n\n\toverflow-x: auto; /* Habilitar desplazamiento horizontal */\n\tscroll-snap-type: x mandatory; /* Permitir desplazamiento suave entre los posts */\n\t-webkit-overflow-scrolling: touch; /* Habilitar desplazamiento suave en dispositivos iOS */\n}\n\n.artistPost {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin-left: 11px;\n\tmargin-right: 10px;\n\tflex: 0 0 auto; /* Permitir que los posts tengan un ancho flexible */\n\tscroll-snap-align: start; /* Alinear los posts al principio del contenedor al desplazar */\n}\n\nsection {\n\tdisplay: flex;\n\tbackground-color: #e4e4e4;\n\tborder-radius: 70px;\n\tbox-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n\tmargin-bottom: 50px;\n\tmargin-top: 50px;\n\tpadding: 20px;\n\twidth: 500px;\n}\n\n.artistPost > div {\n\tmargin-right: 20px;\n}\n\n.artistPost > div img {\n\twidth: 70px;\n\theight: 70px;\n\tmargin-right: 15px;\n\tobject-fit: cover;\n\tborder-radius: 50%;\n}\n\n.artistPost > div h1 {\n\tfont-size: 20px;\n\tmargin: 5px 0;\n}\n\n.artistPost > div p {\n\tmargin: 1px 0;\n}\n\n.artistPost:last-child {\n\tflex-grow: 1;\n\tmargin-bottom: 5px;\n}\n\n.profile {\n\tdisplay: flex;\n\tflex-direction: row;\n}\n\n.infoProfile {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.infoPost {\n\tmargin-top: 10px;\n\tmargin-left: 10px;\n}\n",""]);const r=s},181:(t,e,n)=>{n.d(e,{A:()=>r});var o=n(601),i=n.n(o),a=n(314),s=n.n(a)()(i());s.push([t.id,"section {\n\tbackground-color: #ffffff;\n\tborder-radius: 50px;\n\tpadding: 20px;\n\tdisplay: flex;\n\tmargin-bottom: 20px;\n\theight: 30px;\n\twidth: 850px;\n}\n\nh2 {\n\topacity: 40%;\n}\n\nsection > div:nth-child(1) {\n\tdisplay: flex;\n\talign-items: center;\n}\n\nsection > div:nth-child(1) img {\n\twidth: 50px;\n\theight: 50px;\n\tborder-radius: 50%;\n\tmargin-right: 10px;\n}\n\nsection > div:nth-child(1) h2 {\n\tmargin: 0;\n}\n\nsection > div:nth-child(2) {\n\tmargin-left: auto;\n\tmargin-right: 20px;\n}\n\n.image-outline {\n\tfont-size: 24px;\n\tcolor: #000000;\n}\n",""]);const r=s},789:(t,e,n)=>{n.d(e,{A:()=>r});var o=n(601),i=n.n(o),a=n(314),s=n.n(a)()(i());s.push([t.id,".sectionmainheader {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 10px 20px;\n\tbackground-color: #ac084d;\n\tcolor: white;\n}\n\n.div1 {\n\tflex-grow: 1;\n}\n\n.div2 ion-icon {\n\tmargin-left: 10px;\n\tfont-size: 24px;\n}\n",""]);const r=s},409:(t,e,n)=>{n.d(e,{A:()=>r});var o=n(601),i=n.n(o),a=n(314),s=n.n(a)()(i());s.push([t.id,".sectionminiheader {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 5px 300px;\n\tbackground-color: #ffffff;\n\tcolor: #ac084d;\n}\n\n.sectionminiheader h4 {\n\tmargin: 0;\n\tfont-size: 16px;\n\ttext-transform: uppercase;\n\tcursor: pointer;\n}\n\n.sectionminiheader h4:hover {\n\ttext-decoration: underline;\n}\n",""]);const r=s},535:(t,e,n)=>{n.d(e,{A:()=>r});var o=n(601),i=n.n(o),a=n(314),s=n.n(a)()(i());s.push([t.id,".bandComponent {\n\tposition: sticky;\n\ttop: 20px; /* Ajusta la distancia desde la parte superior de la ventana */\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tpadding: 20px;\n\tbackground-color: #9e2956;\n\tborder-radius: 8px;\n\tcolor: white;\n\tmax-width: 400px;\n}\n\n.bandImg {\n\twidth: 100%; /* Ajusta la imagen al ancho del contenedor */\n\tmax-width: 300px; /* Ancho máximo de la imagen */\n\tborder-radius: 8px; /* Bordes redondeados */\n\tmargin-bottom: 20px; /* Espacio inferior */\n\tposition: relative; /* Establece posición relativa */\n}\n\n.bandImg::before {\n\tcontent: '';\n\tposition: absolute; /* Establece posición absoluta */\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)); /* Degradado */\n\tborder-radius: 8px; /* Bordes redondeados */\n}\n\n.moreAbout {\n\tfont-size: 14px; /* Tamaño de fuente más pequeño */\n\tmargin-bottom: 10px; /* Espacio inferior */\n}\n\n.textContainer h4 {\n\tfont-size: 28px; /* Tamaño de fuente más grande */\n\tmargin: 0; /* Elimina el margen */\n}\n",""]);const r=s},691:(t,e,n)=>{n.d(e,{A:()=>r});var o=n(601),i=n.n(o),a=n(314),s=n.n(a)()(i());s.push([t.id,'.profileImg {\n\twidth: 50px;\n\theight: 50px;\n\tborder-radius: 50%; /* Para hacer la imagen redonda */\n\tmargin-right: 15px;\n}\n\n.imagePost {\n\twidth: 160px; /* Ancho fijo para la imagen */\n\theight: auto; /* Altura automática para mantener la proporción */\n\tborder-top-left-radius: 8px; /* Borde redondo en la esquina superior izquierda */\n\tborder-bottom-left-radius: 8px; /* Borde redondo en la esquina inferior izquierda */\n}\n\n.userPostProfile {\n\tdisplay: flex;\n\talign-items: center;\n\tbackground-color: transparent; /* Fondo transparente */\n}\n\n#userPostProfile img {\n\tborder-radius: 50%;\n}\n\n.userPostComponent {\n\tdisplay: flex;\n\tflex-direction: column;\n\tborder-radius: 8px;\n\tbox-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n\tmargin-bottom: 20px;\n}\n\n.userPost {\n\tdisplay: flex;\n\tmargin-top: 15px;\n}\n\n.userPostProfileInfo {\n\tflex-grow: 1;\n}\n\n.PostInfo {\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: white; /* Fondo blanco */\n\tborder-radius: 0 8px 8px 0; /* Bordes redondos solo en la esquina superior derecha e inferior derecha */\n\tpadding: 15px; /* Espacio interno */\n\tmax-width: 800px; /* Ancho máximo */\n\toverflow: auto; /* Mostrar barras de desplazamiento si el contenido excede el ancho máximo */\n}\n\n.PostInfo .Inner {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.PostInfo .imagePost {\n\tmargin-right: 0; /* Para que la imagen del post esté pegada al margen izquierdo */\n}\n\n.heart-outline {\n\tcolor: rgb(167, 43, 6);\n}\n\n.up {\n\tdisplay: flex;\n\tflex-direction: row;\n}\n\n.language-outline {\n\tmargin-left: auto; /* Mueve el ícono "language-outline" hacia la derecha */\n}\n',""]);const r=s},647:(t,e,n)=>{n.d(e,{A:()=>r});var o=n(601),i=n.n(o),a=n(314),s=n.n(a)()(i());s.push([t.id,"#artist-posts-section {\n\tdisplay: flex;\n\tflex-direction: row;\n\tflex-wrap: nowrap;\n\tjustify-content: space-around;\n\toverflow: auto; /* Esto hizo la scrollbar */\n}\n\n#postsContainer {\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: transparent;\n\tborder-radius: 8px;\n\tbox-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n\tmargin-bottom: 20px;\n\tpadding: 20px;\n\twidth: 900px;\n\tmargin-left: 30px;\n}\n\n#downpart {\n\tdisplay: flex;\n\tflex-direction: row;\n\tbackground-color: #000000;\n}\n\n.artist-posts-section {\n\tbackground-color: #000000;\n}\n",""]);const r=s},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,i,a){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(o)for(var r=0;r<this.length;r++){var d=this[r][0];null!=d&&(s[d]=!0)}for(var l=0;l<t.length;l++){var c=[].concat(t[l]);o&&s[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),e.push(c))}},e}},601:t=>{t.exports=function(t){return t[1]}}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var a=e[o]={id:o,exports:{}};return t[o](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t,e=n(691);!function(t){t.uid="uid",t.type="type",t.name="name",t.image="image",t.username="username",t.email="email",t.password="password",t.info="info",t.followers="followers",t.titlePost="titlepost",t.infoPost="infopost",t.imagePost="imagepost"}(t||(t={}));class o extends HTMLElement{static get observedAttributes(){return Object.values(t)}attributeChangedCallback(e,n,o){if(null!==o)switch(e){case t.uid:case t.followers:this[e]=parseInt(o);break;default:this[e]=o}this.render()}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var t;this.shadowRoot&&(this.shadowRoot.innerHTML='\n                <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"><\/script>\n                <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"><\/script>\n\n            ');const n=document.createElement("section");n.classList.add("userPostComponent");const o=document.createElement("div");o.id="userPostProfile",o.classList.add("userPostProfile");const i=document.createElement("img");i.classList.add("profileImg"),i.src=this.image;const a=document.createElement("div");a.classList.add("userPostProfileInfo");const s=document.createElement("h4");s.textContent=this.name;const r=document.createElement("strong"),d=document.createElement("h6");d.textContent=this.username,r.appendChild(d),a.appendChild(s),a.appendChild(r),o.appendChild(i),o.appendChild(a);const l=document.createElement("div");l.classList.add("userPost");const c=document.createElement("img");c.classList.add("imagePost"),c.id="imagePost",c.src=this.imagepost;const m=document.createElement("div");m.classList.add("Inner");const p=document.createElement("div");p.classList.add("PostInfo");const u=document.createElement("div");u.classList.add("up");const h=document.createElement("h5");h.textContent=this.titlepost;const g=document.createElement("ion-icon");g.classList.add("language-outline"),g.setAttribute("name","language-outline"),u.appendChild(h),u.appendChild(g),p.appendChild(u);const f=document.createElement("p");f.textContent=this.infopost;const b=document.createElement("div");b.classList.add("buttons");const w=document.createElement("ion-icon");w.classList.add("heart-outline"),w.setAttribute("name","heart-outline");const x=document.createElement("ion-icon");x.setAttribute("name","chatbubble-ellipses-outline"),b.appendChild(w),b.appendChild(x),p.appendChild(f),p.appendChild(b),m.appendChild(p),l.appendChild(c),l.appendChild(m),n.appendChild(o),n.appendChild(l),this.shadowRoot.appendChild(n);const v=this.ownerDocument.createElement("style");v.innerHTML=e.A,null===(t=this.shadowRoot)||void 0===t||t.appendChild(v),w.addEventListener("click",(()=>{"heart"==w.getAttribute("name")?w.setAttribute("name","heart-outline"):w.setAttribute("name","heart")}))}}customElements.define("user-post",o);var i,a=n(51);!function(t){t.uid="uid",t.type="type",t.name="name",t.image="image",t.username="username",t.email="email",t.password="password",t.info="info",t.followers="followers",t.titlePost="titlepost",t.infoPost="infopost",t.imagePost="imagepost"}(i||(i={}));class s extends HTMLElement{static get observedAttributes(){return Object.values(i)}attributeChangedCallback(t,e,n){if(null!==n)switch(t){case i.uid:case i.followers:this[t]=parseInt(n);break;default:this[t]=n}this.render()}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var t;this.shadowRoot&&(this.shadowRoot.innerHTML=`\n        <section class='artistPost'>\n          <div class='profile'>\n            <img class='imgProfile' src="${this.image}" alt="">\n            <div class='infoProfile'>\n              <h1>${this.name}</h1>\n              <p>${this.username}</p>\n            </div>\n          </div>\n\n          <div class='infoPost'>\n            <p>${this.titlepost}</p>\n            <p>${this.infopost}</p>\n          </div>\n        </section>\n      `);const e=this.ownerDocument.createElement("style");e.innerHTML=a.A,null===(t=this.shadowRoot)||void 0===t||t.appendChild(e)}}customElements.define("artist-post",s);var r,d=n(535);!function(t){t.uid="uid",t.bandName="bandname",t.bandImage="bandimage",t.bandInfo="bandinfo"}(r||(r={}));class l extends HTMLElement{static get observedAttributes(){return Object.values(r)}attributeChangedCallback(t,e,n){null!==n&&(t===r.uid?this[t]=parseInt(n):this[t]=n),this.render()}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var t;this.shadowRoot&&(this.shadowRoot.innerHTML=`\n          <section class='bandComponent' id='bandComponent'>\n              <img class='bandImg' src="${this.bandimage}"></img>\n              <div class='textContainer'>\n                <h6 class='moreAbout'>More About...</h6>\n                <div class='textContainer'>\n                    <h4>${this.bandname}</h4>\n              </div>\n\n          </section>\n          `);const e=this.ownerDocument.createElement("style");e.innerHTML=d.A,null===(t=this.shadowRoot)||void 0===t||t.appendChild(e)}}customElements.define("more-about",l);var c=n(409);class m extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var t;this.shadowRoot&&(this.shadowRoot.innerHTML="\n\t\t\t<section class='sectionminiheader'>\n\t\t\t<h4>FEED</h4>\n\t\t\t<h4>ARTISTS</h4>\n\t\t\t<h4>EVENTS</h4>\n\t\t\t<h4>ABOUT THE BAND</h4>\n\t\t\t</section>\n\t\t");const e=this.ownerDocument.createElement("style");e.innerHTML=c.A,null===(t=this.shadowRoot)||void 0===t||t.appendChild(e)}}customElements.define("mini-header",m);const p=m;var u=n(789);class h extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var t;this.shadowRoot&&(this.shadowRoot.innerHTML='\n      <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"><\/script>\n\t\t\t<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"><\/script>\n\n\t\t\t<section class=\'sectionmainheader\'>\n        <div class=\'div1\'>\n\t\t\t    <h1>CONNECT FANDOM</h1>\n        </div>\n        <div class=\'div2\'>\n        <ion-icon name="settings-outline"></ion-icon>\n          <ion-icon name="person-circle-outline"></ion-icon>\n        </div>\n\t\t\t</section>\n\t\t');const e=this.ownerDocument.createElement("style");e.innerHTML=u.A,null===(t=this.shadowRoot)||void 0===t||t.appendChild(e)}}customElements.define("main-header",h);const g=h;var f,b=n(181);!function(t){t.uid="uid",t.image="image",t.type="type"}(f||(f={}));class w extends HTMLElement{static get observedAttributes(){return Object.values(f)}attributeChangedCallback(t,e,n){null!==n&&(t===f.uid?this[t]=parseInt(n):this[t]=n),this.render()}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var t;this.shadowRoot&&(this.shadowRoot.innerHTML=`\n\t\t\t<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"><\/script>\n\t\t\t<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"><\/script>\n\n      <section>\n        <div>\n           <img src="${this.image}" alt="">\n           <h2>Write a post on Connect Fandom!</h2>\n        </div>\n\n           <div>\n           \t<ion-icon class='image-outline' name="image-outline"></ion-icon>\n           </div>\n       </section>\n       `);const e=this.ownerDocument.createElement("style");e.innerHTML=b.A,null===(t=this.shadowRoot)||void 0===t||t.appendChild(e)}}customElements.define("create-post",w);const x=[{id:1,type:"User",name:"Maria Lopez",image:"https://i.pinimg.com/564x/d4/ae/a5/d4aea579422b62be8dbad4420779faf1.jpg",username:"PepitaAzul1",email:"MariaLopez12@gmail.com",password:"Octubre11CMR",info:"1111111",followers:100,post1:{titlePost:"Band CMR",infoPost:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",imagePost:"https://i.pinimg.com/564x/d4/ae/a5/d4aea579422b62be8dbad4420779faf1.jpg"}},{id:2,type:"User",name:"Natalia Mora",image:"https://i.pinimg.com/564x/c0/fd/69/c0fd6900759453ce876a112cb0027d5c.jpg",username:"NatMo02",email:"NataliaMora@gmail.com",password:"Mora123",info:"000000",followers:300,post1:{titlePost:"Boy Band",infoPost:".",imagePost:"https://i.pinimg.com/564x/d4/ae/a5/d4aea579422b62be8dbad4420779faf1.jpg"}},{id:3,type:"User",name:"Jose Montoya",image:"https://i.pinimg.com/564x/55/1c/6a/551c6a9cb66e0d6197278059a845f336.jpg",username:"MontoyaJ",email:"MontoyaJ11@gmail.com",password:"MontoyaFail2",info:"2222222",followers:500,post1:{titlePost:"Band*s",infoPost:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",imagePost:"https://i.pinimg.com/564x/55/1c/6a/551c6a9cb66e0d6197278059a845f336.jpg"}},{id:4,type:"User",name:"Ana Lucia",image:"https://i.pinimg.com/564x/26/03/e7/2603e72dc4855f4ab01e5479d8adc1fb.jpg",username:"Azuki19",email:"AnaLuciaAzuki19@gmail.com",password:"Azuki19LOL",info:"99999999",followers:1e3,post1:{titlePost:"MCR Band",infoPost:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",imagePost:"https://i.pinimg.com/564x/26/03/e7/2603e72dc4855f4ab01e5479d8adc1fb.jpg"}},{id:5,type:"User",name:"Cris Marin",image:"https://i.pinimg.com/564x/9b/8e/e7/9b8ee7fd2c384d74c4d9c95e730075d5.jpg",username:"Mona12",email:"Mona12Cris@gmail.com",password:"MCRmona12",info:"5555555",followers:600,post1:{titlePost:"MCR Band",infoPost:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",imagePost:"https://i.pinimg.com/564x/9b/8e/e7/9b8ee7fd2c384d74c4d9c95e730075d5.jpg"}},{id:6,type:"Artist",name:"Gerard Way",image:"https://www.sopitas.com/wp-content/uploads/2020/04/my-chemical-romance-destacada.jpg",username:"Gerard-Way",email:"gerardwayMCR@gmail.com",password:"gerardway100",info:"00000000",followers:50,post1:{titlePost:"Goodnight",infoPost:"Love to you, eternally. You are all brave and brilliant. Goodnight for now.",imagePost:"https://www.sopitas.com/wp-content/uploads/2020/04/my-chemical-romance-destacada.jpg"}},{id:7,type:"Artist",name:"frnkiero: Party (goth) Dad",image:"https://rollingstone.uol.com.br/media/_versions/frank_iero_cred_mitchell_wojcik_widelg.jpg",username:"FrankIero",email:"FrankIeroMCR@gmail.com",password:"500FrankIero",info:"1111111",followers:90,post1:{titlePost:"🖤🖤🖤",infoPost:"Hell yeah!! “always a good idea to have a few microkorgs laying around!!!” 🖤 nice haul !",imagePost:"https://rollingstone.uol.com.br/media/_versions/frank_iero_cred_mitchell_wojcik_widelg.jpg"}},{id:8,type:"Artist",name:"Mikey Way",image:"https://guitar.com/wp-content/uploads/2023/06/Mikey-Way-hero-image-Fender@2000x1500.jpg",username:"Mikey-Way",email:"MikeyWayMCR@gmail.com",password:"12MikeyWay",info:"1222222",followers:60,post1:{titlePost:"MCR Band",infoPost:"This has been a long time coming. Can’t wait to welcome you all to the world of Electric Century!⚡",imagePost:"https://www.sopitas.com/wp-content/uploads/2020/04/my-chemical-romance-destacada.jpg"}},{id:9,type:"Artist",name:"Ray Toro",image:"https://pbs.twimg.com/profile_images/795850216620441600/wVUeaz0y_400x400.jpg",username:"Ray-Toro",email:"RayToroMCR@gmail.com",password:"RayToro123",info:"13323233",followers:200,post1:{titlePost:"MCR Band",infoPost:"JASNDKANSDK",imagePost:"https://www.sopitas.com/wp-content/uploads/2020/04/my-chemical-romance-destacada.jpg"}}],v=[{id:1,bandName:"MY CHEMICAL ROMANCE",bandImage:"https://pm1.aminoapps.com/7154/e3e685c9781ec3c4fcaff7d5a0f685b1d259e141r1-1242-1540v2_hq.jpg",bandInfo:'Formed in NJ, My Chemical Romance made its debut in 2002 with the independently released album I Brought You My Bullets, You Brought Me Your Love. The band signed to Reprise Records the following year and made its major label debut with 2004’s Three Cheers for Sweet Revenge, now 3x certified Platinum. The album contained the Platinum hit "Im Not Okay (I Promise)," the Gold-certified "Helena," and "The Ghost of You." Rolling Stone hailed the 3x Platinum The Black Parade as one of the top albums of 2006.Lead single “Welcome to the Black Parade” topped both Billboard’s Alternative Songs tally and the UK Official Singles chart and is now 3x Platinum.',bandGallery:{photo1:"https://www.billboard.com/wp-content/uploads/stylus/500264-my_chemical_romance_617_409.jpg?w=617",photo2:"https://cms.kerrang.com/images/_1200x630_crop_center-center_82_none/My-Chemical-Romance-Danger-Days-promo-3.jpg?mtime=1573469727"}},{id:2,bandName:"MY CHEMICAL ROMANCE",bandImage:"https://pm1.aminoapps.com/7154/e3e685c9781ec3c4fcaff7d5a0f685b1d259e141r1-1242-1540v2_hq.jpg",bandInfo:'Formed in NJ, My Chemical Romance made its debut in 2002 with the independently released album I Brought You My Bullets, You Brought Me Your Love. The band signed to Reprise Records the following year and made its major label debut with 2004’s Three Cheers for Sweet Revenge, now 3x certified Platinum. The album contained the Platinum hit "Im Not Okay (I Promise)," the Gold-certified "Helena," and "The Ghost of You." Rolling Stone hailed the 3x Platinum The Black Parade as one of the top albums of 2006.Lead single “Welcome to the Black Parade” topped both Billboard’s Alternative Songs tally and the UK Official Singles chart and is now 3x Platinum.',bandGallery:{photo1:"https://www.billboard.com/wp-content/uploads/stylus/500264-my_chemical_romance_617_409.jpg?w=617",photo2:"https://cms.kerrang.com/images/_1200x630_crop_center-center_82_none/My-Chemical-Romance-Danger-Days-promo-3.jpg?mtime=1573469727"}}];var y=n(647);class P extends HTMLElement{constructor(){super(),this.userpost=[],this.artistpost=[],this.moreabout=[],this.createpost=[],this.attachShadow({mode:"open"}),x.filter((t=>"User"===t.type)).forEach((e=>{const n=this.ownerDocument.createElement("user-post");n.setAttribute(t.uid,String(e.id)),n.setAttribute(t.type,e.type),n.setAttribute(t.name,e.name),n.setAttribute(t.image,e.image),n.setAttribute(t.username,e.username),n.setAttribute(t.email,e.email),n.setAttribute(t.password,e.password),n.setAttribute(t.info,e.info),n.setAttribute(t.followers,String(e.followers)),n.setAttribute(t.titlePost,e.post1.titlePost),n.setAttribute(t.infoPost,e.post1.infoPost),n.setAttribute(t.imagePost,e.post1.imagePost),this.userpost.push(n)})),x.filter((t=>"Artist"===t.type)).forEach((t=>{const e=this.ownerDocument.createElement("artist-post");e.setAttribute(i.uid,String(t.id)),e.setAttribute(i.type,t.type),e.setAttribute(i.name,t.name),e.setAttribute(i.image,t.image),e.setAttribute(i.username,t.username),e.setAttribute(i.email,t.email),e.setAttribute(i.password,t.password),e.setAttribute(i.info,t.info),e.setAttribute(i.followers,String(t.followers)),e.setAttribute(i.titlePost,t.post1.titlePost),e.setAttribute(i.infoPost,t.post1.infoPost),e.setAttribute(i.imagePost,t.post1.imagePost),this.artistpost.push(e)}));const e=v.find((t=>1===t.id));if(e){const t=this.ownerDocument.createElement("more-about");t.setAttribute(r.uid,String(e.id)),t.setAttribute(r.bandName,e.bandName),t.setAttribute(r.bandImage,e.bandImage),this.moreabout.push(t)}const n=x.find((t=>1===t.id));if(n){const t=this.ownerDocument.createElement("create-post");t.setAttribute(f.uid,String(n.id)),t.setAttribute(f.image,n.image),t.setAttribute(f.type,n.type),this.createpost.push(t)}}connectedCallback(){this.render()}render(){var t;if(this.shadowRoot){this.shadowRoot.innerHTML='\n\t\t\t<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"><\/script>\n\t\t\t<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"><\/script>\n\n\t\t\t<header id="main-header-container"></header>\n\t\t\t\t\t\t<div id="mini-header-container"></div>\n            <section\n\t\t\t\t\t\tclass=\'artist-posts-section\' id="artist-posts-section">\n            </section>\n\t\t\t\t\t\t<div id=\'downpart\'>\n\t\t\t\t\t\t<div id="postsContainer">\n\t\t\t\t\t\t\t<section id="create-post-section">\n            \t</section>\n            \t<section id="user-posts-section">\n            \t</section>\n\t\t\t\t\t\t</div>\n            <section id="more-about-section">\n            </section>\n\t\t\t\t\t\t</div>\n        ',this.shadowRoot.getElementById("main-header-container").appendChild(new g),this.shadowRoot.getElementById("mini-header-container").appendChild(new p);const e=this.shadowRoot.getElementById("artist-posts-section"),n=this.shadowRoot.getElementById("user-posts-section"),o=this.shadowRoot.getElementById("more-about-section"),i=this.shadowRoot.getElementById("create-post-section");this.artistpost.forEach((t=>{e.appendChild(t)})),this.userpost.forEach((t=>{n.appendChild(t)})),this.moreabout.forEach((t=>{o.appendChild(t)})),this.createpost.forEach((t=>{i.appendChild(t)}));const a=this.ownerDocument.createElement("style");a.innerHTML=y.A,null===(t=this.shadowRoot)||void 0===t||t.appendChild(a)}}}customElements.define("app-container",P)})()})();