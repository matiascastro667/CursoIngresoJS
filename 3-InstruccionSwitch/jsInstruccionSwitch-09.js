function mostrar()
{
	let precio = 15000;
	let estacion;
	let destino;
	let porcentaje;
	let precioFinal;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacion)
	{
		case "Verano":
			if (destino == "Bariloche")
			{
				porcentaje = precio * 0.2;
				precioFinal = precio - porcentaje ;
				alert("el valor de Briloche en " + estacion + " es " + precioFinal);
			} 
			else if ((destino == "Cordoba") || (destino == "Cataratas"))
			{
				porcentaje = precio * 0.1;
				precioFinal = precio + porcentaje ;
				alert("el valor de este destino en " + estacion + " es " + precioFinal);
			}
			else (destino == "Mar del plata")
			{
				porcentaje = precio * 0.2;
				precioFinal = precio + porcentaje ;
				alert("el valor de MDQ en " + estacion + " es " + precioFinal);
			}

		break;	
	
		case "Invierno":
			if (destino == "Bariloche")
			{
				porcentaje = precio * 0.2;
				precioFinal = precio + porcentaje;
				alert("es valor de Bariloche en " + estacion + " es " + precioFinal);
			} 
			else if ((destino == "Cordoba") || (destino == "Cataratas"))
			{
				porcentaje = precio * 0.1;
				precioFinal = precio - porcentaje;
				alert("el valor de este destino en " + estacion + " es " + precioFinal);
			}
			else (destino == "Mar del plata")
			{
				porcentaje = precio * 0.2;
				precioFinal = precio - porcentaje;
				alert("el valor de MDQ en " + estacion + " es " + precioFinal);
			}
		break;

		case "Otoño":
		case "Primavera":

		if ((destino == "Bariloche") || (destino == "Mar del plata") || (destino == "Cataratas"))
		{
			porcentaje = precio * 0.1;
			precioFinal = precio + porcentaje;
			alert("es valor de este destino en " + estacion + " es " + precioFinal);
		} 
		else if (destino == "Cordoba")
		{
			precioFinal = precio ;
			alert("el valor de Cordoba en " + estacion + " es " + precioFinal);
		}	
	break;
	}
}//FIN DE A FUNCIÓN