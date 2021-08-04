function mostrar()
{
	let nro;
	let contadorPares = 0;
	
	nro = prompt("ingrese un nro hasta el que le gustaria conocer la cant de numeros pares");
	for(i = 1; i <= nro; i++){

		if(i % 2 == 0){
		contadorPares++;
		console.log(i);
		}
		

	}
	console.log("entre 1 y " + nro + " hay " + contadorPares + " numeros pares");
}//FIN DE LA FUNCIÓN