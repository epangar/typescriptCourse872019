function algo(a: any, b: any) {
	return a + b;
}

function algoMejor<T>(a: T) {
	return a;
}


let x = algoMejor<number>(2);

let z: Array<string>
let y: Promise<Array<string>>


interface esNumerico<T> {

}

class Generic<T> {
	add: (x: T, y: T) => T
}