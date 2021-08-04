function mostrar()
{
	let destino;
	destino = document.getElementById("txtIdDestino").value;
	switch(destino){
		case "Bariloche":
			alert(" ojo que hace frio");
		break;
		case "Cataratas":  
		 alert("mucho calor");
		 break;
		 
		case "Mar del plata":
			 alert("calor");
		break;
			 
			case "Ushuaia":
				alert("un frioooo");
		}

}//FIN DE LA FUNCIÓN