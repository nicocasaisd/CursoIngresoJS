/*
Casais Dassie, Nicolás
while 1

al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	let contador;
/*
	// contador = 1;
	alert(contador);
	// contador = 2;
	contador = contador + 1;
	alert(contador);
	contador = contador + 1;
	alert(contador);
*/
	contador = 0; // 1. Inicializamos la variable de control

	while(contador<10) // 2. Variable de control
	{
		//contador = contador + 1; // 3. Modificación de la variable de control
		// contador ++; // incrementa el valor en 1
		contador += 1; // idem anterior
		alert(contador);
	}


}//FIN DE LA FUNCIÓN