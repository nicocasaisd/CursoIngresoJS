/*
Casais Dassie, Nicolás
e/s 09
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".
function mostrarAumento()
{
// Defino las variables a utilizar
	let sueldo;
	let porcentaje;
	let aumento;
	let resultado;

// Asignamos un valor hard-codeado para calcular el porcentaje
	porcentaje=10;

// Realizamos las operaciones matemáticas
	sueldo=document.getElementById('txtIdSueldo').value;
	sueldo=parseInt(sueldo);
	aumento=sueldo*porcentaje/100;
	resultado=sueldo+aumento;

// Asignamos el resultado al 'value' del cuadro de texto
	document.getElementById('txtIdResultado').value=resultado;
}
*/

/*
Casais Dassie, Nicolás
e/s 09 bis
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento ingresado por prompt %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
// Defino las variables a utilizar
	let sueldo;
	let porcentaje;
	let aumento;
	let resultado;

// Asignamos un valor por prompt para calcular el porcentaje
	porcentaje=prompt("Ingrese el valor de porcentaje a aumentar: ");
	porcentaje=parseInt(porcentaje);

// Realizamos las operaciones matemáticas
	sueldo=document.getElementById('txtIdSueldo').value;
	sueldo=parseInt(sueldo);
	aumento=sueldo*porcentaje/100;
	resultado=sueldo+aumento;

// Asignamos el resultado al 'value' del cuadro de texto
	document.getElementById('txtIdResultado').value=resultado;
}
