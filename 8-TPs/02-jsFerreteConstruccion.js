/*2.	
Casais Dassie, Nicolás
e/s TP 2
Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	// Defino las variables a utilizar
	let largoTerreno;
	let anchoTerreno;
	let numHilos;
	let perimetro;

	// Obtengo los valores usando getElementsbyId()
	largoTerreno = document.getElementById('txtIdLargo').value;
	anchoTerreno = document.getElementById('txtIdAncho').value;
	numHilos = 3;
	// Parseo para convertirlos en int
	largoTerreno = parseInt(largoTerreno);
	anchoTerreno = parseInt(anchoTerreno);
	//Realizo las operaciones matemáticas
	perimetro = (largoTerreno+anchoTerreno)*2*numHilos;
	// Muestro el resultado usando alert()
	alert("La cantidad de alambre requerida usando "+numHilos+" hilos de alambre es: "+perimetro+" mts de alambre.")
}
function Circulo () 
{
	// Defino las variables a utilizar
	let radioTerreno;
	let pi;
	let numHilos;
	let perimetroCircular;

	// Obtengo los valores usando getElementsbyId()
	numHilos = 3;
	//pi = 3.1416;
	pi = Math.PI
	radioTerreno = document.getElementById('txtIdRadio').value;
	// Parseo para convertirlos en int
	radioTerreno = parseInt(radioTerreno);
	//Realizo las operaciones matemáticas
	perimetroCircular = 2*pi*radioTerreno;
	cantidadAlambre = perimetroCircular*numHilos;
	// Muestro el resultado usando alert()
	alert("La cantidad de alambre requerida usando "+numHilos+" hilos de alambre es: "+cantidadAlambre+" mts de alambre.")
	
}
function Materiales () 
{
	let largoTerreno;
	let anchoTerreno;
	let superficieTerreno;
	let cementoPorMetro;
	let calPorMetro;
	let totalCemento;
	let totalCal;

	// Defino variables estáticas
	cementoPorMetro = 2;
	calPorMetro = 3;
	// Obtengo los valores usando getElementsbyId()
	largoTerreno = document.getElementById('txtIdLargo').value;
	anchoTerreno = document.getElementById('txtIdAncho').value;
	// Parseo para convertirlos en int
	largoTerreno = parseInt(largoTerreno);
	anchoTerreno = parseInt(anchoTerreno);
	// Realizo las operaciones matemáticas
	superficieTerreno = largoTerreno*anchoTerreno;
	totalCemento = superficieTerreno*cementoPorMetro;
	totalCal = superficieTerreno*calPorMetro;
	// Presento los resultados con alert()
	alert("Para los valores ingresados se requieren "+totalCemento+" bolsas de cemento y "+totalCal+" bolsas de cal.")


}