/*
2018_1Cuatri_Parcial_fuentes
Casais Dassie, Nicolás
dos.js
*/

function mostrar()
{
  // Declaro las variables
  let nombre;
  let localidad;
  // Obtengo los valores por getElementById()
  nombre = document.getElementById('elNombre').value;
  localidad = document.getElementById('laLocalidad').value;
  // Muestro los valores concatenados
  alert("Usted es "+nombre+" y habita en la localidad de "+localidad);
}
