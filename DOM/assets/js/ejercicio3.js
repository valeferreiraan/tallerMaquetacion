function clasificarTriangulo() {
    // Obtener los valores ingresados por el usuario
    var lado1 = parseFloat(document.getElementById('lado1').value);
    var lado2 = parseFloat(document.getElementById('lado2').value);
    var lado3 = parseFloat(document.getElementById('lado3').value);
  
    // Validar que se ingresaron valores numéricos positivos
    if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3) || lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
      alert("Ingrese valores válidos para los lados del triángulo.");
      return;
    }
  
    // Clasificar el triángulo
    if (lado1 === lado2 && lado2 === lado3) {
      mostrarResultado("El triángulo es equilátero.");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
      mostrarResultado("El triángulo es isósceles.");
    } else {
      mostrarResultado("El triángulo es escaleno.");
    }
  }
  
  function mostrarResultado(mensaje) {
    document.getElementById('resultado').innerText = mensaje;
  }
  
  