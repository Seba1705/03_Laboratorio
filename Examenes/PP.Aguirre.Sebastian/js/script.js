window.addEventListener("load", loadEvents);

//Buscar elementos por Id
function $(id){
    return document.getElementById(id);
}
//
function loadEvents(){
    var btn = $("btn").addEventListener("click", enviarSolicitud);
}
//Variables para la conexion
var servidor;
var xhttp = new XMLHttpRequest();
var respuestaDelServidor;
//Funcion para enviar datos al Servidor via POST
function request(params){
    xhttp.onreadystatechange = function(){
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            respuestaDelServidor = xhttp.responseText; //Puede ser responseXml
        }
    };
    xhttp.open("POST", servidor, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(params);
}
//Recibir datos del servidor via GET
function response(){
    xhttp.onreadystatechange = function(){
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            respuestaDelServidor = xhttp.responseText; //Puede ser responseXml
        }
    };
    xhttp.open("GET", servidor, true);
    xhttp.send();
}

function mostrarSpinner(estado){
    var spinner = $("cont-spinner");
    spinner.hidden = estado;
}

function enviarSolicitud(){
    console.log("Hacer algo");
}