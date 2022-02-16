/*
Casais Dassie, Nicolás
while 7
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;
	let numeroIngresado;

	contador=0;
	acumulador=0;
	respuesta='si'; // 1ra parte del while

	while(respuesta=='si') // 2da parte del while
	{
		contador = contador+1;
		numeroIngresado = prompt("Ingrese el numero (orden "+contador+")");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado;
		respuesta = prompt("Escriba 'si' para continuar")
	}



	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN