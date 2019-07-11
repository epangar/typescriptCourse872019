"use strict";
{
    let cadena;
    let numero;
    let isOk;
    let nada;
    let algo;
    cadena = '';
    // cadena = 22;  da error
    numero = 22;
    isOk = true;
    nada = undefined;
    algo = 'Algo';
}
// Inferencia de tipos
{
    let cadena = 'Pepe';
    cadena += ' Perez';
    // cadena = 22 Da error
    console.log(cadena);
}
// Arrays
{
    const aDatos = [];
    // tslint:disable-next-line: array-type
    const aMasDatos = [];
    const aNumbers1 = [];
    // tslint:disable-next-line: array-type
    const aNumbers2 = [];
    aDatos.push('Pepe', 87, true);
    aMasDatos.push('Pepe', 67, false);
    aNumbers1.push(1, 2, 3);
    aNumbers2.push(1, 2, 4);
}
// Tuplas (Arrays de n items fijos)
{
    let aTupla;
    aTupla = [1, 3, 9];
}
// Tipos Objeto
{
    let oDatos;
    oDatos = { nombre: 'Pepe' };
    oDatos = new Date();
    // oDatos = 22 esto da error
    let obj = {};
    obj = { nombre: 'Pepe' };
    // obj = 22; // da un erorr
    obj = { edad: 22 };
    let oFechas;
    oFechas = new Date();
}
// Tipos unión
{
    let id;
    id = '007';
    id = 444;
    // id = true // Da error
}
// Alias y tipos propios (e.g semántico)
{
    let id;
    let nombre;
}
//# sourceMappingURL=05_tipos.js.map