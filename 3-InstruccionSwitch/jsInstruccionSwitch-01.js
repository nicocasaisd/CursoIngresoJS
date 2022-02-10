/*
Casais Dassie, Nicolás
switch 1
*/

function mostrar()
{
	//tomo el mes
	let mesDelAño;

	mesDelAño = document.getElementById('txtIdMes').value;


	switch(mesDelAño)
	{
		case "Enero":
			alert("Que comiences bien el año");
			break;
		case "Marzo":
			alert("A clases pt!");
			break;
		case "Julio":
			alert("Se vienen las vacaciones");
			break;
		case "Diciembre":
			alert("Felices fiestas!");
			break;
	}


	//alert(mesDelAño);
	
}//FIN DE LA FUNCIÓN