var filaSeleccionada = null,
    arrDeElementos = null,
    xhttp = new XMLHttpRequest(),
    btnModificar = $("btnModificar"),
    btnEliminar = $("btnEliminar");

function $(id){
    return document.getElementById(id);
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
        row.setAttribute("id", `${i+1}`);
        tCuerpo.appendChild(row);
    }
}

function taerElementosDelServidor(){
    xhttp.onreadystatechange = callback;
    xhttp.open("GET", "http://localhost:3000/materias", true);
    xhttp.send();

    function callback(){
        if (xhttp.readyState === 4 && xhttp.status === 200){
            arrDeElementos = JSON.parse(xhttp.responseText);
            cargarGrilla(arrDeElementos);
            mostrarSpinner(true);
        }
    }
}

function abrirConDobleClick(e){
    //Selecciono la fija
    filaSeleccionada = e.target.parentNode;
    //Obtengo un array con los hijos
    var elementosDeLaFila = filaSeleccionada.children;
    
    //Cargo datos en el formulario
    $("txtNombre").value = elementosDeLaFila[1].textContent;
    $("selectCuatri").value = elementosDeLaFila[2].textContent;
    if(elementosDeLaFila[4].textContent == "Noche")
        $("radNoche").checked = true;
    var fecha = elementosDeLaFila[3].textContent,
        fechaModificada = fecha.split('/');
    $('dateFecha').value = `${fechaModificada[2]}-${fechaModificada[1]}-${fechaModificada[0]}`;    
        
    mostrarFomulario(false);
}

function mostrarFomulario(estado){
    var contenedor = $("contFormulario");
    contenedor.hidden = estado;
}

function mostrarSpinner(estado){
    var spinner = $("contSpinner");
    spinner.hidden = estado;
}

function modificar(e){
    mostrarSpinner(false);
    //Cambio el formato de la fecha de '2019-05-17' a '17/05/2019'
    var fechaModificada = ($('dateFecha').value).split("-"),
        turno = $("radMañana").checked ? "Mañana" : "Noche",
        objetoAEnviar = {
        id:parseInt(filaSeleccionada.getAttribute("id")),
        nombre: $("txtNombre").value,
        cuatrimestre: parseInt($("selectCuatri").value),
        fechaFinal: `${fechaModificada[2]}/${fechaModificada[1]}/${fechaModificada[0]}`,
        turno: turno 
    };
    xhttp.onreadystatechange = callback;
    xhttp.open("POST", "http://localhost:3000/editar", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(objetoAEnviar));
    
    function callback(){
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var respuesta = JSON.parse(xhttp.responseText);
            if(respuesta.type == "ok"){
                filaSeleccionada.children[1].textContent = objetoAEnviar.nombre;
                filaSeleccionada.children[3].textContent = objetoAEnviar.fechaFinal;
                filaSeleccionada.children[4].textContent = objetoAEnviar.turno;
            }
            mostrarSpinner(true);
            mostrarFomulario(true);
        }
    }
}

function eliminar(e){
    mostrarSpinner(false);
    xhttp.onreadystatechange = callback;
    xhttp.open("POST", "http://localhost:3000/eliminar", true);
    xhttp.setRequestHeader("Content-Type", "application/json");   
    var obj = { id : parseInt(filaSeleccionada.getAttribute("id"))};
    xhttp.send(JSON.stringify(obj));
    
    function callback(){
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var respuestaDelServidorPost = JSON.parse(xhttp.responseText);
            if(respuestaDelServidorPost.type == "ok"){
                filaSeleccionada.parentNode.removeChild(filaSeleccionada);
                console.log("Eliminado");
            }  
            mostrarSpinner(true); 
            mostrarFomulario(true);
        }
    }
}

taerElementosDelServidor();
mostrarSpinner(false);
btnModificar.addEventListener("click", modificar);
btnEliminar.addEventListener("click", eliminar);