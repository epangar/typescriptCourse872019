const otra = function (n) { return n }

function mostrar() {
	console.log(this)
}

mostrar()
const lambda = n => n

let o = { nombre: "Luis" }

o.mostrar = mostrar
o.mostrar()


//Constructor 

const o2 = new mostrar()

//Apply | call

setTimeout(o.mostrar, 2000)
setTimeout(o.mostrar.bind(), 2000)

console.clear()

//Arrow

mostrarA = () => { console.log(this) }
mostrarA()