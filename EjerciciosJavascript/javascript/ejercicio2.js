/*2. Cree una página que muestre, a través de un Array, los nombres de los meses de un año
y el número al que ese mes corresponde. Utilizar una estructura repetitiva para escribir en
el documento (document.write()).*/
function mostrarMeses()
{
    var meses = ['Enero', 'Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    for(var i=0; i<12; i++)
    {
        document.write(meses[i] + " es el mes " + (i+1) + "<br>");
    }
}
mostrarMeses();
