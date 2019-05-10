function $(id){
    var element = document.getElementById(id);
    return element;
}

window.addEventListener("load", function(){
    $("newPost").addEventListener("click", nuevoPost);
    $("btnCerrar").addEventListener("click", cerrar);
    $("btnPost").addEventListener("click", enviarDatos);
    // var color = getParameterByName("color", window.url);
    // var font = getParameterByName("font", window.url);
    // var email = getParameterByName("email", window.url);
});

var xhr = new XMLHttpRequest();
var servidor = "http://localhost:1337/postearNuevaEntrada";
var respuestaDelServidor;

function nuevoPost(e){
    console.log("Nuevo post");
    var oculto = $("oculto");
    oculto.hidden = false;
}

function cerrar(e){
    console.log("Cerrar");
    var oculto = $("oculto");
    oculto.hidden = true;
}

function enviarDatos(e){
    e.preventDefault();
    cerrar();
    mostrarSpinner(false);
    var textTitle = $("inputTitle").value;
    var textHeader = $("inputHeader").value;
    var postText = $("inputText").value;
    var autor = getParameterByName("email", window.url);
    //console.log(`Enviar los siguientes datos: ${textTitle} ${textHeader} ${postText}`);
    
    var datosPost = {
        "title":textTitle,
        "header":textHeader,
        "posttext":postText,
        "author":autor
    }

    xhr.onreadystatechange = callback;
    xhr.open("POST", servidor, true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(JSON.stringify(datosPost));
    
    function callback(){
        
        if(xhr.readyState === 4 && xhr.status === 200){
            respuestaDelServidor = JSON.parse(xhr.responseText);
            var element = $("posteo");
            var titulo = document.createElement("h1");
            var subTitulo = document.createElement("h2");
            var datos = document.createElement("label");
            var contenedor = document.createElement("div");
            titulo.appendChild(document.createTextNode(respuestaDelServidor.title));
            subTitulo.appendChild(document.createTextNode(respuestaDelServidor.posttext));
            datos.appendChild(document.createTextNode(`Posted by ${respuestaDelServidor.author} on ${respuestaDelServidor.date}`));
            contenedor.appendChild(titulo);
            contenedor.appendChild(subTitulo);
            contenedor.appendChild(datos);
            element.appendChild(contenedor);
            mostrarSpinner(true);
        }
    }
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}   

function mostrarSpinner(estado){
    var spinner = $("cont-spinner");
    spinner.hidden = estado;
}