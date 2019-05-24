var filaSeccionada = null;

$(document).ready(function(){
    $.get("http://localhost:3000/materias",function(data){
        cargarGrilla(data);
    }); 
    $('#btnModificar').click(modificar);   
});

function cargarGrilla(listaDeElemntosACargar){
    var tCuerpo = document.getElementById("tBody"),
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

function abrirConDobleClick(e){
    //Selecciono la fija
    filaSeleccionada = e.target.parentNode;
    //Obtengo un array con los hijos
    var elementosDeLaFila = filaSeleccionada.children;
    
    //Cargo datos en el formulario
    $("#txtNombre").val(elementosDeLaFila[1].textContent);
    $("#selectCuatri").val(elementosDeLaFila[2].textContent);
    if(elementosDeLaFila[4].textContent == "Noche")
        $('#radNoche').prop('checked', true);   
    var fecha = elementosDeLaFila[3].textContent,
        fechaModificada = fecha.split('/');
    $('#dateFecha').val(`${fechaModificada[2]}-${fechaModificada[1]}-${fechaModificada[0]}`);    
        
    $('#contFormulario').show();
}

function modificar(e){
    $('#contSpinner').show();
    // //Cambio el formato de la fecha de '2019-05-17' a '17/05/2019'
    // var fechaModificada = ($('dateFecha').value).split("-"),
    //     turno = $("radMañana").checked ? "Mañana" : "Noche",
    //     objetoAEnviar = {
    //     id:parseInt(filaSeleccionada.getAttribute("id")),
    //     nombre: $("txtNombre").value,
    //     cuatrimestre: parseInt($("selectCuatri").value),
    //     fechaFinal: `${fechaModificada[2]}/${fechaModificada[1]}/${fechaModificada[0]}`,
    //     turno: turno 
    // };
    // xhttp.onreadystatechange = callback;
    // xhttp.open("POST", "http://localhost:3000/editar", true);
    // xhttp.setRequestHeader("Content-Type", "application/json");
    // xhttp.send(JSON.stringify(objetoAEnviar));
    
    // function callback(){
    //     if (xhttp.readyState == 4 && xhttp.status == 200) {
    //         var respuesta = JSON.parse(xhttp.responseText);
    //         if(respuesta.type == "ok"){
    //             filaSeleccionada.children[1].textContent = objetoAEnviar.nombre;
    //             filaSeleccionada.children[3].textContent = objetoAEnviar.fechaFinal;
    //             filaSeleccionada.children[4].textContent = objetoAEnviar.turno;
    //         }
    //         mostrarSpinner(true);
    //         mostrarFomulario(true);
    //     }
    // }
}