"use strict";
var animal;
(function (animal) {
    var Gato = /** @class */ (function () {
        function Gato(nombre) {
            //public nombre:string;
            this.nombre = "";
            nombre && (this.nombre = nombre);
        }
        Gato.prototype.hacerRuido = function () {
            return 'Miau!';
        };
        Object.defineProperty(Gato.prototype, "Nombre", {
            get: function () {
                return this.nombre;
            },
            set: function (nombre) {
                this.nombre = nombre;
            },
            enumerable: true,
            configurable: true
        });
        return Gato;
    }());
    animal.Gato = Gato;
})(animal || (animal = {}));
