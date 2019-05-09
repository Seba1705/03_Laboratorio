//EVENTOS
window.onload = carga;

function validarUsuario()
{
    var contraseña = document.getElementById("usrPass");
    var usuario = document.getElementById("usrPass");
    if(usuario.value === "seba" && contraseña.value === "seba")
        alert("Correcto");
    else
        alert("Incorrecto");
}                         

function carga()
{
    document.getElementById("btn").addEventListener("click",validarUsuario);
    document.getElementById("btn").addEventListener("click",function(){alert("Funcion");});
    document.getElementById("btn").removeEventListener("click",validarUsuario);
}          
                            
                    
