
function mostrar()
{
	let tipo;
	let precio;
	let fabricante;
	let marca;
	let cantidad;
	let cantAlcoholBarato;
	let fabricanteAlcoholBarato;
	let precioAlcoholBarato;
	let flagAlcohol = 1;
	let acumA = 0;
	let acumB = 0;
	let acumJ = 0;
	let contadorA = 0;
	let contadorB = 0;
	let contadorJ = 0;
	let promedioCompra;
	let promedio;
	let mayorTipo;

	for(let i = 0; i <= 5; i++){
		
		tipo = prompt("ingrese el tipo de producto(barbijo/jabon/alcohol): ").toLowerCase();
			while (tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol" ) {
				tipo = prompt(" tipo invalido, vuelva a intentarlo(barbijo/jabon/alcohol): ").toLowerCase();
			}
			//alert("tipo: " + tipo);

		precio = parseFloat(prompt("ingrese el precio de producto"));
				while(!(precio <= 300 && precio >= 100)){
				precio = parseFloat(prompt("precio no valido, vuelva a intentarlo"));
				}
			//	alert("precio: " + precio);
			

		cantidad = parseInt(prompt("ingrese la cantidad de unidades"));
		while(isNaN(cantidad)&&(cantidad >= 1 && cantidad <= 1000)){
			cantidad = parseInt(prompt("error, reingrese la cantidad de unidades"));	
		}
		//alert("cantidad: " + cantidad);

		marca = prompt("ingrese la marca");
		while (marca.length < 2 ||marca.length > 15 ){
			marca = prompt("marca fuera de rango, reingrese la marca");
		}
		//alert("marca: " + marca);
		fabricante = prompt("ingrese el fabircante");
		while(fabricante.length < 2 ||fabricante.length > 15){
			fabricante = prompt("fabricante fuera de rango, reingrese el fabircante");
		}
		//alert("fabricante: " + fabricante);

		switch(tipo){
			case "alcohol":
				contadorA++;
				acumA = acumA + cantidad;
				if (flagAlcohol)
				{
				cantAlcoholBarato = cantidad;
				fabricanteAlcoholBarato = fabricante;
				precioAlcoholBarato = precio;
				flagAlcohol = 0;
				} else{
					if(precio<precioAlcoholBarato){
						precioAlcoholBarato = precio;
						fabricanteAlcoholBarato = fabricante;
						cantAlcoholBarato = cantidad;
					}
				}
			break;
			case "barbijo":
				contadorB++;
				acumB = acumB + cantidad;
			break;
			case "jabon":
				contadorJ++;
				acumJ = acumJ + cantidad;
			break;

		}
	}//</FOR>

	if(acumA > acumB && acumA && acumJ){
		mayorTipo = "alcohol";
		promedio = acumA / contadorA;
		
	} else if (acumB > acumA && acumB > acumJ){
		mayorTipo = "barbijo";
		promedio = acumB / contadorB;
		
	} else if (acumJ > acumB && acumJ > acumA){
		mayorTipo = "jabon";
		promedio = acumJ / contadorJ;
		
	}
	if(flagAlcohol == 0){

	
	document.write("a) el alcohol mas barato:" + fabricanteAlcoholBarato + " cantidad: " + cantAlcoholBarato + " precio: " + precioAlcoholBarato"<br>");
	} else{
		document.write("no se compro ningun alcohol");
	}
	document.write("b) el tipo con mas unidades es " + mayorTipo + " y el promedio or compra es " + promedio + "unidades/compra");
	document.write("c) la cantidad de jabones es " + acumJ);
	alert("la cantidad de jabones comprados es: " + acumJ);
}
/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total

1)pedir al usuario--> tipo, precio, cant, marca, fabicante

A-cantAlcoholBarato/ fabricanteAlcoholBarato/ precioAlcoholBarato/ flagAlcohol

B-acumuladorA/ acumuladorB/ acumuladorJ/ contadorA/ contadorB/ contadorJ / promedioCompra

C-acumuladorJ (en puntoB)
 ----------------------------------------------------------------------------------------------------
 <COSAS DENTRO DEL BUCLE>

2) generar un bucle q se repit 5 veces (FOR)
cosas q se tienen q hcer 5 veces(dentro del bucle)
2.1)pedir TIPO / valido TIPO
2.2)pedir PRECIO / valido PRECIO
2.3)pedir CANTIDAD/ valido CANTIDAD
2.4)pedir MARCA
2.5)pido FABRICANTE
----------------------------------------------------------------------------------------------------
3)cosas q hacer para contstar el punto A

3.1)fijarse si es ALCOHOL
si es alcohol ver si es la primera vez q se ingrsa alcohol o ya se habia ingresado previamente
si es la primera vez: cambio el flagAlcohol y guardo el precio, cantidad y fabricante como "alcohol barato"
y por cada alcohol me fijo si es mas barato que el q tengo como 'barato' y de ser asi actualizo los datos d alcohol barato 

3.2)me fijo el tipo si es Barbijo, Alcohol o Jabon y actualizar el Contador y Acumulador segun corresponda

</COSAS DENTRO DEL BUCLE>
------------------------------------------------------------------------------------------------------------
COSAS Q TENGO Q HACER FUERA DEL BUCLE(for)

4) punto B me fijo cual fue el tipo con mas unidades vendidas y calcular el promedio

4.1)MOSTRAR LOS RESULTADOS
*/