// Objetos literales (JSON)

const p1 = {
	nombre: 'Pepe',
	edad: 23,
	saludar: function () {
		console.log(`Hola, soy ${this.nombre}`)
	}
}

p1.saludar()
console.log(p1.__proto__)

function Persona(nombre) {
	console.log('Ha nacido una persona')
	this.name=nombre
}

let p2 = new Persona('Pepe')

console.log(p2 instanceof Persona)
console.log(p2 instanceof Object)





