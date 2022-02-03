/*
2018_1Cuatri_Parcial_fuentes
Casais Dassie, Nicolás
uno.js
*/

function mostrar()
{
	// Declaro variables
	let anchoRectangulo;
	let largoRectangulo;
	let perimetro;
	// Ingreso los valores por prompt
	anchoRectangulo = prompt("Ingrese el ancho del rectángulo: ", "1");
	largoRectangulo = promp("Ingrese el largo del rectángulo: ", "2");
	// Parseo las variables
	anchoRectangulo = parseInt(anchoRectangulo);
	largoRectangulo = parseInt(largoRectangulo);
	// Calculo el perímetro
	perimetro = (anchoRectangulo+largoRectangulo)*2;
	// Muestro el resultado
	alert("El perímetro para los valores ingresados es: "+perimetro);

}
