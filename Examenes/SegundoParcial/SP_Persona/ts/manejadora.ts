
let personas:string[] = localStorage.length > 0 ? JSON.parse(localStorage.getItem('personas')) : [];

$(function(){
    $('#btnAgregar').click(agregarEmpleado);
    $('#btnCancelar').click(limpiarFormulario);
    $('#mostrar').click(mostrarEmpleados);
})

// Agregar: Ɵene que agregar un nuevo empleado y almacenarlo.
function agregarEmpleado():void{
    let nombre = $('#txtName'),
        apellido = $('#txtLastname'),
        edad = $('#inputAge'),
        horario = $('#selHorario'),
        legajo = $('#legajo');

    //Suponiendo que valido los campos
    let empleado = new Personas.Empleado(   String(nombre.val()), 
                                            String(apellido.val()), 
                                            Number(edad.val()), 
                                            String(horario.val()), 
                                            Number(legajo.val()));
    personas.push(empleado.toJson());
    guardar();                                           
}

function limpiarFormulario():void{
    $('#txtName').val('');
    $('#txtLastname').val('');
    $('#inputAge').val('');
    $('#selHorario').val('');
    $('#legajo').val('');
}

function mostrarEmpleados(e:any):void{
    e.preventDefault();
    const tBody = $('#tBody');
    tBody.html('');
    personas.forEach(element => {
        let empleado = JSON.parse(element);
        tBody.append(
            `<tr>
                <td>${empleado.nombre}</td>
                <td>${empleado.apellido}</td>
                <td>${empleado.edad}</td>
                <td>${empleado.legajo}</td>
                <td>${empleado.horario}</td>
                <td>
                    <a href="#" onClick="eliminar(${empleado.legajo})"><i class="fas fa-trash-alt mr-2"></i></a> 
                    <a href="#" onClick="modificar(${empleado.legajo})"><i class="fas fa-edit ml-2"></i></a>
                </td>
            </tr>`
        );
    });
}

function modificar(i:number):void{
    console.log(`Modificar ${i}`);
}

// Eliminar: Debe eliminar el empleado tanto de la tabla como del lugar de almacenamiento.
function eliminar(i:number, e:any):void{
    console.log(`Eliminar ${i}`);
}

function filtrarPorHorario():void{

}

function promedioEdadPorHorario():void{

}

function guardarEnLoalStorage(empleado:Personas.Empleado):void{
  
}

const guardar = () => {
    localStorage.setItem('personas', JSON.stringify(personas));
}

const arrayObjetos = () => {
    const retorno: any[] = [];
    personas.forEach(element => {
        retorno.push(JSON.parse(element));
    });
    return retorno;
}