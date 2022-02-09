/*
Casais Dassie, Nicolás
e/s TP 6
*/

function mostrar()
{
	// Declaro variables
	let edadIngresada;

	// Obtengo el valor por ID
	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada = parseInt(edadIngresada);
/*
	// Operación lógica
	if(edadIngresada >= 18){
		alert("Usted es mayor de edad");
	}
	if(edadIngresada < 18 && edadIngresada > 12){
		alert("Usted es adolescente");
	}
	if(edadIngresada < 13){
		alert("Usted es un niñe");
	}
*/
	// Solución alternativa
	if(edadIngresada > 17){
		alert("Usted es mayor de edad");
	}
	else{
		if(edadIngresada > 12){
			alert("Usted es adolescente");
		}
		else{
			alert("Usted es un niñe");
		}
	}

}//FIN DE LA FUNCIÓN