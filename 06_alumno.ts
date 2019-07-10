import Persona from "./06_persona";


export class Alumno extends Persona {
	curso: string;
	constructor(nombre: string, edad: number, curso: string) {
		super(nombre, edad)
		this.curso = curso;
	}

	saludar(otro = 'amigo') {
		super.saludar(otro)
		console.log(`Y estudio ${this.curso}`)
	}
}