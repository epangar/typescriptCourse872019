export default class Persona {

	static especie: 'Homo Sapiens';


	public nombre: string;
	protected edad: number;
	constructor(nombre = '', edad = 0) {
		this.nombre = nombre
		this.edad = edad
	}

	static pensar() {
		console.log('Pienso...')
	}

	saludar(otro = 'amigo') {
		console.log(`Hola ${otro}, soy ${this.nombre}`)
	}
}

