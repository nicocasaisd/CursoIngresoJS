/*
Casais Dassie, Nicolás
while 10

Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos;
	let sumaPositivos;
	let cantidadPositivos;
	let cantidadNegativos;
	let cantidadCeros;
	let cantidadPares;
	let promedioPositivos;
	let promedioNegativos;
	let diferenciaPositivosNegativos;

	promedioNegativos = 0;
	promedioPositivos = 0;
	cantidadPares = 0;
	cantidadCeros = 0;
	cantidadPositivos = 0;
	cantidadNegativos = 0;
	sumaNegativos = 0;
	sumaPositivos = 0;
	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese numero");
		numeroIngresado = parseInt(numeroIngresado);
		if(numeroIngresado<0)
		{
			sumaNegativos = sumaNegativos + numeroIngresado;
			cantidadNegativos = cantidadNegativos+1;
		}
		else
		{
			if(numeroIngresado>0)
			{
				sumaPositivos += numeroIngresado;
				cantidadPositivos = cantidadPositivos+1;
			}
			else
			{
				cantidadCeros=cantidadCeros+1;
			}
		}
		if(numeroIngresado%2==0 && numeroIngresado!=0)
		{
			cantidadPares=cantidadPares+1;
		}

		respuesta=prompt("desea continuar?");
	}//fin del while

	if(cantidadPositivos!=0)
	{
		promedioPositivos=sumaPositivos/cantidadPositivos;
	}
	if(cantidadNegativos!=0)
	{
		promedioNegativos=sumaNegativos/cantidadNegativos;
	}
	
	diferenciaPositivosNegativos=sumaPositivos-sumaNegativos;

	document.write("<br> la suma de negativos es: "+sumaNegativos);
	document.write("<br> la suma de positivos es: "+sumaPositivos);
	document.write("<br> la cantidad de positivos es: "+cantidadPositivos);
	document.write("<br> la cantidad de negativos es: "+cantidadNegativos);
	document.write("<br> la cantidad de ceros es: "+cantidadCeros);
	document.write("<br> la cantidad de pares es: "+cantidadPares);
	document.write("<br> el promedio de positivos es: "+promedioPositivos);
	document.write("<br> el promedio de negativos es: "+promedioNegativos);
	document.write("<br> la diferencia entre positivos y negativos es: "+diferenciaPositivosNegativos);
}//FIN DE LA FUNCIÓN