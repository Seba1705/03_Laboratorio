"use strict";
var animal;
(function (animal) {
    var Perro = /** @class */ (function () {
        function Perro(nombre) {
            //public nombre:string;
            this.nombre = "";
            nombre && (this.nombre = nombre);
        }
        Perro.prototype.hacerRuido = function () {
            return 'Guau!';
        };
        Object.defineProperty(Perro.prototype, "Nombre", {
            get: function () {
                return this.nombre;
            },
            set: function (nombre) {
                this.nombre = nombre;
            },
            enumerable: true,
            configurable: true
        });
        return Perro;
    }());
    animal.Perro = Perro;
})(animal || (animal = {}));
