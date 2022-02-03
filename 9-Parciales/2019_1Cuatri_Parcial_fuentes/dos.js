/*
2019_1Cuatri_Parcial_fuentes
Casais Dassie, Nicolás
dos.js
*/


function mostrar()
{
  // Declaro variables
  let nombreUno;
  let nombreDos;
  let pesoUno;
  let pesoDos;
  let sumaPeso;
  let promedioPeso;

  // Ingreso variables por prompt
  nombreUno = prompt("Ingrese el nombre de la persona 1: ");
  nombreDos = prompt("Ingrese el nombre de la persona 2: ");
  pesoUno = prompt("Ingrese el peso de "+nombreUno+": ");
  pesoDos = prompt("Ingrese el peso de "+nombreDos+": ");

  // Parseo los pesos
  pesoUno = parseInt(pesoUno);
  pesoDos = parseInt(pesoDos);

  // Calculo suma y promedio de pesos
  sumaPeso = pesoUno+pesoDos;
  promedioPeso = sumaPeso/2;

  // Muestro los resultados
  alert("Ustedes se llaman "+nombreUno+" y "+nombreDos+", pesan "+pesoUno+" y "+pesoDos+" kilos, que sumados son "+sumaPeso+" kilos y el promedio de peso son "+promedioPeso+" kilos.")

}
