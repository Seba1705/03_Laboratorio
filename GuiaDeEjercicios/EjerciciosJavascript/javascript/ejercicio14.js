// 14.Realizar una página que permita el ingreso de: Apellido, Nombre, Dni y sexo de una
// persona. Si el usuario pulsa el botón de confirmación se invocará a una función encargada
// de validar cada uno de los datos ingresados (que tanto el nombre y apellido no estén
// vacíos, que el documento sea numérico y que el sexo sea o ‘m’ o ‘f’).

window.addEventListener("load",function(){
    var btnOperar = $("btn");
    btnOperar.addEventListener("click", operar);
});

function $(id){
    var element = document.getElementById(id);
    return element;
}

function operar(){
    var name = $("name").value;
    var lastname = $("lastname").value;
    var id = $("id").value;
    var sex = $("sex").value;

    if(name == "" || lastname == "")
        alert("Faltan datos");
    if(!(parseInt(id)))
        alert("Dni invalido!");
    if(sex != 'f' && sex != 'm')
        alert("Sexo incorrecto!");

    alert("Nombre: " + name + ", Apellido: " + lastname + ", Dni: " + id + ", Sexo: " + id);
}