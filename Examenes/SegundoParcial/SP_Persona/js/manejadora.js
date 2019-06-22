"use strict";
$(function () {
    $('#btnAgregar').click(agregarEmpleado);
    $('#btnCancelar').click(limpiarFormulario);
    $('#mostrar').click(mostrarEmpleados);
});
function agregarEmpleado() {
    var nombre = $('#txtName'), apellido = $('#txtLastname'), edad = $('#inputAge'), horario = $('#selHorario'), legajo = $('#legajo');
    //Suponiendo que valido los campos
    var empleado = new Personas.Empleado(String(nombre.val()), String(apellido.val()), Number(edad.val()), String(horario.val()), Number(legajo.val()));
    guardarEnLoalStorage(empleado);
}
function limpiarFormulario() {
    $('#txtName').val('');
    $('#txtLastname').val('');
    $('#inputAge').val('');
    $('#selHorario').val('');
    $('#legajo').val('');
}
function mostrarEmpleados(e) {
    e.preventDefault();
    var tBody = $('#tBody');
    for (var i = 0, n = localStorage.length; i < n; i++) {
        var item = String(localStorage.key(i)), empleadoAuxiliar = createTr(localStorage.getItem(item));
        // console.log(localStorage.getItem(item));
        tBody.append(empleadoAuxiliar);
    }
}
function createTr(jsonEmpleado) {
    var trName = document.createElement('td'), trLastname = document.createElement('td'), trAge = document.createElement('td'), trLegajo = document.createElement('td'), trHorario = document.createElement('td'), row = document.createElement('tr');
    return row;
}
function modificar(i) {
    var empleado = localStorage.getItem(String(i));
    console.log(empleado);
}
function eliminar(i) {
}
function filtrarPorHorario() {
}
function promedioEdadPorHorario() {
}
function guardarEnLoalStorage(empleado) {
    localStorage.setItem(String(empleado.Legajo), empleado.toJson());
}
