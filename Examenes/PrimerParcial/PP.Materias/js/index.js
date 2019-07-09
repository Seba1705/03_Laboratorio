const urlGet = 'http://localhost:3000/materias',
      urlPostEliminar = 'http://localhost:3000/eliminar',
      urlPostMofificar = 'http://localhost:3000/editar';
let filaSeleccionada = '';  

$(() => {
    ocultarFormulario();
    mostrarSpinner();
    $.get(urlGet, (data, status) => status === 'success' && cargarGrilla(data));
    $('#btn-modificar').click(modificar);
    $('#btn-eliminar').click(eliminar);
});

const mostrarSpinner = () => $('#contenedor-spinner').show();

const ocultarSpinner = () => $('#contenedor-spinner').hide();

const mostrarFormulario = () => $('#contenedor-formulario').show();

const ocultarFormulario = () => $('#contenedor-formulario').hide();

const cargarGrilla = data => {
    // console.log(data);   
    ocultarSpinner();
    const tabla = $('#tabla');
    data.forEach(element => tabla.append(crearFila(element)));
};

const crearFila = objeto => {
    // console.log(objeto);
    const fila = document.createElement('tr');
    $(fila).attr('id',objeto['id']);
    fila.appendChild(crearColumna(crearTexto(objeto['nombre'])));
    fila.appendChild(crearColumna(crearTexto(objeto['cuatrimestre'])));
    fila.appendChild(crearColumna(crearTexto(objeto['fechaFinal'])));
    fila.appendChild(crearColumna(crearTexto(objeto['turno'])));
    $(fila).dblclick(dobleClick);
    return fila;
};

const crearColumna = element => {
    const columna = document.createElement('td');
    columna.appendChild(element);
    return columna;
};

const crearTexto = element => document.createTextNode(element);

const dobleClick = e => {
    mostrarFormulario();
    let hijos = e.target.parentNode.children,
        fecha = parsearFecha($(hijos[2]).html());
    $('#nombre').val($(hijos[0]).html());
    $('#cuatrimestre').val($(hijos[1]).html());
    $('#fecha').val(fecha);
    $(hijos[3]).html() === 'Noche' && $('#turno-noche').attr("checked","checked");
    filaSeleccionada = e.target.parentNode.id;
};

const parsearFecha = fecha => {
    let parts = fecha.split('/');
    return (`${parts[2]}-${parts[1]}-${parts[0]}`);
}

const modificar = e => {
    mostrarSpinner();
    let objeto = {
        id : $(`#${filaSeleccionada}`).attr('id'),
        nombre : $('#nombre').val(),
        cuatrimestre : $('#cuatrimestre').val(),
        fechaFinal : fechaToString($('#fecha').val()),
        turno : document.querySelector('#turno-noche').checked ? 'Noche' : 'Mañana'
    }
    $.post(urlPostMofificar, objeto, data => data.type === 'ok' && modificarGrilla(objeto));
    ocultarFormulario();
}

const modificarGrilla = element => {
    let fila = $(`#${filaSeleccionada}`),
    elementosDeFilaSeleccionada = fila[0].children;
    $(elementosDeFilaSeleccionada[0]).html(element.nombre);
    $(elementosDeFilaSeleccionada[2]).html(element.fechaFinal);
    $(elementosDeFilaSeleccionada[3]).html(element.turno);
    ocultarSpinner();
}

const fechaToString = fecha => {
    let parts = fecha.split('-');
    return (`${parts[2]}/${parts[1]}/${parts[0]}`);
}

const eliminar = () => {
    mostrarSpinner();
    ocultarFormulario();
    let objeto = { id : filaSeleccionada }
    $.post(urlPostEliminar, objeto, (data, status) => status === 'success' ? eliminarFila() : console.log(data));
};

const eliminarFila = () => {
    $(`#${filaSeleccionada}`).remove();
    ocultarSpinner();
}