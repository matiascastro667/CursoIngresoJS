/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;

	numero = parseInt(prompt("ingrese un numero entre 0 y 9"));

	while(!( numero >= 0 && numero <= 9 )) {

		numero = parseInt(prompt("el nro ingresado no es correcto, recuerde ingresar un nro entr 0 y 9"));
	}
		document.getElementById("txtIdNumero").value = numero;

	
}//FIN DE LA FUNCIÓN