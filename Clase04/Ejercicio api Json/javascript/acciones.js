window.addEventListener("load", function(){         //Funcion anonima
    var btnAgregar = $("btnGuardar");
    btnAgregar.addEventListener("click", agregar);
})

function $(id)
{
    var elemento = document.getElementById(id);
    return elemento;
}

function agregar(){
    var name;
    var lastname;
    var date;
    var phone;
    var peticion;
    var localhost = ""
    var metodo = "GET";


    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = callback;
    xhttp.open(metodo, localhost, true)

    function callback(){
        if(xhttp.readyState === 4 && xhttp.status === 200)
            console.log("Llego la repuesta del servidor");
    }   
}
