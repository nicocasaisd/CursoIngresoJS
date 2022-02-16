function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;

	contador=0;
	acumulador=0;

	while(contador<3)
	{
		contador = contador+1;
		numeroIngresado = prompt("Ingrese el número "+contador+":");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador+numeroIngresado;
	}
	
	
	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=acumulador/contador;
}//FIN DE LA FUNCIÓN