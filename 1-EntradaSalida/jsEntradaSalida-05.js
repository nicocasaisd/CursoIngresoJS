/*
Casais Dassie, Nicolás
e/s 05
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
// Definimos las variables para guardar nombre y edad
	let nombreIngresado;
	let edadIngresada;

// Obtenemos los valores por ID buscándolos en el html
	nombreIngresado=document.getElementById('txtIdNombre').value;
	edadIngresada=document.getElementById('txtIdEdad').value;

// Mostramos los resultados concatenados usando la función alert()
	alert("Usted se llama "+nombreIngresado+" y tiene "+edadIngresada+" años.");
}

