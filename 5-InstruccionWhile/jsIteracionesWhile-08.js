/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero;
	let acumuladorNegativo = 0;
	let contadorPositivo = 0;
	let seguir = "si";
do{
numero = parseInt(prompt("ingresar un nro"));
	while(isNaN(numero)){
		numero = parseInt(prompt("eso no es un nro, ingresar un nro"));
		if (numero >= 0){
			contadorPositivo = contadorPositivo + numero;
			parseInt(document.getElementById("txtIdSuma").value) = contadorPositivo;
		} else{
			acumuladorNegativo = acumuladorNegativo + numero;
			parseInt(document.getElementById().value) = acumuladorNegativo;
		}
		seguir = prompt("desea seguir ingresando numeros?");
	}
}while(seguir == "si");
}//FIN DE LA FUNCIÓN

/* 
estrategia
-declarar variables
-generar (bucle do while)
-cosas q e hacen dentro del bucle, mientras el usuario quiera
.pedir nro
.validar q sea nro
.validar el signo, q sea + o -
si el nro es + --> s suma al acumulador de +
si el nro es - --> se multiplica con los -
_cosas que se hacen desp de q el usuario no ingresa mas nros
-mostrar resultados
*/