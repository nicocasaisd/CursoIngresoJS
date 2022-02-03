/*
2019_1Cuatri_Parcial_fuentes
Casais Dassie, Nicolás
uno.js
*/
function mostrar()
{
	// Declaro variables
	let ladoTriangulo;
	let perimetro;
	// Ingreso un solo valor de lado
	ladoTriangulo = prompt("Ingrese el lado del triángulo equilátero a calcular: ", "1");
	// Parseo
	ladoTriangulo = parseInt(ladoTriangulo);
	// Calculo el perímetro
	perimetro = ladoTriangulo*3;
	// Muestro los resultados
	alert("El perímetro del triángulo equilátero es: "+perimetro)	
}
