// Modelo
class MenuModel {
    constructor() {
        this.menuOptions = [
            { id: 'inventario', label: 'Añadir Nuevo estanque', class: 'btn-primary' },
            { id: 'gestion', label: 'Gestión', class: 'btn-secondary' },
            { id: 'informacion', label: 'Información', class: 'btn-success' }
        ];
    }

    getMenuOptions() {
        return this.menuOptions;
    }
}

// Controlador
class MenuController {
    constructor(viewElementId) {
        this.model = new MenuModel();
        this.viewElement = document.getElementById(viewElementId);
        this.init();
    }

    init() {
        this.renderMenu();
    }

    renderMenu() {
        const menuOptions = this.model.getMenuOptions();
        this.viewElement.innerHTML = menuOptions.map(option => `
            <a href="#${option.id}" class="btn ${option.class} mb-3">${option.label}</a>
        `).join('');
    }
}

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', () => {
    new MenuController('menu');
});