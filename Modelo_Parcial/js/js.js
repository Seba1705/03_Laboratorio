window.addEventListener("load",function(){
    var btn = $("btnSingIn");
    btn.addEventListener("click", operar)
});

function $(id){
    var element = document.getElementById(id);
    return element;
}

function operar(){
    var email = $("email").value;
    var pass = $("password").value;
    if(email == "" || pass == "") 
        alert("Faltan datos");
    else{
        var obj = {email:email , password:pass };
        //var datosLogin = JSON.stringify('{ "email":'+email+', "password":'+pass+'}');
        var xhttp = new XMLHttpRequest();
        //var peticion = datosLogin;
        xhttp.onreadystatechange = callback;
        xhttp.open("POST","http://localhost:1337/login",true)
        // xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(JSON.stringify(obj)); 
    }
    function callback(){
        if(xhttp.readyState === 4 && xhttp.status === 200){
            var resp = xhttp.responseText;
            console.log(resp);
            var respJ = JSON.parse(resp);
            if(respJ.autenticado == "si"){
                window.location.href = "../index.html?email="+$("email").value+"&"+"color="+respJ.preferencias.color+"&"+"font"+respJ.preferencias.font;
            }

        }
    }
}

