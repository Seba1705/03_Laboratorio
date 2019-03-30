window.addEventListener("load", function(){         //Funcion anonima
    var btnSumar = document.getElementById("btnSumar")
    btnSumar.addEventListener("click", sumar);
    var btnGuardar = document.getElementById("btnGuardar")
    btnGuardar.addEventListener("click", sumar);
    btnGuardar.addEventListener("click", guardar);

})

function sumar()
{
    var num1 = document.getElementById("inNum1");
    var num2 = document.getElementById("inNum2");
    var res = document.getElementById("inRes");

    var resultado = parseInt(num1.value) + parseInt(num2.value);
    res.value = resultado;
}

function guardar()
{
    var num1 = document.getElementById("inNum1").value;
    var num2 = document.getElementById("inNum2").value;
    var res = document.getElementById("inRes").value;

    var tbody = document.getElementById("tbody");
    tbody.innerHTML = "<tr><td>"+num1+"</td><td>"+num2+"</td><td>"+res+"</td></tr>";

}