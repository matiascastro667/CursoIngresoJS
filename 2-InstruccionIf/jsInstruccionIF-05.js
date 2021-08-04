function mostrar()
{
	//tomo la edad  
	  
	let edad;
	edad  = parseInt(document.getElementById("txtIdEdad").value);
	
	//if (!(edad >= 13 && edad <= 17)) //niega q sea adolescente
	if (edad > 17 || edad < 13 )
	{
	alert("usted NO es adolescente");
    }
	
}//FIN DE LA FUNCIÓN