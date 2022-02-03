/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let valorIngresado;
	let temperaturaCentigrados;	

	valorIngresado = document.getElementById('txtIdTemperatura').value;
	valorIngresado = parseInt(valorIngresado);

	temperaturaCentigrados = (valorIngresado-32)*5/9;

	alert(valorIngresado+"° Fahrenheit equivalen a "+temperaturaCentigrados+"° Celsius.")

}

function CentigradosFahrenheit () 
{
	let valorIngresado;
	let temperaturaFahrenheit;	

	valorIngresado = document.getElementById('txtIdTemperatura').value;
	valorIngresado = parseInt(valorIngresado);

	temperaturaFahrenheit = (valorIngresado*9/5)+32;

	alert(valorIngresado+"° Celsius equivalen a "+temperaturaFahrenheit+"° Fahrenheit.")
}
