// // Callbacks
// function leerDatos(callback: () => void) {
// 	setTimeout(
// 		() => {
// 			const data = 'los datos';
// 			return data;
// 		}, 1000,
// 	);
// }
// function mostrarDatos(datos: Array<any>) {
// 	console.log(datos);
// }
// leerDatos(mostrarDatos);
// // ES6 Promises
// function leerDatosPromesa(i = 0) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const n = Math.random();
// 			if (n < 0.75) {
// 				// OK
// 				if (i < 2) {
// 					leerDatosPromesa(++i);
// 				} else {
// 					resolve(n);
// 				}
// 			} else {
// 				reject(new Error(n));
// 			}
// 		}, 2000);
// 	});
// }
// // ES2017
// const leerDatosAsinc =()=> {}
// (async () => {
// 	try {
// 		const datos = await leerDatosAsinc();
// 		console.log(datos);
// 	} catch {
// 		console.log('ERROR: ' + error.message);
// 	}
// });
// // leerDatosPromesa()
// // .then( (datos) => { console.log(1, datos ) } )
// // .then( (datos) => { console.log(2, datos ) } )
// // .catch((error) => { console.log('ERROR: '+ error.message )})
//# sourceMappingURL=04_asincronía.js.map