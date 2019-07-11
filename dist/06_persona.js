export default class Persona {
    /* public nombre: string;
    protected edad: number;
    constructor(nombre = '', edad = 0) {
        this.nombre = nombre;
        this.edad = edad;
    } */
    constructor(nombre = '', edad = 0) {
        this.nombre = nombre;
        this.edad = edad;
    }
    static pensar() {
        return 'Pienso...';
    }
    saludar(otro = 'amigo') {
        console.log(`Hola ${otro}, soy ${this.nombre}`);
    }
}
Persona.especie = 'Homo sapiens';
//# sourceMappingURL=06_persona.js.map