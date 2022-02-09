/*
Casais Dassie, Nicolás
e/s ej 7
*/

function mostrar()
{

	// Declaro variables
	let edad;
	let estadoCivil;

	// Obtengo sus valores por ID
	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	estadoCivil = document.getElementById('estadoCivil').value;

	// Operación lógica
	if(edad < 18 && estadoCivil != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero.");
	}




}//FIN DE LA FUNCIÓN