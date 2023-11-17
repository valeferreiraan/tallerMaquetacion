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

//const alertTrigger = document.getElementById('liveAlertBtn')
//if (alertTrigger) {
  //alertTrigger.addEventListener('click', () => {
    //appendAlert('Nice, you triggered this alert message!', 'danger')
  //})
//}

function verificar_formulario() {
  // Obtener los valores del usuario
  const documento = document.getElementById("documento").value;
  const tipo_documento = document.getElementById("tipo_documento").value;
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const nacimiento = document.getElementById("nacimiento").value;
  const correo = document.getElementById("correo").value;
  const contraseña1 = document.getElementById("contraseña1").value;
  const contraseña2 = document.getElementById("contraseña2").value;
  const terminos = document.getElementById("terminos");
  

  if (tipo_documento == "0" || documento == "" || nombre == "" || apellido == "" || nacimiento == "" || correo == "" || contraseña1 == "" || contraseña2 == "") {
    appendAlert('¡Faltan datos por rellenar!', 'danger')
  }
  else if (contraseña1 !== contraseña2) {
    appendAlert("¡Las contraseñas no coinciden!", "danger")
  }
  else if (terminos.checked != true) {
    appendAlert("¡No aceptaste los terminos y condiciones!","danger")
  }
  else {
    appendAlert("Datos enviados exitosamente", "success")
  }
}

function pruebas() {
  const terminos = document.getElementById("terminos");
  appendAlert(`euuu ${terminos.checked}`, 'danger')
  
}