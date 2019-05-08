//BUSCAR ELEMENTOS POR ID
function $(id){
    var element = document.getElementById(id);
    return element;
}

//VARIABLES AJAX
var xhttp = new XMLHttpRequest();
var server = "http://localhost:3000/";
var respuestaServidor;

//EVENTO LOAD DE WINDOWS
window.addEventListener("load", function(){
    var btn = $("btn");
    btn.addEventListener("click", operar);
});

// window.load = loadEvents;

// function loadEvents(){
//     var btn = $("btn");
//     btn.addEventListener("click", operar);
// }

function operar(){
    console.log("Boton funciona");
}

function callback(){
/*  readyState
    0: no inicializado. Indica que no se ha abierto la conexión con el servidor (no se ha llamado a open)
    1: conexión con servidor establecida. Indica que se ha abierto la conexión pero todavía no se ha enviado la petición (no se ha llamado a send)
    2: recibida petición en servidor. Indica que el servidor ya ha recibido la petición (se ha llamado a send)
    3: enviando información. Se está enviando la información por parte del servidor, todavía no se ha completado la recepción.
    4: completado. Se ha recibido la información del servidor y está lista para operar con ella.*/
    if(xhttp.readyState == 4 && xhttp.status == 200) //200 OK indica que la solicitud ha tenido éxito.
    {   
        console.log(xhttp.responseText);
    }
    else{
        alert("Error Servidor - Codigo: " + xhttp.status);
    }
}

function solicitud(tipo, callback, params, accion){
    xhttp.onreadystatechange = callback;
    if(tipo == 'POST'){
        xhttp.open("POST",servidor + accion,true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(params); 
    }
    else if(tipo == 'GET'){
        xhttp.open("GET",servidor + accion,true);
        xhttp.send();
    }
}