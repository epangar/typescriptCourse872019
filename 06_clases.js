"use strict";
exports.__esModule = true;
var _06_alumno_1 = require("./06_alumno");
var _06_persona_1 = require("./06_persona");
// class Persona {
// 	nombre: string;
// 	edad: number;
// 	constructor(nombre = '', edad = 0) {
// 		this.nombre = nombre
// 		this.edad = edad
// 	}
// 	static pensar() {
// 		console.log('Pienso...')
// 	}
// 	saludar(otro = 'amigo') {
// 		console.log(`Hola ${otro}, soy ${this.nombre}`)
// 	}
// }
var p1 = new _06_persona_1["default"]('Pepe', 34);
var p2 = new _06_persona_1["default"]('Elena', 28);
var p3 = new _06_persona_1["default"]();
p1.saludar();
p1.saludar(p2.nombre);
//p2.trabajo = 'Programadora'
// delete p2.edad
console.log(p1);
console.log(p2);
console.log(_06_persona_1["default"].pensar());
// class Alumno extends Persona {
// 	curso: string;
// 	constructor(nombre: string, edad: number, curso: string) {
// 		super(nombre, edad)
// 		this.curso = curso;
// 	}
// 	saludar(otro = 'amigo') {
// 		super.saludar(otro)
// 		console.log(`Y estudio ${curso}`)
// 	}
// }
var a1 = new _06_alumno_1.Alumno('Carlos', 31, 'Angular');
var a2 = new _06_alumno_1.Alumno('Juan', 45, 'TS');
