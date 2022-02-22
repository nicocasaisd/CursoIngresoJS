/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
/*
function mostrar()
{	// declarar variables
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese el numero:");
		numeroIngresado = parseInt(numeroIngresado);
		if(banderaDelPrimero=="es el primero")
		{
			banderaDelPrimero = "";
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
		}
		else
		{
			if(numeroIngresado>numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
			}
			if(numeroIngresado<numeroMinimo)
			{
				numeroMinimo = numeroIngresado;
			}
		}
		respuesta=prompt("desea continuar?");
	}
	document.getElementById('txtIdMaximo').value=numeroMaximo;
	document.getElementById('txtIdMinimo').value=numeroMinimo;
}//FIN DE LA FUNCIÓN
*/
function mostrar()
{
	let numeroMaximo;
	let numeroMinimo;
	let numeroIngresado;
	let respuesta;
	let banderaDelPrimero=1;
	let i=0;

	numeroMinimo=0;
	numeroMaximo=0;
	respuesta="si";



	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese su numero");
		numeroIngresado = parseInt(numeroIngresado);
		if(banderaDelPrimero==1)
		{
			numeroMinimo=numeroIngresado;
			numeroMaximo=numeroIngresado;
			banderaDelPrimero="";
		}
		else
		{
			if(numeroIngresado<numeroMinimo)
			{
				numeroMinimo = numeroIngresado;
			}
			if(numeroIngresado>numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
			}
		}
		respuesta = prompt("desea continuar?");
	}
	

	document.getElementById('txtIdMaximo').value=numeroMaximo;
	document.getElementById('txtIdMinimo').value=numeroMinimo;
}
