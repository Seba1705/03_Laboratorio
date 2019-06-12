// Objetos
var batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
//console.log(batimovil);
var bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar: function () {
        console.log("Disparando");
    }
};
//console.log(bumblebee);
// Villanos debe de ser un arreglo de objetos personalizados
var villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
var charles = {
    poder: "psiquico",
    estatura: 1.78
};
var apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
//console.log(apocalipsis);
// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
var mystique;
mystique = charles;
//console.log(mystique);
mystique = apocalipsis;
//console.log(mystique);
