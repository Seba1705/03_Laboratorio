$(() => {
    mostrarSpinner();
    $.get('http://localhost:3000/personajes', (data, status) =>{
        if(status === 'success'){
            cargarGrilla(data);
            ocultarSpinner();
        }
    });
});

const mostrarSpinner = () => $('#contenedor-spinner').show();

const ocultarSpinner = () => $('#contenedor-spinner').hide();

const cargarGrilla = (data) => {
    const tabla = $('#tabla');
    data.forEach(element => {
        tabla.append(crearFila(element));
    });
};

const crearFila = (objeto) => {
    const   fila = document.createElement('tr');
    $(fila).attr('id', `fila-${objeto['id']}`);
    fila.appendChild(crearColumnaImg(objeto['id'], objeto['foto']));
    fila.appendChild(crearColumna(crearTexto(objeto['nombre'])));
    fila.appendChild(crearColumna(crearTexto(objeto['apellido'])));
    fila.appendChild(crearColumna(crearSelect(objeto['estado'])));
    return fila;
};

const crearColumnaImg = (id, source) => {
    const columa = document.createElement('td');
    columa.appendChild(crearImagen(id,source));
    columa.appendChild(crearInputFile(id));
    return columa;
};

const crearImagen = (id,source) => {
    const etiquetaImg = document.createElement('img');
    $(etiquetaImg).attr('src', source);
    $(etiquetaImg).attr('id', `img-${id}`);
    $(etiquetaImg).click(mostrarInputFile);
    return etiquetaImg;
};

const mostrarInputFile = (e) => {
    $(e.target.parentNode.lastChild).toggle(600);
}

const crearInputFile = (id) => {
    const inputFile = document.createElement('input');
    $(inputFile).change(function(){     
        if (this.files && this.files[0]) {
            mostrarSpinner();
            let fReader = new FileReader();
            fReader.addEventListener("load", function(e) {
                let objeto = { id: id, foto : e.target.result};
                cambiarFotoPost(objeto);
                $(`#img-${id}`).attr("src",e.target.result);
            }); 
            fReader.readAsDataURL( this.files[0] );
        }
    });
    $(inputFile).attr('id', id);
    $(inputFile).attr("type", "file");
   
    $(inputFile).hide();
    return inputFile;
};

const cambiarFotoPost = objeto => {
    $.post("http://localhost:3000/editarFoto", objeto, (data, status) => status === 'success' && ocultarSpinner());
}

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
    mostrarSpinner();
    let id = e.target.parentNode.parentNode.id.split('fila-')[1],
        estado = $(e.target).val();
    $.post('http://localhost:3000/editarEstado',  
    { id : id, estado : estado },               
    (data, status) =>  status === 'success' && ocultarSpinner());                        
};

