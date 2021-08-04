function mostrar()
{
	let edad;
	edad  = parseInt(document.getElementById("txtIdEdad").value);

 /*if (edad <= 17 && edad >=13)//adolescente
{
	alert("es adolescente");
}

 if (edad < 13)
 {
	 alert("es niño");
 } 

 if (edad >18 || edad >=17) 
 {
	 alert ("es adulto");
 }*/


 
 if ( edad > 17)
 {
	 alert ("es adulto");
 }
 
  else{
	if (edad >=13) 
	{
		alert("es adolescente");
	}
		
		else
		{
		alert("es niño");
		} 
	}
}

//FIN DE LA FUNCIÓN