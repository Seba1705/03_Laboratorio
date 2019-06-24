"use strict";
var personas = localStorage.length > 0 ? JSON.parse(localStorage.getItem('personas')) : [];
$(function () {
    $('#btnAgregar').click(agregarEmpleado);
    $('#btnCancelar').click(limpiarFormulario);
    $('#mostrar').click(mostrarEmpleados);
});
// Agregar: Ɵene que agregar un nuevo empleado y almacenarlo.
function agregarEmpleado() {
    var nombre = $('#txtName'), apellido = $('#txtLastname'), edad = $('#inputAge'), horario = $('#selHorario'), legajo = $('#legajo');
    //Suponiendo que valido los campos
    var empleado = new Personas.Empleado(String(nombre.val()), String(apellido.val()), Number(edad.val()), String(horario.val()), Number(legajo.val()));
    personas.push(empleado.toJson());
    guardar();
    limpiarFormulario();
}
function limpiarFormulario() {
    $('#txtName').val('');
    $('#txtLastname').val('');
    $('#inputAge').val('');
    $('#legajo').val('');
}
function mostrarEmpleados(e) {
    !!e && e.preventDefault();
    var tBody = $('#tBody');
    tBody.html('');
    personas.forEach(function (element) {
        var empleado = JSON.parse(element);
        tBody.append("<tr>\n                <td>" + empleado.nombre + "</td>\n                <td>" + empleado.apellido + "</td>\n                <td>" + empleado.edad + "</td>\n                <td>" + empleado.legajo + "</td>\n                <td>" + empleado.horario + "</td>\n                <td>\n                    <a href=\"#\" onClick=\"eliminar(" + personas.indexOf(element) + ")\"><i class=\"fas fa-trash-alt mr-2\"></i></a> \n                    <a href=\"#\" onClick=\"modificar(" + personas.indexOf(element) + ")\"><i class=\"fas fa-edit ml-2\"></i></a>\n                </td>\n            </tr>");
    });
}
function modificar(i) {
    console.log("Modificar " + i);
}
// Eliminar: Debe eliminar el empleado tanto de la tabla como del lugar de almacenamiento.
function eliminar(i, e) {
    personas.splice(i, 1);
    guardar();
    mostrarEmpleados();
}
function filtrarPorHorario() {
}
function promedioEdadPorHorario() {
}
var guardar = function () {
    localStorage.setItem('personas', JSON.stringify(personas));
};
