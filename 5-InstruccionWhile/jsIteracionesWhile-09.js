/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let numeroIngresado;
	let maximo;
	let minimo;
	let respuesta = "s";
	let flag = 1;

	do{ 
		numeroIngresado = parseInt(prompt("ingrese un nro"));
		while (isNaN(numeroIngresado))
			{
			prompt("el valor ingresado no es un nro, vuelva a intentarlo.");
			}
			if (flag)
			{
				maximo = numeroIngresado;
				minimo = numeroIngresado;
				flag = 0;
			} 
				else if (maximo < numeroIngresado)
				{
					maximo = numeroIngresado;
				} 
				else (minimo < numeroIngresado)
				{
					minimo = numeroIngresado;
	
				}
				respuesta = prompt("desea ingresar otro nro? s/n").toLowerCase;

				while (!(respuesta == "s") || (respuesta == "n")){
					respues = prompt("su respuesta debe ser s/n , por fvor vuelva a intentarlo");
					
				}

	}while(respuesta == "s")

document.getElementById("txtIdMaximo").value = maximo;
document.getElementById("txtIdMinimo").value = minimo;
}//FIN DE LA FUNCIÓN