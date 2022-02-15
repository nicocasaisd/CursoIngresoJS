function mostrar()
{

	let destinoIngresado;
	let mensaje;

	destinoIngresado = document.getElementById('txtIdDestino').value;

	switch(destinoIngresado)
	{
		case "Bariloche":
			mensaje = "OESTE";
		break;
		case "Cataratas":
			mensaje = "NORTE";
		break;
		case "Mar del plata":
			mensaje= "ESTE";
		break;
		case "Ushuaia":
			mensaje = "SUR";
		break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN