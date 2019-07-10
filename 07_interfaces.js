var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(especie) {
        this.especie = especie;
        this.vivo = true;
    }
    Animal.prototype.comer = function () {
        console.log('Estoy comiendo');
    };
    return Animal;
}());
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato(especie, color, uñas) {
        var _this = _super.call(this, especie) || this;
        _this.color = color;
        _this.uñas = uñas;
        return _this;
    }
    Gato.prototype.maullar = function () {
        console.log('Miau');
        return true;
    };
    ;
    return Gato;
}(Animal));
var g = new Gato('gato', 'negro', true);
var a;
var f;
var g1;
a = {
    especie: '',
    vivo: true,
    comer: function () { console.log('Estoy comiendo'); }
};
f = {
    color: '',
    uñas: true,
    maullar: function () { }
};
console.log(a);
