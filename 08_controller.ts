export default class Controller {
	nodos: any;
	constructor() {
		console.log("Cargado el controller");
		this.nodos = {
			nombre: document.querySelector('#nombre'),
			output: document.querySelector('#output')
		}

		this.nodos.nombre.addEventListener('input',
			this.onInput.bind(this) )
	}

	onInput(ev: Event) {
		const target = ev.target
		console.log(this)
		console.log(target)
	}
}