function mostrar()
{
	let contador = 0;
	let acumulador = 0;
	let numero;
	let promedio;

	while(contador < 5){
		numero = parseInt(prompt("ingrese un nro"));

		acumulador = acumulador + numero;
		contador = contador + 1;
	}
	promedio = acumulador / contador;
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
}//FIN DE LA FUNCIÓN