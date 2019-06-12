// Funciones Básicas
function sumar(a, b) {
    return a + b;
}
//console.log(sumar(5,9));
var contar = function (heroes) {
    return heroes.length;
};
//console.log(contar('Hola mundo'));
var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
//console.log(contar(superHeroes));
//Parametros por defecto
function llamarBatman(llamar) {
    if (llamar === void 0) { llamar = false; }
    if (llamar) {
        console.log("Batiseñal activada");
    }
}
//llamarBatman(true);
// Rest?
function unirheroes() {
    var personas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        personas[_i] = arguments[_i];
    }
    return personas.join(", ");
}
//console.log(unirheroes(superHeroes));
// Tipo funcion
function noHaceNada(numero, texto, booleano, arreglo) {
}
// Crear el tipo de funcion que acepte la funcion "noHaceNada"
var noHaceNadaTampoco;
