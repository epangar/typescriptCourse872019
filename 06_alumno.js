"use strict";
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
exports.__esModule = true;
var _06_persona_1 = require("./06_persona");
var Alumno = /** @class */ (function (_super) {
    __extends(Alumno, _super);
    function Alumno(nombre, edad, curso) {
        var _this = _super.call(this, nombre, edad) || this;
        _this.curso = curso;
        return _this;
    }
    Alumno.prototype.saludar = function (otro) {
        if (otro === void 0) { otro = 'amigo'; }
        _super.prototype.saludar.call(this, otro);
        console.log("Y estudio " + this.curso);
    };
    return Alumno;
}(_06_persona_1["default"]));
exports.Alumno = Alumno;
