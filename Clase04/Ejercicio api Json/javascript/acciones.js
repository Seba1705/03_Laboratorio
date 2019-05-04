window.addEventListener("load", function(){         //Funcion anonima
    var btnAgregar = $("btn");
    btnAgregar.addEventListener("click", agregar);
})

function $(id)
{
    var elemento = document.getElementById(id);
    return elemento;
}
//verificar si localstorage es null cargo la lista del servidor, si no sigo con esa
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
        var per = xhttp.responseText;
        console.log(per);
        localStorage.setItem("Personas",JSON.stringify(per));
        var obj = JSON.parse(per);
        
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
            elementLink.setAttribute("href","#");
            elementLink.addEventListener("click", borrar);
        }

        function borrar(e){
            console.log("Borrado");
            
        }
    }   
}

// function llenarGrilla(per){
//     var tCuerpo = document.getElementById("tbody");
//     var personas = JSON.parse(per);
//     for(var i=0; i<personas.length;i++){
//         var row = document.createElement("tr");
//         var obj = personas[i];
//         var columns = Object.keys(obj);
        
//         for(var j=0;j<columns.length;j++){
//             var cel = document.createElement("td");
//             var text = document.createTextNode(obj[columns[j]]);
//             col.appendChild(text);
//             row.appendChild(cel);
//         }
//         var cel = document.createElement("td");
//         var link = document.createElement("a");
//         link.setAttribute("href","#")
//         link.addEventListener("click", borrar);
//         var text = document.createTextNode("borrar");
//         link.appendChild(text);
//         cel.appendChild(link);
//         row.appendChild(cel);

//         tCuerpo.appendChild(row);
//     }
// }    

// function borrar(){

// }