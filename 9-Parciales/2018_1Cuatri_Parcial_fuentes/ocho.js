/*
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un 
número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar
el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo. 
*/
/*
function mostrar()
{
	let letra;
	let numero;
	let respuesta;
	let cantidadPares;
	let cantidadImpares;
	let cantidadCeros;
	let sumaPositivos;
	let cantidadPositivos;
	let promedioPositivos;
	let sumaNegativos;
	let numeroMaximo;
	let letraMaximo;
	let numeroMinimo;
	let letraMinimo;
	let banderaDelPrimero;

	respuesta="si";
	cantidadPares = 0;
	cantidadImpares = 0;
	cantidadCeros = 0;
	cantidadPositivos = 0;
	promedioPositivos = 0;
	sumaPositivos = 0;
	sumaNegativos = 0;
	banderaDelPrimero = "flag";

	while(respuesta=="si")
	{
		letra = prompt("Ingrese una letra del abecedario");

		numero = prompt("Ingrese un número entre -100 y 100.");
		numero = parseInt(numero);
		while(numero< -100 || numero>100)
		{
			numero = prompt("Error, reingrese el número entre -100 y 100.")
			numero = parseInt(numero);
		}
// A
		if(numero==0)
		{
			cantidadCeros = cantidadCeros+1;
		}
		else
		{
			if(numero%2==0)
			{
				cantidadPares = cantidadPares+1;
			}
	// B
			else
			{
				cantidadImpares = cantidadImpares+1;		
			}
		}

		if(numero>0)
		{
			cantidadPositivos = cantidadPositivos+1;
			sumaPositivos = sumaPositivos+numero;
		}
		else
		{
			sumaNegativos = sumaNegativos+numero;
		}
		

		if(banderaDelPrimero=="flag")
		{
			numeroMaximo=numero;
			numeroMinimo=numero;
			letraMaximo=letra;
			letraMinimo=letra;
			banderaDelPrimero="";
		}
		if(numero>numeroMaximo)
		{
			numeroMaximo = numero;
			letraMaximo = letra;
		}
		if(numero<numeroMinimo)
		{
			numeroMinimo = numero;
			letraMinimo = letra;
		}




		respuesta = prompt("Desea continuar?");
	}

	if(cantidadPositivos!=0)
	{
		promedioPositivos = sumaPositivos/cantidadPositivos;
	}
	document.write("Cantidad de números pares: "+cantidadPares);
	document.write("<br> Cantidad de números impares: "+cantidadImpares);
	document.write("<br> Cantidad de números ceros: "+cantidadCeros);
	document.write("<br> Promedio de positivos: "+promedioPositivos);
	document.write("<br> Suma de negativos: "+sumaNegativos);
	document.write("<br> Número máximo: "+numeroMaximo+", letra: "+letraMaximo);
	document.write("<br> Número mínimo: "+numeroMinimo+", letra: "+letraMinimo);
}
*/

/*
Casais Dassie Nicolás
simulacro de parcial

se pide el ingreso de los siguientes datos de 10 personas
nombre, edad, peso, temperatura, sexo(f o m o nb), estado civil(casado, soltero, divorciado)

a)cuantos casados tienen fiebre 
b)nombre edad y sexo del mas pesado mas
c)que hay mas casados, solteros o divorciados
*/
function mostrar()
{
	let contadorIngresos;
	let nombre;
	let edad;
	let peso;
	let temperatura;
	let sexo;
	let estadoCivil;
	let cantidadCasadosConFiebre;
	let pesoMaximo;
	let pesoMaximoNombre;
	let pesoMaximoEdad;
	let pesoMaximoSexo;
	let banderaDelPrimero="primero";
	let cantidadCasados=0;
	let cantidadSolteros=0;
	let cantidadDivorciados=0;
	let maximoEstadoCivil;

	cantidadCasadosConFiebre = 0;
	peso = 0;

	contadorIngresos = 0;

	while(contadorIngresos<4)
	{
		nombre = prompt("Ingrese nombre:");

		edad = prompt("Ingrese edad (entre 18 y 100): ");
		edad = parseInt(edad);
		while(edad<18 || edad>100)
		{
			edad = prompt("Error. Ingrese edad (entre 18 y 100: ");
			edad = parseInt(edad);
		}
		peso = prompt("Ingrese peso (entre 20 y 250):")
		peso = parseInt(peso);
		while(peso<20 || peso>250)
		{
			peso = prompt("Error. Ingrese peso (entre 20 y 250): ");
			peso = parseInt(peso);
		}
		temperatura = prompt("Ingrese temperatura (entre 35 y 43):");
		temperatura = parseInt(temperatura);
		while(temperatura<35 || temperatura>43)
		{
			temperatura = prompt("Error. Ingrese temperatura (entre 35 y 43): ");
			temperatura = parseInt(temperatura);
		}
		sexo = prompt("Ingrese sexo(f o m o nb)");
		while(sexo!="f" && sexo!="m" && sexo!="nb")
		{
			sexo = prompt("Error. Ingrese sexo (f o m o nb): ");
		}
		estadoCivil = prompt("Ingrese estado civil(soltero, casado o divorciado)");
		while(estadoCivil!="soltero" && estadoCivil!="casado" && estadoCivil!="divorciado")
		{
			estadoCivil = prompt("Error. Ingrese estado civil (soltero, casado o divorciado): ");
		}
//A

//B
		if(banderaDelPrimero=="primero")
		{
			pesoMaximo=peso;
			pesoMaximoEdad=edad;
			pesoMaximoNombre=nombre;
			pesoMaximoSexo=sexo;
			banderaDelPrimero="";
		}
		else
		{
			if(peso>pesoMaximo)
			{
				pesoMaximo=peso;
				pesoMaximoEdad=edad;
				pesoMaximoNombre=nombre;
				pesoMaximoSexo=sexo;
			}
		}
		
//C
		switch(estadoCivil)
		{
			case "soltero":
				cantidadSolteros = cantidadSolteros+1;
			break;
			case "casado":
				cantidadCasados = cantidadCasados+1;
				if(temperatura>37)
				{
					cantidadCasadosConFiebre = cantidadCasadosConFiebre+1;
				}
			break;
			default:
				cantidadDivorciados = cantidadDivorciados+1;
			break;
		}

		contadorIngresos = contadorIngresos+1;
	}
/*
	if(cantidadSolteros>cantidadDivorciados && cantidadSolteros>cantidadCasados)
	{
		maximoEstadoCivil = "soltero";
	}
	else
	{
		if(cantidadDivorciados>cantidadSolteros && cantidadDivorciados>cantidadCasados)
		{
			maximoEstadoCivil = "divorciado";
		}
		else
		{
			if(cantidadCasados>cantidadSolteros && cantidadCasados>cantidadDivorciados)
			{
				maximoEstadoCivil = "casado";
			}
			else
			{
				maximoEstadoCivil = "empate";
			}
		}
	}
*/
// Solución del profe
	if(cantidadSolteros>cantidadDivorciados && cantidadSolteros>cantidadCasados)
	{
		maximoEstadoCivil = "soltero";
	}
	else
	{
		if(cantidadDivorciados>cantidadCasados)
		{
			maximoEstadoCivil = "divorciado";
		}
		else
		{
			maximoEstadoCivil = "casado";
		}
	}
	document.write("<br>Casados con fiebre: "+ cantidadCasadosConFiebre);
	document.write("<br>El más pesado es "+pesoMaximoNombre+", sexo "+pesoMaximoSexo+", edad "+pesoMaximoEdad+" años.");
	document.write("<br>Casados: "+ cantidadCasados);
	document.write("<br>Solteros: "+ cantidadSolteros);
	document.write("<br>Divorciados: "+ cantidadDivorciados);
	document.write("<br>Estado civil con más gente: "+ maximoEstadoCivil);

}


/*
se pide el ingreso de los siguientes datos de 10 personas

nombre,
edad, 
peso, 
temperatura, 
sexo(f o m o nb), 
estado civil(casado, soltero, divorciado)


//a)cuantos casados tienen fiebre 
//b)nombre edad y sexo del mas pesado mas
//c)que hay mas casados, solteros o divorciados



a) cantidad de jubilados (mayor a 60)
b) promedio de peso de los masculinos.
c) que porcentaje hay de adolescentes sobre el total.
d) que porcentaje hay de cada sexo sobre el total
e) que sexo tiene menos cantidad.

f)Nombre,temperatura y edad de la primer mujer con temperatura.
g)Nombre y temperatura del  mas pesado de todos y el de los adolescentes tambien
h)Nombre ,sexo y temperatura de el niño mas joven.

*/