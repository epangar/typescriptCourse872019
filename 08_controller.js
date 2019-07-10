"use strict";
exports.__esModule = true;
var Controller = /** @class */ (function () {
    function Controller() {
        console.log("Cargado el controller");
        this.nodos = {
            nombre: document.querySelector('#nombre'),
            output: document.querySelector('#output')
        };
        this.nodos.nombre.addEventListener('input', this.onInput.bind(this));
    }
    Controller.prototype.onInput = function (ev) {
        var target = ev.target;
        console.log(this);
        console.log(target);
    };
    return Controller;
}());
exports["default"] = Controller;
