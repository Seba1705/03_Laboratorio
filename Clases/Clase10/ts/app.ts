var animales:Array<animal.Animal> = (localStorage.length >= 0) ? cargarArrayDeAnimales() : new Array() ,
    animalSeleccionado = $('#sel-animal').val();
    
function agregar(){
    let name = String($('#txtName').val());    
    if(!!name){
        let animalNuevo = (animalSeleccionado == 'Perro') ? new animal.Perro(name) : new animal.Gato(name);
        animales.push(animalNuevo);
        $('#txtName').val('');
    }else{
        console.log('Falta nombre');
    }
}   

function cargarArrayDeAnimales():Array<animal.Animal>{
    return new Array<animal.Animal>();
}

function modificar(){
    console.log('Modificar');
}

function eliminar(){
    console.log('Eliminar');
}

function listar(){
    console.log('Listar');
    let tBody = $('#tBody');
    tBody.html('');
    animales.forEach(element => {
        let row = createTr(element);
        tBody.append(row);
    });
}

function createTr(animal:animal.Animal):any{
    let trName = document.createElement('td'),
        trType = document.createElement('td'),
        trRuido = document.createElement('td'),
        row = document.createElement('tr');
        
    trName.appendChild(document.createTextNode(animal.Nombre));
    trType.appendChild(document.createTextNode((animal.hacerRuido() === 'Guau!') ? 'Perro' : 'Gato'));
    trRuido.appendChild(document.createTextNode(animal.hacerRuido()));

    row.appendChild(trName);
    row.appendChild(trType);
    row.appendChild(trRuido);

    return row;
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

