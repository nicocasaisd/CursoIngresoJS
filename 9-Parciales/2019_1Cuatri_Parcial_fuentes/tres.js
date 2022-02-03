/*
2019_1Cuatri_Parcial_fuentes
Casais Dassie, Nicolás
tres.js
*/

function mostrar()
{
	// Declaro las variables
	let precioIngresado;
	let descuentoIngresado;
	let precioDescuento;
	let precioFinal;
	// Ingreso valores por prompt
	precioIngresado = prompt("Ingrese el precio: ", "100");
	descuentoIngresado = prompt("Ingrese el decuento a aplicar: ", "10");
	// Parseo
	precioIngresado = parseInt(precioIngresado);
	descuentoIngresado = parseInt(descuentoIngresado);
	// Realizo las operaciones matemáticas
	precioDescuento = precioIngresado*descuentoIngresado/100;
	precioFinal = precioIngresado - precioDescuento;
	// Muestro los resultados por ID
	document.getElementById('elPrecioFinal').value = precioFinal;
}
