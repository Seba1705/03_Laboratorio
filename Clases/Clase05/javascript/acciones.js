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
    var localhost = "http://localhost:3000/personas";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = callback;
    xhttp.open("GET", localhost, true);
    xhttp.send();
    function callback(){
        if(xhttp.readyState === 4 && xhttp.status === 200)
        {
            var respuestaSeridor = xhttp.responseText;
            if(localStorage.getItem("Personas") == null){
                localStorage.setItem("Personas",JSON.stringify(respuestaSeridor));
            }
            var tCuerpo = document.getElementById("tbody");
            var personas = JSON.parse(respuestaSeridor);
            for(var i=0; i<personas.length;i++){
                var row = document.createElement("tr");
                row.addEventListener("dblclick", cargar);
                var obj = personas[i];
                var columns = Object.keys(obj);
                
                for(var j=0; j<columns.length; j++){
                    var cel = document.createElement("td");
                    var text = document.createTextNode(obj[columns[j]]);
                    cel.appendChild(text);
                    row.appendChild(cel);
                }
                var cel = document.createElement("td");
                var link = document.createElement("a");
                link.setAttribute("href","#")
                link.addEventListener("click", borrar);
                var text = document.createTextNode("borrar");
                link.appendChild(text);
                cel.appendChild(link);
                row.appendChild(cel);
                tCuerpo.appendChild(row);
            }
        }   
    }
}

function borrar(e){
   e.preventDefault();
   var filaAEliminar = e.target.parentNode.parentNode;
   filaAEliminar.parentNode.removeChild( filaAEliminar);
   
}

function cargar(event){

    var hijos = event.target.parentNode.children;
    console.log(hijos);
    for(var i=0; i<hijos.length;i++){
        console.log(hijos[i].innerHTML);
        
    }

}