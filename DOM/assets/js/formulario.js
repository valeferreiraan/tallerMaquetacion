const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

function verificar_formulario() {
  const expresiones = {
    doc: /[^0-9]$/,
    nom: /\W/,
    cor: /[a-zA-Z0-9_.+-]+@misena.edu.co/,
    con1: /[0-9]/,
    con2: /[a-z]/,
    con3: /[A-Z]/,
  }
  // Obtener los valores del usuario
  const tipo_documento = document.getElementById("tipo_documento").value;
  const documento = document.getElementById("documento");
  const documentol = document.getElementById("documento").value;
  const nombre = document.getElementById("nombre");
  const apellido = document.getElementById("apellido");
  const nacimiento = document.getElementById("nacimiento").value;
  const correo = document.getElementById("correo");
  const contraseña = document.getElementById("contraseña1").value;
  const contraseñav = document.getElementById("contraseña2").value;
  const contraseña1 = document.getElementById("contraseña1");
  const contraseña2 = document.getElementById("contraseña2");
  const terminos = document.getElementById("terminos");
  const ano = nacimiento.substring(0,4);
  

  if (tipo_documento == "0" || documento == "" || nombre == "" || apellido == "" || nacimiento == "" || correo == "" || contraseña1 == "" || contraseña2 == "") {
    appendAlert('¡Faltan datos por rellenar!', 'danger')
  }
  else if (documentol.length < 5) {
    appendAlert("¡El documento debe ser de al menos 5 digitos!", "danger")
  }
  else if (expresiones.doc.test(documento.value)) {
    appendAlert("¡El documento debe contener solo numeros!", "danger")
  }
  else if (expresiones.nom.test(nombre.value)) {
    appendAlert("¡El nombre debe contener solo caracteres alfanumericos!", "danger")
  }
  else if (expresiones.nom.test(apellido.value)) {
    appendAlert("¡El apellido debe contener solo caracteres alfanumericos!", "danger")
  }
  else if (ano > 2002) {
    appendAlert("¡Debes ser mayor de edad para este formulario!", "danger")
  }
  else if (expresiones.cor.test(correo.value) == false) {
    appendAlert("¡El correo ingresado no tiene dominio @misena.edu.co!","danger")
  }
  else if (contraseña.length < 10) {
    appendAlert("¡La contraseña debe ser de al menos 10 digitos!", "danger")
  }
  else if (expresiones.con1.test(contraseña1.value) == false || expresiones.con2.test(contraseña1.value) == false || expresiones.con3.test(contraseña1.value) == false) {
    appendAlert("¡La contraseña debe contener al menos una mayuscula, minuscula, numero y caracter!","danger")
  }
  else if (contraseña !== contraseñav) {
    appendAlert("¡Las contraseñas no coinciden!", "danger")
  }
  else if (terminos.checked != true) {
    appendAlert("¡No aceptaste los terminos y condiciones!","danger")
  }
  else {
    appendAlert("Datos enviados exitosamente", "success")
  }
}