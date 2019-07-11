import Persona from './06_persona';
export class Alumno extends Persona {
    constructor(nombre, edad, curso) {
        super(nombre, edad);
        this.curso = curso;
    }
    saludar(otro = 'amigo') {
        super.saludar(otro);
        console.log(`Y estudio ${this.curso}`);
    }
}
//# sourceMappingURL=06_alumno.js.map