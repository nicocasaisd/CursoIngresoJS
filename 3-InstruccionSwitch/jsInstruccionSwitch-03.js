/*
Casais Dassie, Nicolás
switch 3
*/

function mostrar()
{
	//tomo el mes
	let mesDelAño;

	mesDelAño = document.getElementById('txtIdMes').value;

	switch(mesDelAño)
	{
		case "Febrero":
			alert("Este mes no tiene más de 29 días.");
			break;
		default:
			alert("Este mes tiene 30 días o más.")
	}

}//FIN DE LA FUNCIÓN