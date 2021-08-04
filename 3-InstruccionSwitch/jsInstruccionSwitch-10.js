function mostrar() {
	let estacion;
	let destino;
  
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
  
	switch (estacion) {
	  case "Invierno":
		if (destino == "Bariloche") {
		  alert("Se viaja");
		} else {
		  alert("No se viaja");
		}
		break;
  
	  case "Verano":
		if (destino == "Mar del plata" || destino == "Cataratas") {
		  alert("Se viaja");
		} else if (destino == "Bariloche" || destino == "Cordoba") {
		  alert("No se viaja");
		}
		break;
  
	  case "Otoño":
		alert("Se viaja");
  
		break;
  
	  case "Primavera":
		if (destino == "Bariloche") {
		  alert("No se viaja");
		} else {
		  alert("Se viaja");
		}
		break;
	}
}
 
 /*let destino;
	let estacion;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacion) {
		case "Invierno":
			If (destino == "Bariloche")
			{
				alert ("Se viaja");
			} else			
			{
			alert("no se viaja");
			}
		break;
		
		case "Verano":
			if ((destino == "Cataratas")||(destino == "Mar del plata"))
			 {
			alert ("Se viaja");
			}
				else if (destino == "Bariloche")
			{
			alert("no se viaja");
		
		break;
		
		case "Otoño":
			If ((destino == "Cordoba")||(destino == "Mar del plata")||(destino = "Cataratas")||(destino == "Mar del plata"))
			{
				alert ("Se viaja");
			}

		break;
		
		case "Primavera":
			if ((destino == "Cordoba")||(destino == "Mar del plata")||(destino = "Cataratas"))
			{
				alert ("Se viaja");
			}
			else if (destino == "Bariloche")
			{
				alert("no se viaja");
			}
		break;
	}	*/
//FIN DE LA FUNCIÓN

{
	let estacion;
	let destino;
	let seViaja = 1;
  
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	
	switch(destino){
		case "Bariloche":
			if((estacion == "Verano") || (estacion == "Primavera")){
				seViaja = 0;
			} else {
				seViaja = 1;
			}
		break;

		case "Cordoba":
			if(estacion = "Invierno") {
				seViaja = 0
			} else {
				seViaja = 1;
			}
		break;

		case "Cataratas":
			if(estacion = "Invierno"){
				seViaja = 0;
			}
		break;

		case "Mar del plata":
			if{

			}
		break;

	}

}