//Declaro variables 
var xhttp = new XMLHttpRequest(),
    listaDeElemntos = [];
    idActual = "";

//Buscar elemntos por id
function $(id){
    return document.getElementById(id);
}

//Asigno manejadores de eventos
window.addEventListener("load", loadEvents);

function loadEvents(){
    var btnModificar = $("btnModificar");
    btnModificar.addEventListener("click", modificar);
    var btnEliminar = $("btnEliminar");
    btnEliminar.addEventListener("click", eliminar);
    taerElementosDelServidor();
}

//Funcion Cargar Grilla
function cargarGrilla(listaDeElemntosACargar){
    var tCuerpo = $("tBody");
    var cantidadDeElemtos = listaDeElemntos.length;
    for(var i=0; i<cantidadDeElemtos;i++){
        var row = document.createElement("tr");
        var obj = listaDeElemntos[i];
        var columns = Object.keys(obj);
        
        for(var j=0; j<columns.length; j++){
            var cel = document.createElement("td");
            var text = document.createTextNode(obj[columns[j]]);
            cel.appendChild(text);
            row.appendChild(cel);
        }
        row.addEventListener("dblclick", abrirConDobleClick);
        row.setAttribute("id", `col_${i+1}`);
        tCuerpo.appendChild(row);
    }
}

//Funcion Trae Elementos
function taerElementosDelServidor(){
    xhttp.onreadystatechange = callback;
    xhttp.open("GET", "http://localhost:3000/materias", true);
    xhttp.send();

    function callback(){
        if (xhttp.readyState === 4 && xhttp.status === 200){
            var respuestaDelServidor = xhttp.responseText;
            listaDeElemntos = JSON.parse(respuestaDelServidor);
            cargarGrilla(listaDeElemntos);
        }
    }
}

//Funcion Que muesta los datos de una fila
function abrirConDobleClick(e){
    e.preventDefault();
    var contenedor = $("cont-form");
    contenedor.hidden = false;
    idActual = event.target.parentNode.getAttribute('id').split("_")[1];
    var elemento = buscarPorId(idActual);
    // console.log(elemento);
    
    //Carga de datos
    $("textNombre").value = elemento.nombre; //Nombre
    $("selectCuatri").value = elemento.cuatrimestre; //Cuatrimestre
    var turno = $("noche");
    if(elemento.turno == "Noche"){ //Turno
        turno.checked = true;
    }
    var fechaACargar = new Date(cambiarFecha(elemento.fechaFinal)); //Falta cargarlo en el input fecha
    
}

//Funciones Eliminar y Modificar
function eliminar(){

}

function modificar(){

}

//Funcion que busca po Id
function buscarPorId(id)
{
    for(var i=0; i<listaDeElemntos.length; i++){
        if(listaDeElemntos[i].id == id){
            return listaDeElemntos[i];
        }
    }
}

//Funcion para cambiar el formato a la fecha
function cambiarFecha(fecha){
    var dia = fecha[0] + fecha[1];
    var mes = fecha[3] + fecha[4];
    var anio = fecha[6] + fecha[7];

    return (`${mes}/${dia}/${anio}`);
}