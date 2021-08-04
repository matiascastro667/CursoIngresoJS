/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;

	//pedir dato
	clave = prompt("ingrese clave");

	//mientras el dato sea invalido, lo informo y vuelvo a pedirlo
	while( clave !="utn750"){
		clave = prompt("clave erronea, ingrese la clave nuevamente");
	}
	alert("clave correcta!");

	
}//FIN DE LA FUNCIÓN
