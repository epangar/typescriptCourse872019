interface INodos {
    nombre : Element
    output: Element
}

export default class Controller {
    nodos: INodos;
    constructor() {
        console.log('Cargado el controller')
        this.nodos = { // aserción de tipos
            nombre: document.querySelector('#nombre') as HTMLInputElement ,
            output: <Element>document.querySelector('#output')
        }
        this.nodos.nombre.addEventListener('input',
            this.onInput.bind(this) )
    }

    onInput(ev: Event) {
        if (!ev.target) {return false}
        const target = ev.target as HTMLInputElement;
        console.log(this);
        console.dir(target);
        this.nodos.output.innerHTML =`Hola ${target.value}`
    }
}