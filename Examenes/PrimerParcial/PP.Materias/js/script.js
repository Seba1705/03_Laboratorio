window.addEventListener("load", loadEvents);

//Buscar elementos por Id
function $(id){
    return document.getElementById(id);
}
//
function loadEvents(){
    traerMateria();
    mostrarSpinner(false);
    //var btn = $("btn").addEventListener("click", enviarSolicitud);
    var btnModificar = $("btnModificar").addEventListener("click", modificar);
    var btnEliminar = $("btnEliminar").addEventListener("click", eliminar);
    var btnCerrar = $("btnCerrar").addEventListener("click", cerrar);
}
//Variables para la conexion
var idActual;
var xhttp = new XMLHttpRequest();
var respuestaDelServidor;
//Funcion para enviar datos al Servidor via POST


function mostrarSpinner(estado){
    var spinner = $("cont-spinner");
    spinner.hidden = estado;
}

//TRAER MATERIAS
function traerMateria(){
    console.log("TRAEER MATERIAS");
    xhttp.onreadystatechange = function(){
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            var materias = JSON.parse(xhttp.responseText); //Puede ser responseXml
            //console.log(xhttp.responseText);
            respuestaDelServidor = JSON.parse(xhttp.responseText);
            var tCuerpo = $("tBody");
            for(var i=0; i<materias.length;i++){

                var row = document.createElement("tr");
                var obj = materias[i];
                var columns = Object.keys(obj);
                
                for(var j=0; j<columns.length; j++){
                    var cel = document.createElement("td");
                    var text = document.createTextNode(obj[columns[j]]);
                    cel.appendChild(text);
                    row.appendChild(cel);
                }
                row.addEventListener("dblclick", editarClick);
                row.setAttribute("id", `col_${i+1}`);
                tCuerpo.appendChild(row);
                mostrarSpinner(true);
            }
        }
    }
    xhttp.open("GET", "http://localhost:3000/materias", true);
    xhttp.send();
}

function cerrar(){
    console.log("cerrar");
    var contedorForm = $("cont-formulario");
    contedorForm.hidden = true;
}

function modificar(){
    var elemento = buscarPorId(idActual);
    xhttp.onreadystatechange = function(){
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var respuestaDelServidorPost = JSON.parse(xhttp.responseText); //Puede ser responseXm
            //console.log(elemento.nombre);
            elemento.nombre = $("textNombre").value
            //elemento.fecha = fecha = $("fecha").value;
            console.log(xhttp.responseText);
            // if(respuestaDelServidorPost.type == "ok")
            // {
            //     console.log("ok");
            // }
        }
    };
    xhttp.open("POST", "http://localhost:3000/editar", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(elemento);

}

function eliminar(){

}

function editarClick()
{
    var contedorForm = $("cont-formulario");
    contedorForm.hidden = false;
    idActual = event.target.parentNode.getAttribute('id').split("_")[1];
    console.log(idActual);
    var elemento = buscarPorId(idActual);
    //console.log(elemento.nombre);
    var nombre = $("textNombre");
    nombre.value = elemento.nombre;
    


    var fechaAcargar = cambiarFecha(new Date(Date.parse(elemento.fechaFinal)));
    var fecha = $("fecha").value;
    
    console.log(`fecha a cargar ${fechaAcargar}`);
    console.log(`la fecha del input es ${fecha}`);
   
    fecha = new Date(Date.parse(fechaAcargar));



    cuatri = $("selectCuatri");
    cuatri.value = elemento.cuatrimestre;
    var turno = $("mañana");
    var turnoNoche = $("noche");
    if(elemento.turno === "Mañana"){
        turno.checked = true;
        turnoNoche = false;
    }
    else{
        turno.checked = false;
        turnoNoche = true;
    }
}

function buscarPorId(id)
{
    for(var i=0; i<respuestaDelServidor.length ; i++){
        if(respuestaDelServidor[i].id == id){
            return respuestaDelServidor[i];
        }
    }
}

function cambiarFecha(fecha){

    var anio = fecha.getFullYear();
    var mes = fecha.getMonth();
    var dia = fecha.getDate();

    return `${anio}-${mes}-${dia}`;

}