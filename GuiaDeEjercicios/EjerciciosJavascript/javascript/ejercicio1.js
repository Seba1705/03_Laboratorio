/*1. Realizar una página que al cargarse muestre los siguientes mensajes:
HOLA MUNDO!!!
Puedo mostrar comillas ‘simples’
Y comillas “dobles”
Nota: El mensaje se mostrará en una sola ventana. Utilice caracteres de escape.*/

window.onload = saludar;
function saludar()
{
    alert("Hola mundo \n Puedo mostrar comillas \'simples\' \n Y comillas \"doble\"");
}