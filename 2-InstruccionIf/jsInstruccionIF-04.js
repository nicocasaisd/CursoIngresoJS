/*
Casais Dassie, Nicolás
e/s TP 4
*/

function mostrar()
{
	// Declaro variables
	let edadIngresada;

	// Obtengo las variables por ID
	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	// Operación lógica
	if(edadIngresada > 12){
		if(edadIngresada < 18){
			alert("Usted es un adolescente");
		}
	}


}//FIN DE LA FUNCIÓN