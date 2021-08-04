/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;

	sexo = prompt("Ingrese su sexo , 'F' para fememino y 'M' para masculino").toLowerCase();

	while(sexo != "f" && sexo != "m"){
	sexo = prompt("el sexo ingresado no es valido, por favor vuelva a ingresarlo").toLowerCase();
	}	
	document.getElementById("txtIdSexo").value = sexo;

	
}//FIN DE LA FUNCIÓN 