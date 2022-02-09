/*
Casais Dassie, Nicolás
e/s TP 5
*/

function mostrar()
{
	// Declaro variables
	let edadIngresada;

	// Obtengo las variables por ID
	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	// Operación lógica
	if(edadIngresada < 13){
		alert("Usted NO es un adolescente");
	}
	if(edadIngresada > 17){
		alert("Usted NO es un adolescente");
	}
			


}//FIN DE LA FUNCIÓN