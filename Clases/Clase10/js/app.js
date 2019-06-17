"use strict";
var animales = new Array(), animalSeleccionado = $('#sel-animal').val();
function agregar() {
    var name = String($('#txtName').val()), animalNuevo = (animalSeleccionado == 'Perro') ? new animal.Perro(name) : new animal.Gato(name);
    animales.push(animalNuevo);
    $('#txtName').val('');
}
function guardarEnLocalStorage() {
}
function modificar() {
    console.log('Modificar');
}
function eliminar() {
    console.log('Eliminar');
    console.log(localStorage.getItem('Lista'));
}
function listar() {
    var tBody = $('#tBody');
    tBody.html('');
    animales.forEach(function (element) {
        var row = createTr(element);
        tBody.append(row);
    });
}
function createTr(animal) {
    var trName = document.createElement('td'), trType = document.createElement('td'), trRuido = document.createElement('td'), row = document.createElement('tr');
    trName.appendChild(document.createTextNode(animal.Nombre));
    trType.appendChild(document.createTextNode((animal.hacerRuido() === 'Guau!') ? 'Perro' : 'Gato'));
    trRuido.appendChild(document.createTextNode(animal.hacerRuido()));
    row.appendChild(trName);
    row.appendChild(trType);
    row.appendChild(trRuido);
    return row;
}
$(function () {
    $('#btn-agregar').click(agregar);
    $('#btn-modificar').click(modificar);
    $('#btn-eliminar').click(eliminar);
    $('#btn-listar').click(listar);
    $('#sel-animal').change(function () {
        animalSeleccionado = String($(this).val());
        console.log(animalSeleccionado);
    });
});
