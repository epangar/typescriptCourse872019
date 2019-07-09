function Animal(especie, nombre) {

	let especie = '';
	this.nombre = nombre;

}


Animal.prototype.saludar=function (){
	console.log(`Hola, soy un ${this.especie} y me llamo ${this.nombre}. `)
}

let perro = new Animal('perro', 'Rufo')
perro.saludar()
console.log(perro.especie)

//ES5 getter y setters

persona = {
	_nombre= '',
	get nombre() {return this._nombre.toUpperCase()},
	set nombre(nombre) { this._nombre = nombre.toLowerCase()},

}