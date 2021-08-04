/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{	let dividendo;
	let divisor;
	let resultado;
	
	dividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	//nro1 = parseInt(nro1) 
	divisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);
	//nro = parseInt(nro2) 
	resultado = dividendo %  divisor;
	
	alert("el resultado es "  + resultado );
	
}
