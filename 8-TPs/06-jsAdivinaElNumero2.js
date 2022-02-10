/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

let numeroSecreto; 
let contadorIntentos = 0;

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
	let mensaje;

	contadorIntentos = contadorIntentos + 1;

	// Obtengo las variables por ID
	numeroIngresado = document.getElementById('txtIdNumero').value;
	numeroIngresado = parseInt(numeroIngresado);

	if(numeroIngresado == numeroSecreto)
	{
		switch(contadorIntentos)
		{
			case 1: 
				mensaje = "Psiquico!";
				break;
			case 2: 
				mensaje = "Excelente percepción.";
				break;
			case 3: 
				mensaje = "Esto es suerte.";
				break;
			case 4: 
				mensaje = "Excelente técnica.";
				break;
			case 5: 
				mensaje = "Usted está en la media.";
				break;
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
				mensaje = "Falta técnica.";
				break;
			default:
				mensaje = "Afortunado en el amor...";
		}
		alert(mensaje+" Adivinó en "+contadorIntentos+" intentos.")
		reinicializar()
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