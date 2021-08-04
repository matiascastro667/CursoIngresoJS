function mostrar()
{
	let nro;
	let contadorDivisores = 0;
	
	nro = prompt("ingrese un nro hasta el que le gustaria conocer la cant de divisores");
	for(i = 1; i <= nro; i++){

		if(nro % i == 0){
		contadorDivisores++;
		console.log(i);
		}
		

	}
	console.log("entre 1 y " + nro + " hay " + contadorDivisores + " divisores");

}//FIN DE LA FUNCIÓN