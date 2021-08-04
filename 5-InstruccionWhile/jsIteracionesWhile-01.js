/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	let control = 0;
	let mensaje = "";

	while (control < 10){
		mensaje = "" + control + mensaje;
		control++
		//console.log(control);
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN