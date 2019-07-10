function sumaTotal(aDatos) {
    if (aDatos === void 0) { aDatos = []; }
    // aClon = aDatos.slice()
    var r = 0;
    // tslint:disable-next-line: prefer-for-of
    for (var i = 0; i < aDatos.length; i++) {
        var item = aDatos[i];
        r += item;
    }
    return r;
}
function sumaTotal2(aDatos) {
    if (aDatos === void 0) { aDatos = []; }
    var r = 0;
    for (var i in aDatos) {
        var item = aDatos[i];
        r += item;
    }
    return r;
}
// ES6
function sumaTotalES6(aDatos) {
    if (aDatos === void 0) { aDatos = []; }
    var r = 0;
    for (var _i = 0, aDatos_1 = aDatos; _i < aDatos_1.length; _i++) {
        var item = aDatos_1[_i];
        r += item;
    }
    return r;
}
var aDatos = [1, 56, 4, 6, 8, 23, 5, 9, 17];
console.log(sumaTotal(aDatos, Array < any > , []));
console.log(sumaTotal2(aDatos));
console.log(sumaTotalES6(aDatos));
aDatos.slice(); // Funciones ejecutadas como inmutables
aDatos.splice(2, 2); // Funciones ejecutadas como mutables
aDatos.sort(function (a, b) { return a - b; }); // Funciones ejecutadas como mutables
console.log(aDatos);
/* aDatos.forEach()
aDatos.map()
aDatos.filter()
aDatos.reduce()
aDatos.reduceRight()
aDatos.some()
aDatos.every() */
function mostrar(aDatos) {
    if (aDatos === void 0) { aDatos = []; }
    aDatos.forEach(function (item, i) { return console.log("El item " + (i + 1) + " vale " + item); });
}
mostrar(aDatos);
// Proyecciones
function cuadrados(aDatos) {
    if (aDatos === void 0) { aDatos = []; }
    return aDatos.map(function (item) { return item * item; });
}
console.log(cuadrados(aDatos));
// Filtros
function pares(aDatos) {
    if (aDatos === void 0) { aDatos = []; }
    return aDatos.filter(function (item) { return !(item % 2); });
}
console.log(pares(aDatos));
// Reduce
function sumaTotalReduce(aDatos) {
    if (aDatos === void 0) { aDatos = []; }
    return aDatos.reduce(function (total, item) { return total += item; });
}
console.log(sumaTotalReduce(aDatos));
// Some y every
function sonTodosImpares(aDatos) {
    if (aDatos === void 0) { aDatos = []; }
    return aDatos.every(function (item) { return (item % 2); });
}
console.log(sonTodosImpares(aDatos));
function hayAlgunoCentenas() {
    return aDatos.some(function (item) { return item >= 100; });
}
console.log(hayAlgunoCentenas(aDatos));
// Objetos envolventes (wrapper objects)
var cadena = 'Hola';
var number = 23;
cadena.toUpperCase();
cadena[3];
number.toLocaleString();
