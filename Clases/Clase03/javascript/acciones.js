window.addEventListener("load", function(){         //Funcion anonima
    var btnGuardar = $("btnGuardar");
    btnGuardar.addEventListener("click", guardar);
    var btnCerrar = $("btnCerrar");
    btnCerrar.addEventListener("click", cerrar);
    var btnAbrir = $("btnAbrir");
    btnAbrir.addEventListener("click", abrir);

})

function $(id)
{
    var elemento = document.getElementById(id);
    return elemento;
}

function guardar()
{
    var name = $("name").value;
    var lastname = $("lastname").value;
    if(name == "" || lastname == "")
    {
        alert("Ingrese nombre y apellido");
        $("name").classname = "error";
        $("lastname").classname = "error";
        return;
    }
    if(confirm("Seguro desea agregar persona?") == true)
    {
        $("name").classname = "sinError";
        $("lastname").classname = "sinError";
        var tbody = $("tbody");
        tbody.innerHTML += "<tr><td>"+ name+"</td>"+"<td>"+ lastname+"</td>"+"<td>"+"<a href=''>borrar</a>" + "</td></tr>";
    }
}

function abrir(){
    var contAgregar = $("frm");
    var btn = $("btnAbrir");
    btn.hidden = true;
    contAgregar.hidden = false;

}

function cerrar(){
    var contAgregar = $("frm");
    var btnA = $("btnAbrir");
    btnA.hidden = false;
    contAgregar.hidden = true;
}