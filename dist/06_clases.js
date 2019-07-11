import { Alumno } from './06_alumno';
import Persona from './06_persona';
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
const p1 = new Persona('Pepe', 34);
const p2 = new Persona('Elena', 28);
const p3 = new Persona();
p1.saludar();
p1.saludar(p2.nombre);
// p2.trabajo = 'Programadora'
// delete p2.edad
console.log(p1);
console.log(p2);
console.log(Persona.pensar());
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
const a1 = new Alumno('Carlos', 31, 'Angular');
const a2 = new Alumno('Juan', 45, 'TS');
//# sourceMappingURL=06_clases.js.map