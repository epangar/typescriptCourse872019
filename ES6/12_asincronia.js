// Callbacks
function leerDatos() {
	setTimeout(
		() => {
			let data = 'los datos'
			return data
		}, 1000
	)
}

function mostrarDatos(datos) {
	console.log(datos)
}

leerDatos()


//ES6 Promises

function leerDatosPromesa(i = 0) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const n = Math.random()
			if (n < 0.75) {
				//OK
				if (i < 2) {
					leerDatosPromesa(++i)
				} else {
					resolve(n)
				}

			} else {
				reject(new Error(n))
			}
		}, 2000)
	})
}

//ES2017

let probar = (async () => {
	try {
		const datos = await leerDatosAsinc()
		console.log(datos)
	} catch{
		console.log('ERROR: ' + error.message)
	}

})

// leerDatosPromesa()
// .then( (datos) => { console.log(1, datos ) } )
// .then( (datos) => { console.log(2, datos ) } )
// .catch((error) => { console.log('ERROR: '+ error.message )})
