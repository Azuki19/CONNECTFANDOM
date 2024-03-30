(()=>{"use strict";var n={51:(n,t,e)=>{e.d(t,{A:()=>r});var o=e(601),s=e.n(o),i=e(314),a=e.n(i)()(s());a.push([n.id,"section {\n\tdisplay: flex;\n\n\tbackground-color: #aff7f7;\n\tborder-radius: 8px;\n\tbox-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n\tmargin-bottom: 20px;\n\tpadding: 20px;\n\twidth: 500px;\n}\n\nsection > div {\n\tmargin-right: 20px;\n}\n\nsection > div img {\n\twidth: 70px;\n\theight: 70px;\n\tmargin-right: 15px;\n\tobject-fit: cover;\n\tborder-radius: 50%;\n}\n\nsection > div h1 {\n\tfont-size: 20px;\n\tmargin: 5px 0;\n}\n\nsection > div p {\n\tmargin: 1px 0;\n}\n\nsection > div:last-child {\n\tflex-grow: 1;\n}\n\nsection > div:last-child p {\n\tmargin-bottom: 5px;\n}\n",""]);const r=a},181:(n,t,e)=>{e.d(t,{A:()=>r});var o=e(601),s=e.n(o),i=e(314),a=e.n(i)()(s());a.push([n.id,"",""]);const r=a},409:(n,t,e)=>{e.d(t,{A:()=>r});var o=e(601),s=e.n(o),i=e(314),a=e.n(i)()(s());a.push([n.id,"",""]);const r=a},535:(n,t,e)=>{e.d(t,{A:()=>r});var o=e(601),s=e.n(o),i=e(314),a=e.n(i)()(s());a.push([n.id,".bandImg {\n\twidth: 70px;\n\theight: 70px;\n}\n\n.bandComponent {\n\twidth: 500px;\n\theight: 200px;\n}\n\n* {\n\tbackground-color: blueviolet;\n}\n",""]);const r=a},691:(n,t,e)=>{e.d(t,{A:()=>r});var o=e(601),s=e.n(o),i=e(314),a=e.n(i)()(s());a.push([n.id,".profileImg {\n\twidth: 50px;\n\theight: 50px;\n\tborder-radius: 50%; /* Para hacer la imagen redonda */\n\tmargin-right: 15px;\n}\n\n.imagePost {\n\twidth: 70px;\n\theight: 70px;\n\tmargin-right: 15px;\n}\n\n.userPostProfile {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n#userPostProfile img {\n\tborder-radius: 50%;\n}\n\n.userPostComponent {\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: #b62034;\n\tborder-radius: 8px;\n\tbox-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n\tmargin-bottom: 20px;\n\tpadding: 20px;\n}\n\n.userPost {\n\tdisplay: flex;\n\tmargin-top: 15px;\n}\n\n.userPostProfileInfo {\n\tflex-grow: 1;\n}\n\n.PostInfo {\n\tflex-grow: 1;\n}\n",""]);const r=a},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,s,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var r=0;r<this.length;r++){var d=this[r][0];null!=d&&(a[d]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),s&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=s):l[4]="".concat(s)),t.push(l))}},t}},601:n=>{n.exports=function(n){return n[1]}}},t={};function e(o){var s=t[o];if(void 0!==s)return s.exports;var i=t[o]={id:o,exports:{}};return n[o](i,i.exports,e),i.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n,t=e(691);!function(n){n.uid="uid",n.type="type",n.name="name",n.image="image",n.username="username",n.email="email",n.password="password",n.info="info",n.followers="followers",n.titlePost="titlepost",n.infoPost="infopost",n.imagePost="imagepost"}(n||(n={}));class o extends HTMLElement{static get observedAttributes(){return Object.values(n)}attributeChangedCallback(t,e,o){if(null!==o)switch(t){case n.uid:case n.followers:this[t]=parseInt(o);break;default:this[t]=o}this.render()}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var n;this.shadowRoot&&(this.shadowRoot.innerHTML=`\n          <section class='userPostComponent'>\n            <div id='userPostProfile' class='userPostProfile'>\n              <img class='profileImg' src="${this.image}"></img>\n              <div class='userPostProfileInfo'>\n                <h4>${this.name}</h4>\n                <strong><h6>${this.username}</h6></strong>\n              </div>\n            </div>\n            <div class='userPost'>\n              <img class='imagePost' src="${this.imagepost}"></img>\n              <div class='PostInfo'>\n                <h5>${this.titlepost}</h5>\n                <p>${this.infopost}</p>\n              </div>\n            </div>\n          </section>\n          `);const e=this.ownerDocument.createElement("style");e.innerHTML=t.A,null===(n=this.shadowRoot)||void 0===n||n.appendChild(e)}}customElements.define("user-post",o);var s,i=e(51);!function(n){n.uid="uid",n.type="type",n.name="name",n.image="image",n.username="username",n.email="email",n.password="password",n.info="info",n.followers="followers",n.titlePost="titlepost",n.infoPost="infopost",n.imagePost="imagepost"}(s||(s={}));class a extends HTMLElement{static get observedAttributes(){return Object.values(s)}attributeChangedCallback(n,t,e){if(null!==e)switch(n){case s.uid:case s.followers:this[n]=parseInt(e);break;default:this[n]=e}this.render()}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var n;this.shadowRoot&&(this.shadowRoot.innerHTML=`\n        <section>\n          <div>\n             <img src="${this.image}" alt="">\n             <h1>${this.name}</h1>\n             <p>${this.username}</p>\n          </div>\n\n          <div>\n              <p>${this.titlepost}</p>\n              <p>${this.infopost}</p>\n          </div>\n         </section>\n         `);const t=this.ownerDocument.createElement("style");t.innerHTML=i.A,null===(n=this.shadowRoot)||void 0===n||n.appendChild(t)}}customElements.define("artist-post",a);var r,d=e(535);!function(n){n.uid="uid",n.bandName="bandname",n.bandImage="bandimage",n.bandInfo="bandinfo"}(r||(r={}));class c extends HTMLElement{static get observedAttributes(){return Object.values(r)}attributeChangedCallback(n,t,e){null!==e&&(n===r.uid?this[n]=parseInt(e):this[n]=e),this.render()}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var n;this.shadowRoot&&(this.shadowRoot.innerHTML=`\n          <section class='bandComponent' id='bandComponent'>\n              <img class='bandImg' src="${this.bandimage}"></img>\n              <div class='textContainer'>\n                <h6 class='moreAbout'>More About...</h6>\n                <div class='textContainer'>\n                    <h4>${this.bandname}</h4>\n              </div>\n\n          </section>\n          `);const t=this.ownerDocument.createElement("style");t.innerHTML=d.A,null===(n=this.shadowRoot)||void 0===n||n.appendChild(t)}}customElements.define("more-about",c);var l=e(409);class h extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var n;this.shadowRoot&&(this.shadowRoot.innerHTML="\n\t\t\t<section class='sectionminiheader'>\n\t\t\t<p>FANDOOOOOOOOOOM</p>\n\t\t\t</section>\n\t\t");const t=this.ownerDocument.createElement("style");t.innerHTML=l.A,null===(n=this.shadowRoot)||void 0===n||n.appendChild(t)}}customElements.define("mini-header",h);var p,u=e(181);!function(n){n.uid="uid",n.image="image",n.type="type"}(p||(p={}));class m extends HTMLElement{static get observedAttributes(){return Object.values(p)}attributeChangedCallback(n,t,e){null!==e&&(n===p.uid?this[n]=parseInt(e):this[n]=e),this.render()}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var n;this.shadowRoot&&(this.shadowRoot.innerHTML=`\n      <section>\n        <div>\n           <img src="${this.image}" alt="">\n           <h2>Write a post on Connect Fandom!</h2>\n        </div>\n\n           <div>\n           <i class="fa-regular fa-image"></i>\n           </div>\n       </section>\n       `);const t=this.ownerDocument.createElement("style");t.innerHTML=u.A,null===(n=this.shadowRoot)||void 0===n||n.appendChild(t)}}customElements.define("create-post",m),HTMLElement})()})();