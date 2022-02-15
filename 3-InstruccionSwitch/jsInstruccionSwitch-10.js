function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;
	let mensaje;

	estacionIngresada = document.getElementById('txtIdEstacion').value;
	destinoIngresado = document.getElementById('txtIdDestino').value;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					mensaje = "Se viaja";
				break;
				default:
					mensaje = "No se viaja";
				break;
			}
		break;
		case "Verano":
			switch(destinoIngresado)
			{
				case "Cataratas":
				case "Mar del plata":
					mensaje = "Se viaja";
				break;
				default:
					mensaje = "No se viaja";
				break;

			}
		break;
		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
					mensaje = "No se viaja";
				break;
				default:
					mensaje = "Se viaja";
				break;
			}
		break;
		default:
			mensaje = "Se viaja";
		break;
	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN