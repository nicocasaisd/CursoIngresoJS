/*
Casais Dassie, Nicolás
TP 12
RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	let edadIngresada;
 	let sexoIngresado;
 	let estadoCivilIngresado;
    let sueldoBruto;
    let legajo;
    let nacionalidad;

    sueldoBruto = 0;
    edadIngresada = 0;
    sexoIngresado = "";
    estadoCivilIngresado = 0;

// A
    while(edadIngresada<18 || edadIngresada>90)
    {
        edadIngresada = prompt("Ingrese su edad. Solo es válido entre 18 y 90 años.");
        edadIngresada = parseInt(edadIngresada);
    }
    document.getElementById('txtIdEdad').value = edadIngresada;
//B
    while(!(sexoIngresado=="f" || sexoIngresado=="m")) // puede hacerse de otra forma?
    {
        sexoIngresado = prompt("Ingrese su sexo. m para masculino y f para femenino.");
    }
    document.getElementById('txtIdSexo').value = sexoIngresado;
//C
    while(!(estadoCivilIngresado>=1 && estadoCivilIngresado<=4))
    {
        estadoCivilIngresado = prompt("Ingrese su estado civil. 1-para solteros, 2-para casados, 3-para divorciados y 4-para viudos.");
    }
//  CORREGIR  switch(estadoCivilIngresado)
    document.getElementById('txtIdEstadoCivil').value = estadoCivilIngresado;
//D
    while(sueldoBruto<8000)
    {
        sueldoBruto = prompt("Ingrese su sueldo bruto. No puede ser menor a 8000.");
    }
    document.getElementById('txtIdSueldo').value = "$"+sueldoBruto;
//E
    legajo = prompt("Ingrese su número de legajo. 4 dígitos sin ceros a la izquierda");
    while(legajo<1000)
    {
        legajo = prompt("Error. Reingrese su número de legajo. 4 dígitos sin ceros a la izquierda.")
    }
    document.getElementById('txtIdLegajo').value = legajo;
//F
    nacionalidad = prompt("Ingrese su nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados. ");
    while(nacionalidad!="A" && nacionalidad!="E" && nacionalidad!="N")
    {
        nacionalidad = prompt("Error. Reingresesu nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
    }
    document.getElementById('txtIdNacionalidad').value = nacionalidad;
}

