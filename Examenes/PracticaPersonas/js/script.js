function $(id){
    return document.getElementById(id);
}

//VARIABLES NECESARIAS
var btnEliminar = $("btnEliminar"), 
    btnModificar = $("btnModificar"),
    xhttp = new XMLHttpRequest(),
    arrPersonas,
    idActual = "";

window.addEventListener("load", loadEvents);
    function loadEvents(){
    btnEliminar.addEventListener("click", eliminar);
    btnModificar.addEventListener("click", modificar);
    trarElemntosDelServidor();
    mostrarSpinner(false);
}

function mostrarSpinner(estado){
    var spinner = $("contSpinner");
    spinner.hidden = estado;
}

function trarElemntosDelServidor(){
    xhttp.onreadystatechange = callback;
    xhttp.open("GET", "http://localhost:3000/personas", true);
    xhttp.send();

    function callback(){
        if(xhttp.readyState == 4 && xhttp.status == 200){
            var respuestaDelServidor = JSON.parse(xhttp.responseText);
            arrPersonas = respuestaDelServidor;
            cargarGrilla(arrPersonas);
            mostrarSpinner(true);
        }
    }
}

function cargarGrilla(listaDeElemntosACargar){
    var tCuerpo = $("tBody"),
        cantidadDeElemtos = listaDeElemntosACargar.length;
    for(var i=0; i<cantidadDeElemtos;i++){
        var row = document.createElement("tr"),
            obj = listaDeElemntosACargar[i],
            columns = Object.keys(obj);
        
        for(var j=0; j<columns.length; j++){
            var cel = document.createElement("td"),
                text = document.createTextNode(obj[columns[j]]);
            cel.appendChild(text);
            row.appendChild(cel);
        }
        row.addEventListener("dblclick", abrirConDobleClick);
        row.setAttribute("id", `col_${i+1}`);
        tCuerpo.appendChild(row);
    }
}

function abrirConDobleClick(){

}

function modificar(){

}

function eliminar(){

}

