/*
5. Realizar una página que solicite (por medio de una ventana prompt) un número. Si el
número es positivo, se mostrará el factorial de ese número, caso contrario se volverá a
pedir el ingreso de un número positivo.
*/


var i = true;
while(i)
{
    var num = prompt("Ingrese un numero");
    if(parseInt(num) && num > 0)
    {
        alert("El factorial de " + num + " es " + factorial(num));
        i = false;
    } 
    else
        alert("Ingrese un numero positivo");
}

function factorial (n) 
{
    var total = 1; 
    for (i=1; i<=n; i++) 
    {
        total = total * i; 
    }
        return total; 
}