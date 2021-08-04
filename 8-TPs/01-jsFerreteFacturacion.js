/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{ let producto1,
 producto2,
 producto3,
 resultado;

 producto1 = parseInt(document.getElementById("txtIdPrecioUno").value);
 producto2 = parseInt(document.getElementById("txtIdPrecioDos").value);
 producto3 = parseInt(document.getElementById("txtIdPrecioTres").value);

resultado = producto1 + producto2 + producto3;

//document.getElementById("txtIdPrecioTres").value = resultado 
alert("el precio total es " + resultado)
	
}
function Promedio () 
{
	let producto1,
    producto2,
    producto3,
    resultado,
    promedio;

 producto1 = parseInt(document.getElementById("txtIdPrecioUno").value);
 producto2 = parseInt(document.getElementById("txtIdPrecioDos").value);
 producto3 = parseInt(document.getElementById("txtIdPrecioTres").value);

 resultado = (producto1 + producto2 + producto3); 
 promedio = resultado / 3;
 alert("el promedio de los productos es " + promedio);


}
function PrecioFinal () 
{
	let producto1,
    producto2,
     producto3,
     resultado,
     precioIva,
     precioFinal;

     producto1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
     producto2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
     producto3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

     resultado = (producto1 + producto2 + producto3);
     precioIva = resultado  * .21 /100;
     precioFinal = precioIva + resultado;
     alert("el precio final con iva es " + precioFinal);
}