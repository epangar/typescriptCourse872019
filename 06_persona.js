"use strict";
exports.__esModule = true;
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        if (nombre === void 0) { nombre = ''; }
        if (edad === void 0) { edad = 0; }
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.pensar = function () {
        console.log('Pienso...');
    };
    Persona.prototype.saludar = function (otro) {
        if (otro === void 0) { otro = 'amigo'; }
        console.log("Hola " + otro + ", soy " + this.nombre);
    };
    return Persona;
}());
exports["default"] = Persona;
