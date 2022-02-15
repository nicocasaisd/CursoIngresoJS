function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;
	let precioBase = 15000;
	let porcentaje = 0;
	let precioFinal;

	estacionIngresada = document.getElementById('txtIdEstacion').value;
	destinoIngresado = document.getElementById('txtIdDestino').value;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje = 0.2;
				break;
				case "Mar del plata":
					porcentaje = -0.2;
				break;
				default:
					porcentaje = -0.1;
				break;
			}
		break;
		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje = -0.2;
				break;
				case "Mar del plata":
					porcentaje = 0.2;
				break;
				default:
					porcentaje = 0.1;
				break;
			}
		break;
		default:
			switch(destinoIngresado)
			{
				case "Cordoba":
					porcentaje = 0;
				break;
				default:
					porcentaje = 0.1;
				break;
			}
		break;
	}

	precioFinal = precioBase + precioBase*porcentaje;
	alert(precioFinal);


}//FIN DE LA FUNCIÓN