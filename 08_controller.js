"use strict";
exports.__esModule = true;
var Controller = /** @class */ (function () {
    function Controller() {
        console.log('Cargado el controller');
        this.nodos = {
            nombre: document.querySelector('#nombre'),
            btnBorrar: document.querySelector('#btnBorrar'),
            output: document.querySelector('#output')
        };
        this.nodos.nombre.addEventListener('input', this.onInput.bind(this));
        this.nodos.btnBorrar.addEventListener('click', this.onClick.bind(this));
    }
    Controller.prototype.onInput = function (ev) {
        if (!ev.target) {
            return false;
        }
        var target = ev.target;
        console.log(this);
        console.log(target);
        this.nodos.output.innerHTML = "Hola, " + target.value;
    };
    Controller.prototype.onClick = function () {
        this.nodos.nombre.value = '',
            this.nodos.output.innerHTML = '';
    };
    return Controller;
}());
exports["default"] = Controller;
