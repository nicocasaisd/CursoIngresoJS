/*
Casais Dassie, Nicolás
e/s TP 2
*/

function mostrar()
{
	// Declaro variables
	let edadIngresada;

	// Obtengo la variable por ID
	edadIngresada = document.getElementById('txtIdEdad').value
	edadIngresada = parseInt(edadIngresada);

	// Instrucción lógica
	if(edadIngresada > 18)
	{
		alert("Usted es mayor de edad");
	}


}//FIN DE LA FUNCIÓN