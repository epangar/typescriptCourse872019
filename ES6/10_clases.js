class Persona {
	constructor(nombre = '', edad = 0){
		console.log('Ha nacido una persona')
		this.name = nombre;
		this.edad=edad
	}

	saludar (otro = 'amigo'){
		console.log(`Hola,  ${otro}, soy ${nombre}. `)
	}
}



class Alumno extends Persona {
	constructor(nombre, edad, curso){
		super(nombre, edad)
		this.curso=curso;
	}

	saludar(otro = 'amigo'){
		super.saludar(otro)
		console.log(`Y estudio ${curso}`)
	}
}
