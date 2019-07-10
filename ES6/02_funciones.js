const otra = function (n) { return n }

function una(n) {
    return n
}

// asignación

const otra = function(n) {
    return n
}

mostrar()
const lambda = n => n

let o = { nombre: "Luis" }

// Funcion
mostrar() // This es el objeto global

// Metodo
let o = {nombre : 'Luis'}
o.mostrar = mostrar
o.mostrar() // This es el objeto

// Constructor
const o2 = new mostrar() // This es el nuevo objeto que se instancia

// Apply | call
const o3 = {
    nombre: 'Objeto 3'
}

mostrar.apply(o3) // This es el objeto parametro, que "toma prestada la función" 

const o2 = new mostrar()

// Uso de metodos como handlers

setTimeout(o.mostrar, 1000)
setTimeout(o.mostrar.bind(o), 2000) */
 
console.clear()

// Arrow
// - siempre son anonimas
// - nunca son constructoras
// - no suelen usarse como métodos
// - this consistente: la funcion

mostrarA = () => {console.log(this)}
mostrarA()

mostrarA = () => { console.log(this) }
mostrarA()
