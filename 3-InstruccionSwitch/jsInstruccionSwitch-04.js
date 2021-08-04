function mostrar()
{
	let mes;
	mes = document.getElementById("txtIdMes").value;

	switch(mes){
		case "Abril":
		case "Junio":
		case "Septiembre ":
		case "Noviembre":
			alert("este mes tiene 30 dias");
		break;

		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre ":
		case "Diciembre":
			alert("este mes tiene 31 dias");
		break;
		case "Febrero":
			alert("este mes tiene 28 dias");
		break;
							
		
	}



}//FIN DE LA FUNCIÓN