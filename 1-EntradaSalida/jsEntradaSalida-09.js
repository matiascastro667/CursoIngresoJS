/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{	//decaracion de variables
	let sueldo;
	let porcentaje;
	let resultado;
	//cargar la variable con el valor de la caja de texto
	sueldo =  parseFloat(document.getElementById("txtIdSueldo").value);
	//cargar variable con el porcentaje(10% del sueldo)
	//porcentaje = sueldo * 10 / 100
	porcentaje = sueldo * .1
	//obtener el nuevo sueldo
	resultado = sueldo + porcentaje
	//mostrar el sueldo en la caja d texto
	document.getElementById("txtIdResultado").value = resultado.toFixed(2);
	
}
