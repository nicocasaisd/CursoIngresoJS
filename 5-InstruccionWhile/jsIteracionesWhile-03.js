/*
Casais Dassie, Nicolás
while 3

al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;

	claveIngresada = prompt("ingrese el número clave.");
/*
	if(claveIngresada!="utn750")
	{
		claveIngresada = prompt("Error, reingrese el número clave.");
		
		if(claveIngresada!="utn750")
		{
			claveIngresada = prompt("Error, reingrese el número clave.");
		}
	}
	else
	{
		alert("Bienvenido");
	}
*/

	while(claveIngresada!="utn750")
	{
		claveIngresada = prompt("Error, reingrese el número clave.");
	}
	alert("Bienvenido.")

}//FIN DE LA FUNCIÓN
