function mostrar()
{
	let destinoIngresado;
	let clima;

	destinoIngresado = document.getElementById('txtIdDestino').value;

	switch(destinoIngresado)
	{
		case "Ushuaia":
		case "Bariloche":
			clima = "FRIO";
		break;
		default:
			clima = "CALOR";
		break;
	}
	
	alert(clima);

}//FIN DE LA FUNCIÓN