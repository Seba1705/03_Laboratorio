function $(id){
    var element = document.getElementById(id);
    return element;
}

window.addEventListener("load", function(){
    $("newPost").addEventListener("click", nuevoPost);
    $("btnCerrar").addEventListener("click", cerrar);
    $("btnPost").addEventListener("click", enviarDatos);
});

function nuevoPost(e){
    e.preventDefault;
    console.log("Nuevo post");
    var oculto = $("oculto");
    oculto.hidden = false;
}

function cerrar(e){
    e.preventDefault;
    console.log("Cerrar");
    var oculto = $("oculto");
    oculto.hidden = true;
}

function enviarDatos(e){
    e.preventDefault;
    console.log("Enviar Datos");
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