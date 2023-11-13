function convertirTemperatura() {
    // Obtener los valores del usuario
    const temperatura = parseFloat(document.getElementById("temperaturaInput").value);
    const unidadDesde = document.getElementById("unidadDesde").value;
    const unidadA = document.getElementById("unidadA").value;

    // Verificar si se ha seleccionado una opción válida
    if (unidadDesde === "" || unidadA === "") {
      alert("Por favor, selecciona una opción válida.");
      return;
    }

    // Realizar la conversión
    let resultado;

    if (unidadDesde === "celsius") {
      if (unidadA === "fahrenheit") {
        resultado = (temperatura * 9/5) + 32;
      } else if (unidadA === "kelvin") {
        resultado = temperatura + 273.15;
      } else {
        resultado = temperatura;
      }
    } else if (unidadDesde === "fahrenheit") {
      if (unidadA === "celsius") {
        resultado = (temperatura - 32) * 5/9;
      } else if (unidadA === "kelvin") {
        resultado = (temperatura - 32) * 5/9 + 273.15;
      } else {
        resultado = temperatura;
      }
    } else if (unidadDesde === "kelvin") {
      if (unidadA === "celsius") {
        resultado = temperatura - 273.15;
      } else if (unidadA === "fahrenheit") {
        resultado = (temperatura - 273.15) * 9/5 + 32;
      } else {
        resultado = temperatura;
      }
    }

    // Mostrar el resultado
    alert(`Resultado: ${resultado} ${unidadA}`);
  }