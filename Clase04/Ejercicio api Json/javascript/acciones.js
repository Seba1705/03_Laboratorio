window.addEventListener("load", function(){         //Funcion anonima
    var btnAgregar = $("btn");
    btnAgregar.addEventListener("click", agregar);
})

function $(id)
{
    var elemento = document.getElementById(id);
    return elemento;
}

function agregar(){
    var name;
    var lastname;
    var date;
    var phone;
    var peticion;
    var localhost = "http://localhost:3000/personas";
    var metodo = "GET";
    var body = $("tbody")

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = callback;
    xhttp.open("GET", localhost, true)
    xhttp.send();
    function callback(){
        if(xhttp.readyState === 4 && xhttp.status === 200)
            console.log("Llego la repuesta del servidor");
        var resp = xhttp.responseText;
        console.log(resp);
        var obj = JSON.parse(resp);
        
        for(var i=0; i<Object.keys(obj).length;i++ ){
            name = obj[i].nombre;
            lastname = obj[i].apellido;
            date = obj[i].fecha;
            phone = obj[i].telefono;
            //body.innerHTML += "<tr><td>"+ name+"</td>"+"<td>"+ lastname+"</td>"+"<td>"+ date+"</td>"+"<td>"+ phone+"</td>"+"<td>"+"<a href=''>borrar</a>" + "</td></tr>";
        
            var elementTr = document.createElement("tr");
            body.appendChild(elementTr);
            var elementTd = document.createElement("td");
            elementTr.appendChild(elementTd);
            var elementText = document.createTextNode(name);
            elementTd.appendChild(elementText);

            elementTd = document.createElement("td");
            elementTr.appendChild(elementTd);
            var elementText1 = document.createTextNode(lastname);
            elementTd.appendChild(elementText1);

            elementTd = document.createElement("td");
            elementTr.appendChild(elementTd);
            var elementText4 = document.createTextNode(phone);
            elementTd.appendChild(elementText4);

            elementTd = document.createElement("td");
            elementTr.appendChild(elementTd);
            var elementText2 = document.createTextNode(date);
            elementTd.appendChild(elementText2);

            elementTd = document.createElement("td");
            elementTr.appendChild(elementTd);
            var elementLink = document.createElement("a");
            elementTd.appendChild(elementLink);
            var elementText3 = document.createTextNode("borrar");
            elementLink.appendChild(elementText3);
    }

    }   
}
