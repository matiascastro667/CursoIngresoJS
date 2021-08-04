function mostrar()
{
	let nro;

	nro = prompt("ingresar nro");
	while(!(nro == 9)){
		nro=parseInt(prompt("ingrese un nro entre 1 y 10"));
		if(nro ==9){
			alert("el nro ingresado es " + nro)
			break;
			
		}
		
	}



}//FIN DE LA FUNCIÓN