$( () => {
    ocultarSpinner();
    ocultarFormulario();
    realizarPeticionGet(''); //Nombre del servidor
});

const mostrarSpinner = () => $('#contenedor-spinner').show();

const ocultarSpinner = () => $('#contenedor-spinner').hide();

const mostrarFormulario = () => $('#contenedor-formulario').show();

const ocultarFormulario = () => $('#contenedor-formulario').hide();

const realizarPeticionGet = path => {
    const url = `http://localhost:3000/${path}`;
    $.get(url, (data, status) => status === 'success' && cargarDatosEnTabla(data));
};

const realizarPeticionPost = (objeto, path) => {
    const url = `http://localhost:3000/${path}`;
    $.post(url, objeto, (data, status) => status === 'success' ? ocultarSpinner() : console.log(data) );
};

const cargarDatosEnTabla = objetoJson => {
    const tabla = $('#tabla');
    objetoJson.forEach( objeto => tabla.append(crearFila(objeto)));
};

const crearFila = objeto => {
    const fila = document.createElement('tr'),
        { id, foto, nombre, estado } = objeto;
    
    $(fila).attr('id', `fila-${id}`);

    fila.appendChild(crearColumnaConImagen(foto, id));
    fila.appendChild(crearColumnaConTexto(nombre));
    fila.appendChild(crearColumnaConSelect(estado));

    return fila;
};

//Imagen

const crearColumnaConImagen = (source, id) => {
    const columnaConImagen = document.createElement('td');

    columnaConImagen.appendChild(crearEtiquetaImg(source, id));
    columnaConImagen.appendChild(crearInputFile(id));
    
    return columnaConImagen;
};

const crearEtiquetaImg = (source, id) => {
    const etiquetaImg = document.createElement('img');
    
    $(etiquetaImg).attr('src', source);
    $(etiquetaImg).attr('id', `img-${id}`);
    $(etiquetaImg).click(mostrarInputFile);

    return etiquetaImg;
};

//InputFile

const mostrarInputFile = e => {
    let inputFileSeleccionado = e.target.parentNode.lastChild;
    $(inputFileSeleccionado).toggle(600);
};

const crearInputFile = id => {
    const inputFile = document.createElement('input');
    
    $(inputFile).change( function(){     
        if (this.files && this.files[0]) {
            mostrarSpinner();
            let fReader = new FileReader();
            fReader.addEventListener("load", e => {
                let objeto = { id, foto : e.target.result};
                realizarPeticionPost(objeto, '');
                $(`#img-${id}`).attr("src", e.target.result);
            });       
            fReader.readAsDataURL( this.files[0] );
        }
    });
    $(inputFile).attr('id', id);
    $(inputFile).attr("type", "file");
    $(inputFile).hide();
    
    return inputFile;
};

//Texto

const crearColumnaConTexto = elemento => {
    const columnaConTexto = document.createElement('td'),
          contenido = crearTexto(elemento);
    
    columnaConTexto.appendChild(contenido);
    
    return columnaConTexto;
};

const crearTexto = element => document.createTextNode(element);

//Select

const crearColumnaConSelect = element => {
    const columnaConSelect = document.createElement('td'),
          contenido = crearEtiquetaSelect(element)
    
    columnaConSelect.appendChild(contenido);
    
    return columnaConSelect;
};

const crearEtiquetaSelect = element => {
    const select = document.createElement('select');
    
    $(select).html("<option>1</option><option>2</option>");
    $(select).val(element);
    $(select).change(modificarEstado);

    return select;
};

const modificarEstado = () => {
    let id = e.target.parentNode.parentNode.id.split('fila-')[1],
        estado = $(e.target).val(),
        objeto = { id, estado };

    mostrarSpinner();

    realizarPeticionPost(objeto, '');     
}