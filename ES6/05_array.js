function sumaTotal(aDatos = []) {
	// aClon = aDatos.slice()
	let r = 0
	for (let i = 0; i < aDatos.length; i++) {
		const item = aDatos[i]
		r += item
	}
	return r
}



const aDatos = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(sumaTotal(aDatos))

for( const item of aDatos){
	console.log(item)
}