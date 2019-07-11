namespace MySpace {

	const a = 2;

	export class MyClass {
		public static myProperty = 12;
	}
}

namespace OtroSpace {
	export let a = 23;
}

MySpace.MyClass.myProperty;
OtroSpace;
