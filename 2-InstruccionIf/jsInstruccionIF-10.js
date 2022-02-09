function mostrar()
{
	// Declaro variables
	let nota;
	let mensaje;

	//Genero el número RANDOM entre 1 y 10 
	nota = Math.floor(Math.random()*10+1);

	if(nota > 8)
	{
		mensaje="EXCELENTE";
	}
	else
	{
		if(nota < 4)
		{
			mensaje="Vamos, la proxima se puede";
		}
		else
		{
			mensaje="APROBÓ";
		}
	}

	alert(nota + " : " + mensaje);

}//FIN DE LA FUNCIÓN