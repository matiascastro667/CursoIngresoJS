/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() 
{
    let precio;
    let cantidadLamparas;
    let descuento;
    let ingresosBrutos;
    let marca;
    let precioDescuento;
    let precioFinal;

    precio = 35;
 	cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;

    if (cantidadLamparas >= 6) {
            descuento = 0.5;
        }
    switch(cantidadLamparas){
        case 5: //	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
            if(marca == "ArgentinaLuz"){
                descuento = 0.40;
            } else {
                descuento = 0.30;                
            }
        break;

        case 4: //Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
            if ((marca == "ArgentinaLuz") || (marca == "FelipeLamparas")){
                descuento = 0.25;
            } else {
                descuento = 0.20;
            }
        break;

        case 3: //Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  
                //“FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
            if (marca == "ArgentinaLuz"){
                descuento = 0.15;
            } else if(marca == "FelipeLamparas"){
                descuento = 0.10;
            } else {
                descuento = 0.05;
            }
        break;
        }
     precioDescuento = precio - precio * descuento;
    precioFinal = precioDescuento * cantidadLamparas;
    if (precioFinal > 120)
    {
        ingresosBrutos = precio * 1.1;
        alert("Usted pago $ " + precioFinal + "y $ " + ingresosBrutos + " de IIBB."); 
        document.getElementById("txtIdprecioDescuento").value = precioDescuento;
    } 
    else
    {
        alert("Usted pago $ " + precioFinal);
        document.getElementById("txtIdPrecioDescuento").value = precioDescuento;
    }           
}
