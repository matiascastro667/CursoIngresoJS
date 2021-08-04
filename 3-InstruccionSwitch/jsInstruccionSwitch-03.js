function mostrar(){
	let mes;
	mes = document.getElementById("txtIdMes").value;

	switch(mes){

		case "Febrero":
		alert("este mes tiene menos de 29 dias");
		break;

		case "Enero":
		case "Marzo":
	    case "Mayo":
	    case "Abril":  
	    case "Junio":
	    case "Julio":  
	    case "Agosto":
	    case "Septiembre":
	    case "Octubre":
	    case "Noviembre":  
	    case "Diciembre":
		alert("este mes tiene mas de 30 dias");
		
      	break;
	}
}