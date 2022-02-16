/*
Casais Dassie, Nicolás
while 8
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numeroIngresado;
	let contador;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(respuesta=="si")
	{
		contador = contador+1;
		numeroIngresado = prompt("ingrese un numero:");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado>0)
		{
			sumaPositivos = sumaPositivos+numeroIngresado;
		}
		else
		{
			multiplicacionNegativos = multiplicacionNegativos*numeroIngresado;
		}
		respuesta = prompt("desea continuar?");
	}


	document.getElementById('txtIdSuma').value=sumaPositivos;
	document.getElementById('txtIdProducto').value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN