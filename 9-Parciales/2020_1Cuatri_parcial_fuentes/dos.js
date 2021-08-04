function mostrar()
{ let tipo;
  let cantidad;
  let precio;
  let precioTotal;
  let descuento = 0;
  let acumArena = 0;
  let acumCal = 0;
  let acumCemento =0;
  let maxPrecio;
  let maxTipo;
  let seguir;
  let flagCaro = 1;
  let importeBruto;
  let subtotal;
  let totalBolsas;
  let mayorCantBolsas;
  let importeNeto;



do{
  tipo = prompt("ingresar el tipo (cal/arena/cemento) ").toLowerCase();
  while(!(tipo != "cal" || tipo != "arena" || tipo != "cemento")){
    tipo = prompt("error, reingresar el tipo (cal/arena/cemento) ").toLowerCase();
  }alert("tipo: " + tipo);
  
  cantidad= parseInt(prompt("ingresar cantidad"));
  while(isNaN(cantidad)){
    cantidad= parseInt(prompt("error, volve a ingresar cantidad"));
  } alert("cantidad: " + cantidad);

  precio = parseFloat(prompt("ingrese el precio de producto"));
  while(!(precio > 0)){
  precio = parseFloat(prompt("precio no valido, vuelva a intentarlo"));
  } alert("precio: " + precio);

  subtotal = precio * cantidad;
  importeBruto += subtotal;

  switch(tipo){
    case "cemento":
    acumCemento+= cantidad;
    break;
    case"cal":
    acumCal += cantidad;
    break;
    case "arena":
      acumArena += cantidad;
    break;
  }
if(flagCaro || precio > maxPrecio){
maxPrecio = precio;
maxTipo = tipo;
flagCaro = 0;
}

seguir = prompt("dese seguir ingresando articulos? (si/no)").toLowerCase();
while(!(seguir = "si" && seguir == "no")){
  seguir = prompt("desea seguir ingresando articulos? (si/no)").toLowerCase();
}
}while(seguir == "si")


} totalBolsas = acumArena + acumCal + acumCemento;
  if(totalBolsas > 30){
    descuento = importeBruto * .25;
    importeNeto = descuento; 
  } else if (totalBolsas > 10){
  descuento = importeBruto * .15;
  }
if(acumArena > acumCal && acumArena && acumCemento){
  mayorTipo = "ARENA";
  mayorCantBolsas = acumArena;
  
} else if (acumCemento > acumArena && acumCemento > acumCal){
  mayorTipo = "Cemento";
  mayorCantBolsas = acumCemento;
  
} else if (acumCal> acumCemento && acumCal > acumArena){
  mayorTipo = "cal";
  mayorCantBolsas = acumCal;
}

document.write("a) importe Bruto: " + importeBruto + "<br>");
if(descuento !=0){
document.write("b) importe neto: " + importeNeto + "<br>");
} else {
  document.write("b) no se efectuan descuentos");
}
  
}
/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
---------------------------------------------------------------------
PLAN ACCION
1) definir variables: tipo/ cantBolsas/ PrecioXBolsa/ PrecioTotal/ descuento
2)pedir los datos
3)validar los datos
4)ver si aplican los desc de 15 y 25 sobre el Preciototal
5) MOSTRAR
  a) El importe total a pagar , bruto sin descuento y...
  b) el importe total a pagar con descuento(solo si corresponde)
  d) Informar el tipo con mas cantidad de bolsas.
  f) El tipo mas caro
*/