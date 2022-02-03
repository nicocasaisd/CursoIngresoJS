/*
Casais Dassie, Nicolás
e/s 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"
function mostrarAumento()
{
// Defino las variables a utilizar
	let sueldo;
	let porcentaje;
	let descuento;
	let resultado;

// Asignamos un valor hard-codeado para calcular el porcentaje
	porcentaje=25;

// Realizamos las operaciones matemáticas
	sueldo=document.getElementById('txtIdImporte').value;
	sueldo=parseInt(sueldo);
	descuento=sueldo*porcentaje/100;
	resultado=sueldo-descuento;

// Asignamos el resultado al 'value' del cuadro de texto
	document.getElementById('txtIdResultado').value=resultado;
}
*/
/*
Casais Dassie, Nicolás
e/s 10 bis
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento variable ingresado por prompt %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
// Defino las variables a utilizar
	let sueldo;
	let porcentaje;
	let descuento;
	let resultado;

// Asignamos un valor hard-codeado para calcular el porcentaje
	porcentaje=prompt("Ingrese el valor de porcentaje a aumentar: ");
	porcentaje=parseInt(porcentaje);

// Realizamos las operaciones matemáticas
	sueldo=document.getElementById('txtIdImporte').value;
	sueldo=parseInt(sueldo);
	descuento=sueldo*porcentaje/100;
	resultado=sueldo-descuento;

// Asignamos el resultado al 'value' del cuadro de texto
	document.getElementById('txtIdResultado').value=resultado;
}
