/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let respuesta;
	let nuemero;
	let acumulador = 0;
	let contador = 0;
	let promedio;

	do{
		numero = parseInt(prompt("ingresar nro"));

		acumulador = acumulador + numero;

		contador++;

		respuesta = prompt("queres ingresar otro nro?");
	}while(respuesta == "si")

	promedio = acumulador / contador;
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;



}//FIN DE LA FUNCIÓN