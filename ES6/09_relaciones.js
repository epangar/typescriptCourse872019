function Mascota() {

}

function Persona() {
	this.mascotas = [new Mascota] // Asociación -> Propiedas
}


Persona.prototype.comprarMascota = function () {
	this.mascotas.push(new Mascota)
}

Persona.prototype.adoptarMascota = function (mascota) {
	this.mascotas.push(mascota)
}

let p1 = new Persona()
p1.adoptarMascota(new Mascota)