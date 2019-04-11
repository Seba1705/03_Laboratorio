/*11.Realizar una función que permita cambiar el color de fondo de un cuadro de texto. La
función recibirá como parámetros el id del control y el color.*/

window.addEventListener("load", function(){         //Funcion anonima
    var btn = $("btn");
    btn.addEventListener("click", operar);
})

function cambiar(id, color){
    var cuadro = $(id);
    cuadro.style.backgroundColor = color;
}

function $(id){
    var element = document.getElementById(id);
    return element;
}

function operar(){
    var id = $("id").value;
    var color = $("color").value;
    //alert(id + color);
    cambiar(id, color);
}