
$(function(){
    $('#btnAgregar').click(agregarEmpleado);
    $('#btnCancelar').click(limpiarFormulario);
    $('#mostrar').click(mostrarEmpleados);
})

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
    guardarEnLoalStorage(empleado);
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
    let tBody = $('#tBody');
    for(let i=0, n=localStorage.length; i<n;i++){
        let item = String(localStorage.key(i)),
            empleadoAuxiliar = createTr(localStorage.getItem(item));
        // console.log(localStorage.getItem(item));
        tBody.append(empleadoAuxiliar);
    }
}

function createTr(jsonEmpleado:any):any{
    let trName = document.createElement('td'),
        trLastname = document.createElement('td'),
        trAge = document.createElement('td'),
        trLegajo = document.createElement('td'),
        trHorario = document.createElement('td'),
        row = document.createElement('tr');
        
    
    
    return row;
}

function modificar(i:number):void{
    let empleado = localStorage.getItem(String(i));
    console.log(empleado);
}

function eliminar(i:number):void{

}

function filtrarPorHorario():void{

}

function promedioEdadPorHorario():void{

}

function guardarEnLoalStorage(empleado:Personas.Empleado):void{
    localStorage.setItem(String(empleado.Legajo), empleado.toJson());
}

