function mostrar()
{
	let destino;
	destino = document.getElementById("txtIdDestino").value;
   
	switch(destino){
	case "Bariloche":
		alert("oeste");
	break;
	case "Cataratas":  
	 alert("norte");
	 break;
	 
	case "Mar del plata":
		 alert("este");
	break;
		 
		case "Ushuaia":
			alert("sur");
	}

}//FIN DE LA FUNCIÓN