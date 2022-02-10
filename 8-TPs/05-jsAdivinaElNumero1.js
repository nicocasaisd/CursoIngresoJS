/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let numeroSecreto; 
let contadorIntentos;

function comenzar()
{
	reinicializar()
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.round(Math.random()*99 + 1); 
	console.log(numeroSecreto);
	// Inicializo el contadorIntentos
	contadorIntentos = 0;
	document.getElementById('txtIdIntentos').value = contadorIntentos;
	
}

function verificar()
{
	// Declaro variables
	let numeroIngresado;

	// Obtengo las variables por ID
	numeroIngresado = document.getElementById('txtIdNumero').value;
	numeroIngresado = parseInt(numeroIngresado);

	if(numeroIngresado == numeroSecreto)
	{
		alert("Usted es un ganador! Y en solo "+contadorIntentos+" intentos!")
		reinicializar()
	}
	else
	{
		contadorIntentos = contadorIntentos + 1;
	}

	document.getElementById('txtIdIntentos').value = contadorIntentos;
	console.log(contadorIntentos);
	
}

function reinicializar()
{
	contadorIntentos = 0;
	document.getElementById('txtIdIntentos').value = contadorIntentos;
	numeroIngresado = "";
	document.getElementById('txtIdNumero').value = numeroIngresado;
	console.log("Reinicializando..")
}