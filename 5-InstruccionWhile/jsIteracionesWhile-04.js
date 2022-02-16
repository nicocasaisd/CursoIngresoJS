/*
Casais Dassie, Nicolás
while 4

al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	numeroIngresado = parseInt(numeroIngresado);

	while(numeroIngresado<0 || numeroIngresado>10)
	{
		numeroIngresado = prompt("Error, reingrese un número entre 0 y 10.");
	}

	document.getElementById('txtIdNumero').value = numeroIngresado;
	
}//FIN DE LA FUNCIÓN