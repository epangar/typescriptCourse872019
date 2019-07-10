import { PAISES } from './08_maestros';

interface INodos {
	nombre: HTMLInputElement;
	btnBorrar: HTMLButtonElement;
	output: HTMLOutputElement;
}

export default class Controller {
	nodos: any;
	paises: string[]
	constructor() {
		console.log('Cargado el controller');
		this.nodos = {
			nombre: document.querySelector('#nombre') as HTMLInputElement,
			btnBorrar: document.querySelector('#btnBorrar'),
			output: <HTMLOutputElement>document.querySelector('#output'),
			paises: <HTMLSelectElement>document.querySelector('#paises'),
		};
		this.paises = PAISES;

		let html = '';
		this.paises.forEach((item) => {
			html += `<option>${item}</option>`;
		});

		this.nodos.nombre.addEventListener('input',
			this.onInput.bind(this));
		this.nodos.btnBorrar.addEventListener('click',
			this.onClick.bind(this));
	}

	onInput(ev: Event) {
		if (!ev.target) { return false; }
		const target = ev.target as HTMLInputElement;
		console.log(this);
		console.log(target);
		this.nodos.output.innerHTML = `Hola, ${target.value}`;
	}

	onClick() {
		this.nodos.nombre.value = '',
			this.nodos.output.innerHTML = '';
	}
}
