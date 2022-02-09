/*
Casais Dassie, Nicolás
e/s ej 8
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
	if(edad > 17 && estadoCivil == "Soltero")
	{
		alert("Es soltero y no es menor.");
	}


}//FIN DE LA FUNCIÓN