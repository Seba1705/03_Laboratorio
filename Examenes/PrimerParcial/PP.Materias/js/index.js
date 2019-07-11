 let filaSeleccionada = '';  

$( () => {
    ocultarFormulario();
    mostrarSpinner();
    realizarPeticionGet();
    $('#btn-modificar').click(modificar);
    $('#btn-eliminar').click(eliminar);
});

const mostrarSpinner = () => $('#contenedor-spinner').show();

const ocultarSpinner = () => $('#contenedor-spinner').hide();

const mostrarFormulario = () => $('#contenedor-formulario').show();

const ocultarFormulario = () => $('#contenedor-formulario').hide();

const realizarPeticionGet = () => {
    const urlGet = 'http://localhost:3000/materias';
    $.get(urlGet, (data, status) => status === 'success' && cargarGrilla(data));
}

const cargarGrilla = data => {
    // console.log(data);   
    ocultarSpinner();
    const tabla = $('#tabla');
    data.forEach(element => tabla.append(crearFila(element)));
};

const crearFila = objeto => {
    // console.log(objeto);
    const fila = document.createElement('tr'),
        { id, nombre, cuatrimestre, fechaFinal, turno } = objeto;

    $(fila).attr('id', id);
    fila.appendChild(crearColumna(nombre));
    fila.appendChild(crearColumna(cuatrimestre));
    fila.appendChild(crearColumna(fechaFinal));
    fila.appendChild(crearColumna(turno));
    $(fila).dblclick(dobleClick);
    return fila;
};

const crearColumna = element => {
    const columna = document.createElement('td'),
          contenido = crearTexto(element);
    columna.appendChild(contenido);
    return columna;
};

const crearTexto = element => document.createTextNode(element);

const dobleClick = e => {
    mostrarFormulario();
    const [nombre, cuatrimestre, fechaFinal, turno ] = e.target.parentNode.children,
        fecha = parsearFecha($(fechaFinal).html());
    $('#nombre').val($(nombre).html());
    $('#cuatrimestre').val($(cuatrimestre).html());
    $('#fecha').val(fecha);
    $(turno).html() === 'Noche' && $('#turno-noche').attr("checked","checked");
    filaSeleccionada = e.target.parentNode.id;
    
};

const parsearFecha = fecha => {
    console.log(fecha)
    let parts = fecha.split('/'),
        [ dia, mes, anio ] = parts;
    return (`${anio}-${mes}-${dia}`);
}

const modificar = e => {
    ocultarFormulario();
    mostrarSpinner();
    let objeto = {
        id : $(`#${filaSeleccionada}`).attr('id'),
        nombre : $('#nombre').val(),
        cuatrimestre : $('#cuatrimestre').val(),
        fechaFinal : fechaToString($('#fecha').val()),
        turno : document.querySelector('#turno-noche').checked ? 'Noche' : 'Mañana'
    }
    peticionPostModificar(objeto);
}

const peticionPostModificar = objeto => {
    const urlPostMofificar = 'http://localhost:3000/editar';
    $.post(urlPostMofificar, objeto, data => data.type === 'ok' && modificarGrilla(objeto));
}

const modificarGrilla = element => {
    let fila = $(`#${filaSeleccionada}`);
    elementosDeFilaSeleccionada = fila[0].children;
    $(elementosDeFilaSeleccionada[0]).html(element.nombre);
    $(elementosDeFilaSeleccionada[2]).html(element.fechaFinal);
    $(elementosDeFilaSeleccionada[3]).html(element.turno);
    ocultarSpinner();
}

const fechaToString = fecha => {
    let parts = fecha.split('-'),
        [ anio, mes, dia ] = parts;
    return (`${dia}/${mes}/${anio}`);
}

const eliminar = () => {
    mostrarSpinner();
    ocultarFormulario();
    let objeto = { id : filaSeleccionada }
    peticionPostEliminar(objeto);
};

const peticionPostEliminar = objeto => {
    let urlPostEliminar = 'http://localhost:3000/eliminar';
    $.post(urlPostEliminar, objeto, (data, status) => status === 'success' ? eliminarFila() : console.log(data));
}

const eliminarFila = () => {
    $(`#${filaSeleccionada}`).remove();
    ocultarSpinner();
}