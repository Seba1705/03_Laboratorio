/*6. Definir una función que muestre información sobre una cadena de texto que se le pasa
como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena
está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.*/

var palabra = prompt("Ingrese palabra");
validar(palabra);

function validar(palabra)
{
   
   
}

function esMayuscula(letra)
{
    return letra === letra.toUpperCase();
}

function esMinuscula(letra)
{
    return letra === letra.toLowerCase();
}  