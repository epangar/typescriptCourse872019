import Persona from './06_persona';
export default class Alumno extends Persona {
    constructor(nombre, edad, curso) {
        super(nombre, edad);
        this.curso = curso;
    }
    saludar(otro = 'amigo') {
        super.saludar(otro);
        console.log(`Estudio ${this.curso}`);
        console.log(`y tengo ${this.edad} años`);
    }
}
//# sourceMappingURL=06_alumno.js.map