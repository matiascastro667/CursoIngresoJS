/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

let nro1;
let nro2;
let resultado;

nro1 = parseInt(document.getElementById("txtIdNumeroUno").value);
//nro1 = parseInt(nro1) 
nro2 = parseInt(document.getElementById("txtIdNumeroDos").value);
//nro = parseInt(nro2) 
resultado = nro1 +  nro2;

alert("el resultado es "  + resultado );
	
}

