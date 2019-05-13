//Declaro variables 
var xhttp = new XMLHttpRequest(),
    arrElemntos = [];
    idActual = "";

//Buscar elemntos por id
function $(id){
    return document.getElementById(id);
}

//Asigno manejadores de eventos
window.addEventListener("load", loadEvents);

function loadEvents(){
    var btnModificar = $("btnModificar"),
        btnEliminar = $("btnEliminar");
    btnModificar.addEventListener("click", modificar);
    btnEliminar.addEventListener("click", eliminar);
    taerElementosDelServidor();
    mostrarSpinner(false);
}

//Funcion Cargar Grilla
function cargarGrilla(listaDeElemntosACargar){
    var tCuerpo = $("tBody"),
        cantidadDeElemtos = arrElemntos.length;
    for(var i=0; i<cantidadDeElemtos;i++){
        var row = document.createElement("tr"),
            obj = arrElemntos[i],
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

//Funcion Trae Elementos
function taerElementosDelServidor(){
    xhttp.onreadystatechange = callback;
    xhttp.open("GET", "http://localhost:3000/materias", true);
    xhttp.send();

    function callback(){
        if (xhttp.readyState === 4 && xhttp.status === 200){
            var respuestaDelServidor = xhttp.responseText;
            arrElemntos = JSON.parse(respuestaDelServidor);
            cargarGrilla(arrElemntos);
            mostrarSpinner(true);
        }
    }
}

//Funcion Que muesta los datos de una fila
function abrirConDobleClick(e){
    e.preventDefault();
    mostrarFomulario(false);
    idActual = event.target.parentNode.getAttribute('id').split("_")[1];
    var elemento = buscarPorId(idActual);

    //Carga de datos
    $("txtNombre").value = elemento.nombre; //Nombre
    $("selectCuatri").value = elemento.cuatrimestre; //Cuatrimestre
    $("selectCuatri").disabled = true;
    var turno = $("radNoche");
    if(elemento.turno == "Noche"){ //Turno
        turno.checked = true;
    }
    $("dateFecha").value = cambiarFormatoFecha(elemento.fechaFinal);
}

//Funciones Modificar
function modificar(e){
    e.preventDefault();
    mostrarSpinner(false);
    xhttp.onreadystatechange = callback;
    xhttp.open("POST", "http://localhost:3000/editar", true);
    xhttp.setRequestHeader("Content-Type", "application/json");   
    var obj = crearObjetoModificado();
    xhttp.send(JSON.stringify(obj));
    function callback(){
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var respuestaDelServidorPost = JSON.parse(xhttp.responseText);
            if(respuestaDelServidorPost.type == "ok"){
                arrElemntos[idActual - 1] = obj;
                var nuevaLista = arrElemntos;
                mostrarSpinner(true);
                mostrarFomulario(true);
                //Actualizar grilla sin recargar
            }   
        }
    }
}

//Crea el objeto que sera enviado por POst
function crearObjetoModificado(){
    var turno = $("radMañana").checked ? "Mañana" : "Noche";
    var objAEnviar = {
        "id": parseInt(idActual),
        "nombre": $("txtNombre").value,
        "cuatrimestre": parseInt($("selectCuatri").value),
        "fechaFinal": validarFechaInput($("dateFecha").value),
        "turno": turno
    }
    return objAEnviar;
}

//Funcion que busca po Id
function buscarPorId(id)
{
    for(var i=0; i<arrElemntos.length; i++){
        if(arrElemntos[i].id == id){
            return arrElemntos[i];
        }
    }
}

//Funcion para cambiar el formato a la fecha
function cambiarFormatoFecha(fecha){
    var dia = fecha[0] + fecha[1],
        mes = fecha[3] + fecha[4],
        anio = fecha[6] + fecha[7] + fecha[8] + fecha[9],
        retorno = `${anio}-${mes}-${dia}`;
    return retorno;
}

//Cambia guines por barras
function validarFechaInput(date){
    var fecha = date.split("-"),
        fechaFormateada = fecha[2]+"/"+fecha[1]+"/"+fecha[0];  
    return fechaFormateada; 
}

//Funcion que muestra el Spinner
function mostrarSpinner(estado){
    var spinner = $("contSpinner");
    spinner.hidden = estado;
}

//Mostrar Formualrio
function mostrarFomulario(estado){
    var contenedor = $("contFormulario");
    contenedor.hidden = estado;
}

//Funcion eliminar
function eliminar(){

}
