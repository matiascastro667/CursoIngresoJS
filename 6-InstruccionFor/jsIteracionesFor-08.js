function mostrar()
{
	let nro;
	let contadorDivisores = 0;
	flag = 0;
	
	nro = prompt("ingrese un nro para ver si es o no es primo");
	for(i = 1; i <= nro; i++){

		while(!(nro % i))
		{
		contadorDivisores++;
		

			if(contadorDivisores == 2){	
				alert( nro + " es primo");
			} else {
				alert(nro + " no es primo");
			}
		}
		
	}


}//FIN DE LA FUNCIÓN	
function mostrar()
{
	let x = 30;
	let y = 20;
	let z = 15;
	
	if( x>y && x>z){
		alert(x);
	} else if(y > z && y > x){
		alert(y);
	}else{
		alert(z);
	}






}