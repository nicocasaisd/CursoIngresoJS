


	let eleccionMaquina;
	let ContadorDeEmpates=0;
	let ContadorDeGanadas=0;
	let ContadorDePerdidas=0;

function comenzar()
{
	let mensaje;

	eleccionMaquina = Math.round(Math.random()* 2 + 1);
	console.log(eleccionMaquina);


}//FIN DE LA FUNCIÓN
function piedra()
{
	switch(eleccionMaquina)
	{
		case 1:
			mensaje = "Empataste. Piedra con Piedra.";
			break;
		case 2:
			mensaje = "Perdiste. Papel envuelve Piedra.";
			break;
		case 3:
			mensaje = "Ganaste. Piedra rompe Tijera."
			break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN
function papel()
{
	switch(eleccionMaquina)
	{
		case 1:
			mensaje = "Ganaste. Papel envuelve a Piedra. Juli hace los mates";
			break;
		case 2:
			mensaje = "Empataste. Papel con Papel.";
			break;
		case 3:
			mensaje = "Perdiste. Tijera corta Papel."
			break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN
function tijera()
{
	switch(eleccionMaquina)
	{
		case 1:
			mensaje = "Perdiste. Piedra rompe Tijera.";
			break;
		case 2:
			mensaje = "Ganaste. Tijera corta Papel.";
			break;
		case 3:
			mensaje = "Empataste. Tijera con Tijera."
			break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN