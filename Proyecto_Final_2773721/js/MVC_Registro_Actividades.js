// Model
class Procedimiento {
    constructor(nombre, tipo, fecha, responsable, estanque, descripcion, resultados, observaciones) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.fecha = fecha;
        this.responsable = responsable;
        this.estanque = estanque;
        this.descripcion = descripcion;
        this.resultados = resultados;
        this.observaciones = observaciones;
    }
}

class RegistroModel {
    constructor() {
        this.procedimientos = [];
    }

    //en esta parte se agrega un nuevo procedimiento
    agregarProcedimiento(procedimiento) {
        this.procedimientos.push(procedimiento);
    }

    //en esta parte se obtienen todos los procedimientos
    obtenerProcedimientos() {
        return this.procedimientos;
    }
}


// View
class RegistroView {
    constructor() {
        this.form = document.querySelector('form');
        this.nombreProcedimiento = document.getElementById('nombreProcedimiento');
        this.tipoProcedimiento = document.getElementById('tipoProcedimiento');
        this.fechaProcedimiento = document.getElementById('fechaProcedimiento');
        this.responsable = document.getElementById('responsable');
        this.estanqueUnidad = document.getElementById('estanqueUnidad');
        this.descripcionProcedimiento = document.getElementById('descripcionProcedimiento');
        this.resultados = document.getElementById('resultados');
        this.observaciones = document.getElementById('observaciones');
        
        //en esta parte escuchan los eventos para los botones
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.enviarFormulario();
        });
    }

    //en esta parte se capturan datos del formulario y se envian al controlador
    enviarFormulario() {
        const procedimiento = {
            nombre: this.nombreProcedimiento.value,
            tipo: this.tipoProcedimiento.value,
            fecha: this.fechaProcedimiento.value,
            responsable: this.responsable.value,
            estanque: this.estanqueUnidad.value,
            descripcion: this.descripcionProcedimiento.value,
            resultados: this.resultados.value,
            observaciones: this.observaciones.value,
        };
        this.onSubmit(procedimiento);
    }

    setOnSubmit(callback) {
        this.onSubmit = callback;
    }

    //en esta parte se limpia el formulario después del envío
    limpiarFormulario() {
        this.form.reset();
    }
}


// Controller
class RegistroController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        //en esta parte es para el evento del envío del formulario
        this.view.setOnSubmit(this.registrarProcedimiento.bind(this));
    }

    //en esta parte se registra un nuevo procedimiento y limpiar el formulario
    registrarProcedimiento(datosFormulario) {
        const nuevoProcedimiento = new Procedimiento(
            datosFormulario.nombre,
            datosFormulario.tipo,
            datosFormulario.fecha,
            datosFormulario.responsable,
            datosFormulario.estanque,
            datosFormulario.descripcion,
            datosFormulario.resultados,
            datosFormulario.observaciones
        );
        this.model.agregarProcedimiento(nuevoProcedimiento);
        this.view.limpiarFormulario();
        console.log("Procedimientos registrados:", this.model.obtenerProcedimientos());
    }
}

const app = new RegistroController(new RegistroModel(), new RegistroView());
