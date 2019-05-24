var filaSeccionada = null;

function mostrarSpinner(){
    $('#contSpinner').show();
}

function mostrarFormulario(){
    $('#contFormulario').show();
}

function ocultarSpinner(){
    $('#contSpinner').hide();
}

function ocultarFormulario(){
    $('#contFormulario').hide();
}

$(document).ready(function(){
    $.get("http://localhost:3000/materias",function(data){
        cargarGrilla(data);
    }); 
    $('#btnModificar').click(modificar);
    $('#btnEliminar').click(eliminar);   
});

function cargarGrilla(listaDeElemntosACargar){
    // var tCuerpo = document.getElementById("tBody"),
    //     cantidadDeElemtos = listaDeElemntosACargar.length;
    // for(var i=0; i<cantidadDeElemtos;i++){
    //     var row = document.createElement("tr"),
    //         obj = listaDeElemntosACargar[i],
    //         columns = Object.keys(obj);
        
    //     for(var j=0; j<columns.length; j++){
    //         var cel = document.createElement("td"),
    //             text = document.createTextNode(obj[columns[j]]);
    //         cel.appendChild(text);
    //         row.appendChild(cel);
    //     }
    //     row.addEventListener("dblclick", abrirConDobleClick);
    //     row.setAttribute("id", `${i+1}`);
    //     tCuerpo.appendChild(row);
    // }
}

function abrirConDobleClick(e){
    // //Selecciono la fija
    // filaSeleccionada = e.target.parentNode;
    // //Obtengo un array con los hijos
    // var elementosDeLaFila = filaSeleccionada.children;
    
    // //Cargo datos en el formulario
    // $("#txtNombre").val(elementosDeLaFila[1].textContent);
    // $("#selectCuatri").val(elementosDeLaFila[2].textContent);
    // if(elementosDeLaFila[4].textContent == "Noche")
    //     $('#radNoche').prop('checked', true);   
    // var fecha = elementosDeLaFila[3].textContent,
    //     fechaModificada = fecha.split('/');
    // $('#dateFecha').val(`${fechaModificada[2]}-${fechaModificada[1]}-${fechaModificada[0]}`);    
        
    // mostrarFormulario();
}

function modificar(){
    // mostrarSpinner();
    // //Cambio el formato de la fecha de '2019-05-17' a '17/05/2019'
    // var fechaModificada = ($('#dateFecha').val()).split("-"),
    //     turno = $("radMañana").checked ? "Mañana" : "Noche",
    //     objetoAEnviar = {
    //     id:parseInt(filaSeleccionada.getAttribute("id")),
    //     nombre: $("#txtNombre").val(),
    //     cuatrimestre: parseInt($("#selectCuatri").val()),
    //     fechaFinal: `${fechaModificada[2]}/${fechaModificada[1]}/${fechaModificada[0]}`,
    //     turno: turno 
    // };
    // $.post("http://localhost:3000/editar", objetoAEnviar, function(data){
    //     // console.log(data.type)
    //     if(data.type == "ok" ){
    //         filaSeleccionada.children[1].textContent = objetoAEnviar.nombre;
    //         filaSeleccionada.children[3].textContent = objetoAEnviar.fechaFinal;
    //         filaSeleccionada.children[4].textContent = objetoAEnviar.turno;
    //     }
    //     ocultarFormulario();
    //     ocultarSpinner();
    // });
}

function eliminar(){
    // mostrarSpinner();
    // var obj = { id : parseInt(filaSeleccionada.getAttribute("id"))};

    // $.post( "http://localhost:3000/eliminar", obj, function(data){
    //     if(data.type == "ok"){
    //         filaSeleccionada.parentNode.removeChild(filaSeleccionada);
    //         console.log("Eliminado");
    //     }
    //     ocultarFormulario();
    //     ocultarSpinner();
    // });
}