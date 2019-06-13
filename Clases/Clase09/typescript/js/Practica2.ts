// Funciones Básicas
function sumar( a:number, b:number ):number{
    return a + b;
}
//console.log(sumar(5,9));

let contar = function( heroes:any ):any{
    return heroes.length;
}
//console.log(contar('Hola mundo'));

let superHeroes:string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
//console.log(contar(superHeroes));

//Parametros por defecto
function llamarBatman( llamar = false ):any{
    if( llamar ){
        console.log("Batiseñal activada");
    }
}
//llamarBatman(true);

// Rest?
function unirheroes( ...personas:string[] ):string{
    return personas.join(", ");
}
//console.log(unirheroes(superHeroes));

// Tipo funcion
function noHaceNada( numero, texto, booleano, arreglo ){

}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco;
