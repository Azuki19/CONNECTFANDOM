import * as components from '../components/indexPadre';
import style from './register.css';

class AppRegister extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}
	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
			<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
			<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

			<link rel="preconnect" href="https://fonts.googleapis.com">
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
			<link href="https://fonts.googleapis.com/css2?family=Braah+One&family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">

			<section id='background'>
      <section id='container'>
				<section id='image-login-container'></section>
        <section id='register-form-container'></section>
        </section>
			</section>
        `;

			const RegisterFormContainer = this.shadowRoot.getElementById('register-form-container');
			RegisterFormContainer.appendChild(new components.RegisterForm());

			const ImageLoginContainer = this.shadowRoot.getElementById('image-login-container');
			ImageLoginContainer.appendChild(new components.ImageLogin());

			const cssAbuelo = this.ownerDocument.createElement('style');
			cssAbuelo.innerHTML = style;
			this.shadowRoot?.appendChild(cssAbuelo);
		}
	}
}

customElements.define('app-register', AppRegister);
export default AppRegister;
