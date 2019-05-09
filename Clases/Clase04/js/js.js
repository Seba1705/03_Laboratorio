// //crear variable
// var xhttp = new XMLHttpRequest();
// //Escuchamos la respuesta pasando un callback
// xhttp.onreadystatechange = callback;
// //open - abrir coneccion con esa ruta
// xhttp.open("GET","http://192.168.2.28:3000/loginUsuario",true);
// xhttp.send();


window.addEventListener("load",function(){
    var btn = $("btn");
    btn.addEventListener("click", operar)
});

function $(id){
    var element = document.getElementById(id);
    return element;
}

function operar(){
    var usr = $("usr").value;
    var pass = $("1234").value;

    if(usr == "" || pass == "") 
        alert("Faltan datos");
    else{
        var xhttp = new XMLHttpRequest();
        var peticion = "?usr="+usr+"&pass="+pass;
        xhttp.onreadystatechange = callback;
        // xhttp.open("GET","http://192.168.2.28:3000/loginUsuario"+peticion,true); Metodo GET
        xhttp.open("POST","http://192.168.2.28:3000/loginUsuario",true)
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(peticion);  
        
        function callback(){
            if(xhttp.readyState === 4 && xhttp.status === 200){
                // console.log("Llego la repuesta del servidor", xhttp.readyState, xhttp.status, xhttp.responseText);
                var resp = xhttp.responseText;
                if(resp == "true")
                    alert("Login ok");
                else
                    alert("Error al loguear");
            }   
            // else
            //     alert("Error del servidor " + xhttp.status);
        }
    }   
}

// var str = '{nombre:"Nicolas",apellido:"Aguirre"}';
// var object = {}; //json - objeto
// var array = []; //array
// var persona = {nombre:"Seba",apellido:"Aguirre",edad:"28"}; //json
// var personas = [{nombre:"Seba",apellido:"Aguirre",edad:"28"},{nombre:"Juan",apellido:"Perez",edad:"30"}] //array de Json

// JSON.parse(str) // transforma un string a objeto json

