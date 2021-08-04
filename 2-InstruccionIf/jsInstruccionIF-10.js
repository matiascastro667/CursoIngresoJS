function mostrar()
{	let max = 10;
	let min = 1;
	let nota = Math.floor(Math.random()*(max - min + 1) + min);
	
	
	console.log(nota);
	if (nota >= 9)
	alert(nota + " excelente");
	else if (nota >= 4 )
	alert(nota + " aprobado");
	else if (nota <=3 ) 
	alert(nota + " la proxima se puede");

}//FIN DE LA FUNCIÓN