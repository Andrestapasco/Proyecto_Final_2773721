//Model
class UserModel {
    constructor() {
    this.users = [ // Simulación de una base de datos de usuarios con emails y contraseñas
        { email: 'admin@example.com', password: 'admin123' },
        { email: 'user@example.com', password: 'user456' },
    ];
    }

    authenticate(email, password) { //autenticar al usuario
    return this.users.find(user => user.email === email && user.password === password);
    }
}


//View
class LoginView {
    constructor() {

    this.emailInput = document.getElementById('email');
    this.passwordInput = document.getElementById('password');
    this.loginButton = document.getElementById('buttonlogin');
    this.message = document.createElement('div'); 
    document.querySelector('.form-content').appendChild(this.message);
    }
    
    showMessage(msg) {// mensaje interfaz
    this.message.textContent = msg;
    this.message.style.color = 'orange';
    }
    getUserInput() { // Método para obtener los datos ingresados por el usuario
    return {
        email: this.emailInput.value,
        password: this.passwordInput.value
    };
    }
    onLogin(handler) { // Método para gestionar el evento de login
    this.loginButton.addEventListener('click', (event) => {
        event.preventDefault();
        handler();
    });
    }
}

  // Controller
class LoginController {
    constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.onLogin(this.handleLogin.bind(this));// Configurar la vista para manejar el evento de login
    }

    handleLogin() {
    const { email, password } = this.view.getUserInput();
    
    if (this.model.authenticate(email, password)) {
        this.view.showMessage('Inicio de sesión exitoso!');
    } else {
        this.view.showMessage('Correo o contraseña incorrectos.');
    }
    }
}
  // Inicialización del MVC
const model = new UserModel();
const view = new LoginView();
const controller = new LoginController(model, view);
