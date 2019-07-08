// eslint-disable-next-line no-unused-vars
var x

// ES6

let global = ''

function algo() {
  let local_function = ''

  {
    let local_bloque = ''
  }

}

const z = 9
//z = 8

//Diferencia entre elementales y referenciales

'Pepe'
23
true
undefined
{ }

const o = {}
o.nombre = 'Pepe'

// Funciones por asignación

const suma = function (a, b) { return a + b }
console.log(suma(3, 5))

// Diferencia entre  elementales y referencias
// en términos de mutabilidad / inmutabilidad

const o1 = { nombre: 'Pepe' }
const o2 = o1

o2.nombre = 'Jose'

console.log(o1, o2)

function inscribir(alumno) {
  alumno.curso = 'TypeScript'
}

inscribir(o1)
console.log(o1)
o1.dirección = {
  ciudad: 'Cádiz'
}

function objetoIndependiente(obj) {

  //clonado de objeto
  const r = JSON.parse(JSON.stringify(obj))
  r.nombre = 'Gabriel'
  r.cambios = 'Whatever'
  return r


}

const oNuevo = objetoIndependiente(o1)
console.log(o1)
console.log(oNuevo)