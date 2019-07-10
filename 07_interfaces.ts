abstract class Animal {
	vivo: boolean;
	constructor(public especie: string) {
		this.vivo = true;
	}

	comer() {
		console.log('Estoy comiendo')
	}

}

interface IFelino {
	color: string;
	uñas: boolean;
	maullar: () => void;
}

class Gato extends Animal implements IFelino {

	constructor(especie: string, public color: string, public uñas: boolean) {
		super(especie)
	}

	maullar() {
		console.log('Miau');
		return true;
	};
}