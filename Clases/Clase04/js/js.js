window.addEventListener("load",loadEvents);

function loadEvents(){
    var btn = $("btn");
    btn.addEventListener("click", operar);
}

function $(id){
    return document.getElementById(id);
}

var xhttp = new XMLHttpRequest();
var servidor = "http://192.168.2.28:3000/loginUsuario";
var respuestaDelServidor;

function operar(){
    var usr = $("usr").value;
    var pass = $("pass").value;
    //console.log(`${usr} ${pass}`);
    if(usr == "" || pass == "") 
        alert("Faltan datos");
    else{
        var peticion = `?usr=${usr}&pass=${pass}`;
        xhttp.onreadystatechange = callback;
        xhttp.open("POST", servidor, true)
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(peticion);  
        console.log(peticion);
        function callback(){
            if(xhttp.readyState === 4 && xhttp.status === 200){
                respuestaDelServidor = xhttp.responseText;
                console.log(respuestaDelServidor);
            }   
        }
    }   
}


