var animales:Array<animal.Animal> = new Array(),
    animalSeleccionado = "";
    

function agregar(){
    let name = String($('#txtName').val());    
    let animalNuevo = (animalSeleccionado == 'Perro') ? new animal.Perro(name) : new animal.Gato(name);
    animales.push(animalNuevo);
    // vaciar name
}   

function modificar(){
    console.log('Modificar');
}

function eliminar(){
    console.log('Eliminar');
}

function listar(){
    console.log('Animales');
    animales.forEach(element => {
        console.log(element.hacerRuido());
    });
}


$(function(){
    $('#btn-agregar').click(agregar);
    $('#btn-modificar').click(modificar);
    $('#btn-eliminar').click(eliminar);
    $('#btn-listar').click(listar);
    $('#sel-animal').change(function(){
        animalSeleccionado = String($(this).val());
        console.log(animalSeleccionado);
    })
});