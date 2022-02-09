/*
Casais Dassie, Nicolás
e/s TP 3
*/

function mostrar()
{
	// Declaro variables
	let edadIngresada;

	// Obtengo las variables por ID
	edadIngresada = document.getElementById('txtIdEdad').value
	edadIngresada = parseInt(edadIngresada);

	// Instrucción lógica
	if(edadIngresada > 17)
	{
		alert("Usted es mayor de edad");
	}

	if(edadIngresada < 18)
	{
		alert("Usted es menor de edad");
	}
	

}