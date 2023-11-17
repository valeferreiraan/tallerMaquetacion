function mayusculas(){
    palabra =  document.getElementById('palabra').value;
    palabra = palabra.toUpperCase();
    alert("Su palabra en mayusculas: "+palabra+"");
}

function primeraLetra(){
    palabra =  document.getElementById('palabra').value;
    letra = palabra.charAt(0);
    alert("La primera letra es "+letra+" ")
}

function minuscula(){
    palabra =  document.getElementById('palabra').value;
    palabra = palabra.toLowerCase();
    alert("Su palabra en mayusculas: "+palabra+"");
}

function longitud(){
    palabra =  document.getElementById('palabra').value;
    alert("La longitud de su palabra es: "+palabra.length+"")
}