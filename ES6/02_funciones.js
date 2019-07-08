// declaración 

function otra(n) {
    return n
}

// asignación

const otra = function(n) {
    return n
}

// ES6: asignación de arrow functions o lambdas

// const lambda = (n) => {return n}
const lambda = n => n

// Diferencias en el this segun la forma de invocación

function mostrar() {
    console.log(this)
} 

// Funcion
mostrar()

// Metodo
let o = {nombre : 'Luis'}
o.mostrar = mostrar
o.mostrar()

// Constructor
const o2 = new mostrar()

// Apply | call


setTimeout(o.mostrar, 1000)
setTimeout(o.mostrar.bind(this), 2000)

console.clear()

// Arrow
mostrarA = () => {console.log(this)}
mostrarA()

let oA = {nombre : 'Pepe'}
oA.mostrar = mostrarA
oA.mostrar()
