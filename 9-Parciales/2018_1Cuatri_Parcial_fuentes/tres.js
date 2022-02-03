/*
2018_1Cuatri_Parcial_fuentes
Casais Dassie, Nicolás
tres.js
*/

function mostrar()
{
	// Declaro las variables
	let valorIngresado;
	let descuentoIngresado;
	let precioDescuento;
	let precioFinal;
	// Obtengo los valores por prompt()
	valorIngresado = prompt("Ingrese el precio: ", "100");
	descuentoIngresado = prompt("Ingrese el porcentaje de descuento: ", "10");
	// Parseo las variables
	valorIngresado = parseInt(valorIngresado);
	descuentoIngresado = parseInt(descuentoIngresado);
	// Calculo
	precioDescuento = valorIngresado*descuentoIngresado/100;
	precioFinal = valorIngresado-precioDescuento;
	// Muestro los resultados por ID
	document.getElementById('elPrecioFinal').value = precioFinal;
}
