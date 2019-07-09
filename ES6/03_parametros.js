function suma(a = 0, b = 0, ...rest) {
	console.log(rest)
	return a + b
}

console.log(suma('2', 3))

console.log(suma(3, 4, 5, 6, 7))

console.log(suma())


const aDatos = [1, 9, 8, 2, 7, 4, 3, 5]

console.log(...aDatos)

function algo() {
	let n = 23;
	let condicion = true;
	return [n, condicion]
}

let [number, cond] = algo()
console.log(number, typeof number)
console.log(cond, typeof cond)


function otra() {
	let n = 23;
	let condicion = true;
	return { n: n, condicion: condicion }
}

let { n, condicion } = otra()
console.log(n, typeof n)
console.log(condicion, typeof condicion)