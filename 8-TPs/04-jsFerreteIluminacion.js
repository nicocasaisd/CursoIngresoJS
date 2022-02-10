/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

Casais Dassie, Nicolás
TP 4 - FerreteIluminación
punto A+B+C+D+E
 */
function CalcularPrecio () 
{
 	// Declaro variables
    let cantidadLamparas;
    let marcaLamparas;
    let precioBase;
    let precioDescuento;
    let precioFinal;
    let ingresosBrutos;
    let porcentaje = 0;
    let precioUnidad = 35;


    // Obtengo los valores por ID
    cantidadLamparas = document.getElementById('txtIdCantidad').value;
    cantidadLamparas = parseInt(cantidadLamparas);

    marcaLamparas = document.getElementById('Marca').value;
/*
    // Calculo el porcentaje de porcentaje
    //A
    if(cantidadLamparas > 5)
    {
        porcentaje = 0.5;
    }
    else
    { 
        if(cantidadLamparas == 5) //B
        {
            if(marcaLamparas == "ArgentinaLuz")
            {
                porcentaje = 0.4;
            }
            else
            {
                porcentaje = 0.3;
            }
        }
        else
        {
            if(cantidadLamparas == 4) //C
            {
                if(marcaLamparas == "ArgentinaLuz" || marcaLamparas == "FelipeLamparas")
                {
                    porcentaje = 0.25;
                }
                else
                {
                    porcentaje = 0.2;
                }
            }
            else
            {
                if(cantidadLamparas == 3) //D
                {
                    if(marcaLamparas == "ArgentinaLuz")
                    {
                        porcentaje = 0.15;
                    }
                    else
                    {
                        if(marcaLamparas == "FelipeLamparas")
                        {
                            porcentaje = 0.1;
                        }
                        else
                        {
                            porcentaje = 0.05;
                        }
                    }
                }
            }
        }
    }

*/
    // Resolución por else if
    if(cantidadLamparas >= 6)
    {
        porcentaje = 0.5;
    }
    else if(cantidadLamparas == 5)
    {
        if(marcaLamparas == "ArgentinaLuz")
        {
            porcentaje = 0.4;
        }
        else
        {
            porcentaje = 0.3;
        }
    }
    else if(cantidadLamparas == 4)
    {
        if(marcaLamparas == "ArgentinaLuz" || marcaLamparas == "FelipeLamparas")
        {
            porcentaje = 0.25;
        }
        else
        {
            porcentaje = 0.2;
        }
    }
    else if(cantidadLamparas == 3)
    {
        if(marcaLamparas == "ArgentinaLuz")
        {
            porcentaje = 0.15;
        }
        else if(marcaLamparas == "FelipeLamparas")
        {
            porcentaje = 0.1;
        }
        else
        {
            porcentaje = 0.05;
        }
    }
    
    // Calculo el precio
    precioBase = cantidadLamparas * precioUnidad;
    precioDescuento = precioBase * porcentaje;
    precioFinal = cantidadLamparas * precioUnidad - precioDescuento;

    // Calculo si debe aplicar ingresos brutos
    if(precioFinal > 120) //E
    {
        ingresosBrutos = precioFinal * 0.1;
        precioFinal = precioFinal + ingresosBrutos;
        alert("IIBB: Usted pagó $" + ingresosBrutos);
    }

    // Muestro el resultado
    document.getElementById('txtIdprecioDescuento').value = precioFinal;

}

