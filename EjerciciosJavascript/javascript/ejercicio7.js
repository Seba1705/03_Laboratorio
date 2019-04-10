/*
7. Ingresar por medio de una ventana de tipo prompt su nombre y apellido en dos
variables distintas. Dichas variables serán pasadas como parámetro de la función
MostrarNombreApellido, que mostrará el apellido en mayúscula y el nombre solo con
la primera letra en mayúsculas y el resto en minúsculas. El apellido y el nombre se
mostrarán separados por una coma (,)
*/

var name = prompt("INGRESE SU NOMBRE");
var lastname = prompt("INGRESE SU APELLIDO");

alert(MostrarNombreApellido(name, lastname));

function MostrarNombreApellido(name, lastname)
{
    return lastname.toUpperCase() + ", " + MaysPrimera(name) ;
}

function MaysPrimera(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}