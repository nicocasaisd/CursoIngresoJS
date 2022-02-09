/*
Casais Dassie, Nicolás
e/s 9
*/


function mostrar()
{
	// Declaro variables
	let aleatorio;
	//Genero el número RANDOM entre 1 y 10 
/*
	Math.random() es un método que devuelve un número aleatorio
	entre 0 y 1 (incluyendo el 0 y no incluyendo el 1). 
	Para extender este rango lo que hacemos es multiplicar por un valor.
	Para que solo nos muestre enteros lo que hacemos es usar el método
	Math.floor() que realiza un truncamiento.
*/
	//aleatorio = Math.random();
	//aleatorio = Math.random() * 11;
	aleatorio = Math.floor(Math.random() * 11);

	console.log(aleatorio);
	//alert(aleatorio);



}//FIN DE LA FUNCIÓN