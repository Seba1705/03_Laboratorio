$(document).ready(function(){
    $.get("http://localhost:3000/materias",function(data){
        cargarGrilla(data);
    });    
});

function cargarGrilla(listaDeElemntosACargar){
    var tCuerpo = document.getElementById("tBody"),
        cantidadDeElemtos = listaDeElemntosACargar.length;
    for(var i=0; i<cantidadDeElemtos;i++){
        var row = document.createElement("tr"),
            obj = listaDeElemntosACargar[i],
            columns = Object.keys(obj);
        
        for(var j=0; j<columns.length; j++){
            var cel = document.createElement("td"),
                text = document.createTextNode(obj[columns[j]]);
            cel.appendChild(text);
            row.appendChild(cel);
        }
        row.addEventListener("dblclick", abrirConDobleClick);
        row.setAttribute("id", `${i+1}`);
        tCuerpo.appendChild(row);
    }
}

function abrirConDobleClick(){

}