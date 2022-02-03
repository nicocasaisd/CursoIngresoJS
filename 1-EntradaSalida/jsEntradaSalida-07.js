/*
Casais Dassie, Nicolás
e/s 07
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numeroUno;
	let numeroDos;
	let suma;

	numeroUno=document.getElementById('txtIdNumeroUno').value
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	suma=numeroUno+numeroDos;

	alert("El resultado es: "+suma);
}

function restar()
{
	let numeroUno;
	let numeroDos;
	let resta;

	numeroUno=document.getElementById('txtIdNumeroUno').value
	numeroDos=document.getElementById('txtIdNumeroDos').value
	resta=numeroUno - numeroDos;

	alert("El resultado es: "+resta);
}

function multiplicar()
{ 
	let numeroUno;
	let numeroDos;
	let producto;

	numeroUno=document.getElementById('txtIdNumeroUno').value
	numeroDos=document.getElementById('txtIdNumeroDos').value
	producto=numeroUno * numeroDos;

	alert("El resultado es: "+producto);
}

function dividir()
{
	let numeroUno;
	let numeroDos;
	let division;

	numeroUno=document.getElementById('txtIdNumeroUno').value
	numeroDos=document.getElementById('txtIdNumeroDos').value
	division=numeroUno / numeroDos;

	alert("El resultado es: "+division);
}

