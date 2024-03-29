import { PAISES } from './08_maestros.js';
export default class Controller {
    constructor() {
        console.log('Cargado el controller');
        this.nodos = {
            nombre: document.querySelector('#nombre'),
            btnBorrar: document.querySelector('#btnBorrar'),
            output: document.querySelector('#output'),
            paises: document.querySelector('#paises')
        };
        this.aPaises = PAISES;
        // Renderizado del DOM
        let html = '';
        this.aPaises.forEach(item => {
            html += `<option>${item}</option>`;
        });
        this.nodos.paises.innerHTML = html;
        // Manejadores de eventos
        this.nodos.nombre.addEventListener('input', this.onInput.bind(this));
        this.nodos.btnBorrar.addEventListener('click', this.onClick.bind(this));
    }
    onInput(ev) {
        if (!ev.target) {
            return false;
        }
        const target = ev.target;
        console.log(this);
        console.dir(target);
        this.nodos.output.innerHTML = `Hola ${target.value}`;
    }
    onClick() {
        this.nodos.nombre.value = '';
        this.nodos.output.innerHTML = '';
    }
}
//# sourceMappingURL=08_Controller.js.map