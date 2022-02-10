/*
Casais Dassie, Nicolás
switch 4
*/
function mostrar()
{
	//tomo el mes
	let mesDelAño;
	let mensaje;

	mesDelAño = document.getElementById('txtIdMes').value;
	switch(mesDelAño)
	{
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			mensaje = "Este mes tiene 31 días.";
			break;
		case "Febrero":
			mensaje = "Este mes tiene 29 días.";
			break;
		default:
			mensaje = "Este mes tiene 30 días.";
	}
	
	alert(mensaje);


}//FIN DE LA FUNCIÓN