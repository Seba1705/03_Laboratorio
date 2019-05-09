// BUSCAR ELEMENTOS POR ID
function $(id){
    var element = document.getElementById(id);
    return element;
}

// EVENTO LOAD DE WINDOWS
window.addEventListener("load", function(){
    var btn = $("btn");
    btn.addEventListener("click", operar);
});

function operar(){
    var email = $("email").value;
    var pass = $("pass").value;
    console.log(`${email} ${pass}`);
    if(email == "" || pass ==""){
        alert("Faltan datos");
    }else{
        var datosLogin = {
            email: email,
            password: pass
        };
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = callback;
        xhr.open('POST', 'http://localhost:1337/login', true);
        xhr.send(JSON.stringify(datosLogin));
    
    }
    
    function callback(){
        if(xhr.readyState === 4 && xhr.status === 200){
            var respuestaServidor = xhr.responseText;
            console.log(`Respuesta del servidor: ${respuestaServidor}`);
            var objDatosRecibidos = JSON.parse(respuestaServidor);
            if(objDatosRecibidos.autenticado == "si"){
                //window.location.replace('./index.html');
                window.location.href = `../index.html?email=${$("email").value}&color=${objDatosRecibidos.preferencias.color}&font${objDatosRecibidos.preferencias.font}`;
            }
        }
    }
}

