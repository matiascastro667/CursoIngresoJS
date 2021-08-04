/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	let nro1;
	let nro2;
	let resultado;
	
	nro1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	//nro1 = parseInt(nro1) 
	nro2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	//nro = parseInt(nro2) 
	resultado = nro1 +  nro2;
	
	alert("el resultado es "  + resultado );
		
}

function restar()
{
	let nro1;
let nro2;
let resultado;

nro1 = parseInt(document.getElementById("txtIdNumeroUno").value);
//nro1 = parseInt(nro1) 
nro2 = parseInt(document.getElementById("txtIdNumeroDos").value);
//nro = parseInt(nro2) 
resultado = nro1 -  nro2;

alert("el resultado es "  + resultado );
}

function multiplicar()
{ let nro1;
	let nro2;
	let resultado;
	
	nro1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	//nro1 = parseInt(nro1) 
	nro2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	//nro = parseInt(nro2) 
	resultado = nro1 * nro2;
	
	alert("el resultado es "  + resultado );
	
}

function dividir()
{
	let nro1;
let nro2;
let resultado;

nro1 = parseInt(document.getElementById("txtIdNumeroUno").value);
//nro1 = parseInt(nro1) 
nro2 = parseInt(document.getElementById("txtIdNumeroDos").value);
//nro = parseInt(nro2) 
resultado = nro1 /  nro2;

alert("el resultado es "  + resultado );
}

