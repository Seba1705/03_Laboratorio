/*
13.Crear dos clases en un archivo de extensión .CSS llamadas oculto y visible, dónde en la
primera clase se creará una declaración que permita ocultar un bloque de texto
(display:none) y en la segunda se lo muestre (display:inline).
Dentro del cuerpo del documento se pide tener una parte de alguna noticia reciente en
un elemento p y la otra parte de la noticia en otro párrafo (cuyo atributo class sea
oculto). Además se deberá tener un enlace con el texto “Continuar leyendo” que invoque
a la función encargada de cambiar el nombre de la clase al elemento p y oculte al
enlace.
*/

window.addEventListener("load", function(){         //Funcion anonima
    var enlace = $("enlace");
    enlace.addEventListener("click", operar);
})

function operar(){
    $("oculto").className = "visible";
    $("enlace").className = "oculto";
}

function $(id)
{
    var elemento = document.getElementById(id);
    return elemento;
}