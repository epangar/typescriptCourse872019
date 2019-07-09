

(() => {

	let app = 'Mi aplicación'

	function presentar() {
		console.log(app)
	}

	return { presentar: presentar }
})()