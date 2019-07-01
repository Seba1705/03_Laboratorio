$(() => {
    $.get('http://localhost:3000/personajes', (data, status) =>{
        status === 'success' && cargarGrilla(data);
    });
});

const cargarGrilla = (data) => {
    const tabla = $('#tabla');
    data.forEach(element => {
        tabla.append(crearFila(element));
    });
};

const crearFila = (objeto) => {
    const   fila = document.createElement('tr');
    $(fila).attr('id', `fila-${objeto['id']}`);
    fila.appendChild(crearColumnaImg(crearImagen(objeto['id'], objeto['foto'])));
    fila.appendChild(crearColumna(crearTexto(objeto['nombre'])));
    fila.appendChild(crearColumna(crearTexto(objeto['apellido'])));
    fila.appendChild(crearColumna(crearSelect(objeto['estado'])));
    return fila;
};

const crearColumnaImg = (element) => {
    const columa = document.createElement('td');
    columa.appendChild(element);
    columa.appendChild(crearInputFile());
    return columa;
};

const crearImagen = (id, source) => {
    const etiquetaImg = document.createElement('img');
    $(etiquetaImg).attr('id', id);
    $(etiquetaImg).attr('src', source);
    $(etiquetaImg).click(mostrarInputFile);
    return etiquetaImg;
};

const mostrarInputFile = (e) => {
    $(e.target.parentNode.lastChild).toggle(600);
}

const crearInputFile = () => {
    const inputFile = document.createElement('input');
    $(inputFile).attr("type", "file");
    $(inputFile).change(modificarFoto);
    $(inputFile).hide();
    return inputFile;
};

const modificarFoto = () => {
    console.log('Modificar foto');
};

const crearColumna = (element) => {
    const columa = document.createElement('td');
    columa.appendChild(element);
    return columa;
};

const crearTexto = element => {
    const texto = document.createTextNode(element);
    return texto;
};

const crearSelect = (element) => {
    const select = document.createElement('select');
    $(select).html("<option>Vivo</option><option>Muerto</option>");
    $(select).val(element);
    $(select).change(modificarEstado);
    return select;
};

const modificarEstado = e => {
    console.log('Modificar estado');
};

