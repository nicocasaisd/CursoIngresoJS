/*1.	
Casais Dassie, Nicolás
e/s FerreteFacturacion
Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	// Defino las variables
	let numeroUno;
	let numeroDos;
	let numeroTres;
	let suma;

	// Obtengo los valores mediante un getElementById()
	numeroUno = document.getElementById('txtIdPrecioUno').value;
	numeroDos = document.getElementById('txtIdPrecioDos').value;
	numeroTres = document.getElementById('txtIdPrecioTres').value;
	// Parseo para convertir los valores str en int
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	numeroTres = parseInt(numeroTres);
	// Realizo las operaciones matemáticas
	suma = numeroUno+numeroDos+numeroTres;
	// Muestro el resultado usando alert()
	alert("La suma de los valores es: "+suma);

}
function Promedio () 
{
	// Defino las variables
	let numeroUno;
	let numeroDos;
	let numeroTres;
	let promedio;

	// Obtengo los valores mediante un getElementById()
	numeroUno = document.getElementById('txtIdPrecioUno').value;
	numeroDos = document.getElementById('txtIdPrecioDos').value;
	numeroTres = document.getElementById('txtIdPrecioTres').value;
	// Parseo para convertir los valores str en int
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	numeroTres = parseInt(numeroTres);
	// Realizo las operaciones matemáticas
	promedio = (numeroUno+numeroDos+numeroTres)/3;
	// Muestro el resultado usando alert()
	alert("El promedio de los valores es: "+promedio);
}
function PrecioFinal () 
{
	// Defino las variables
	let numeroUno;
	let numeroDos;
	let numeroTres;
	let suma
	let precioFinal;
	let iva;

	// Defino iva como una variable
	iva = 21/100;
	// Obtengo los valores mediante un getElementById()
	numeroUno = document.getElementById('txtIdPrecioUno').value;
	numeroDos = document.getElementById('txtIdPrecioDos').value;
	numeroTres = document.getElementById('txtIdPrecioTres').value;
	// Parseo para convertir los valores str en int
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	numeroTres = parseInt(numeroTres);
	// Realizo las operaciones matemáticas
	suma = numeroUno+numeroDos+numeroTres;
	precioFinal = suma+(suma*iva);
	// Muestro el resultado usando alert()
	alert("El precio final de los valores incluyendo IVA es: "+precioFinal);
}