/*3. Se ingresa por medio de una ventana de tipo ‘prompt’ un número y se mostrará en una
ventana de tipo ‘alert’ un mensaje como el siguiente:
El número 5 es impar, siendo 5 el número ingresado.
Nota: Realizar la función que determine si un número es par o impar.*/

var num = prompt("Ingrese un numero");
validar(num);function validar(numero)
{
    if(numero % 2 === 0)
        alert("Es par");
    else
        alert("Es impar");    
}