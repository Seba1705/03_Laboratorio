/*
9. Se necesita hacer una página que contenga dos cuadros de texto (dónde se ingresarán
números), un botón (con la leyenda ‘Calcular’) y cuatro controles de tipo ‘radioButton’
(suma, resta, multiplicación y división). Cuando se pulsa el botón una función deberá
mostrar el resultado, de acuerdo al tipo de operación que el usuario eligió. Utilizar la
estructura ‘switch’.
*/

window.addEventListener("load", function(){         //Funcion anonima
    var btnOperar = $("btnOperar");
    btnOperar.addEventListener("click", operar);
})

function $(id){
    var elemento = document.getElementById(id);
    return elemento;
}

function operar(){
    var num1 = parseInt($("num1").value);
    var num2 = parseInt($("num2").value);
    var resultado;
    
    switch(true)
    {
        case document.getElementById("suma").checked:
          resultado = num1 + num2;
            break;
        case document.getElementById("resta").checked:
         resultado = num1 - num2;
            break;
        case document.getElementById("multiplicacion").checked:
            resultado = num1 * num2;
            break;
        case document.getElementById("division").checked:
            if(num2 != 0)
                resultado = num1 / num2;
            break;
    }

    $("resultado").value = resultado;
}