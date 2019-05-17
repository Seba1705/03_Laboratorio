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

function abrirConDobleClick(e){
    e.preventDefault();
    mostrarFomulario(false);

    idActual = event.target.parentNode.getAttribute('id').split("_")[1];
    var personaAModificar = buscarPorId(idActual);
    
    $("txtNombre").value = personaAModificar.nombre; 
    $("txtApellido").value = personaAModificar.apellido;
    $("dateFecha").value = personaAModificar.fecha;
    var sexo = $("radFamale");
    if(personaAModificar.sexo == "Female"){ //Turno
        sexo.checked = true;
    }
}

function mostrarFomulario(estado){
    var contenedor = $("contFormulario");
    contenedor.hidden = estado;
}

function buscarPorId(id)
{
    for(var i=0; i<arrPersonas.length; i++){
        if(arrPersonas[i].id == id){
            return arrPersonas[i];
        }
    }
}

function modificar(e){
    var sexo = $("radMale").checked ? "Male" : "Female";
    var objModficado = {
        "id":idActual,
        "nombre":$("txtNombre").value,
        "apellido":$("txtApellido").value,
        "fecha":$("dateFecha").value,
        "sexo":sexo
    }
    e.preventDefault();
    mostrarSpinner(false);
    xhttp.onreadystatechange = callback;
    xhttp.open("POST","http://localhost:3000/editar", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(objModficado));

    function callback(){
        if(xhttp.readyState == 4 && xhttp.status == 200){
            var respuestaServidorPost = xhttp.responseText;
            console.log(respuestaServidorPost);
            mostrarSpinner(true);
            mostrarFomulario(true);
        }
    }
}

function eliminar(){

}

