// documento.js

function verificarRespuesta() {
    // Obtener las selecciones del usuario
    var nombreSeleccionado = document.getElementById("nombre").value;
    var apellidoSeleccionado = document.getElementById("apellido").value;
    var actividadSeleccionada = document.getElementById("actividad").value;

    // Definir los nombres, apellidos y actividades de los instructores
    var instructores = [
        { nombre: "Natalia", apellido: "Laiton", actividad: "Baile" },
        { nombre: "Julian", apellido: "Roa", actividad: "Teatro" },
        { nombre: "Lina", apellido: "Moreno", actividad: "Director Artístico" },
        { nombre: "Guillermo", apellido: "Rodríguez", actividad: "Director General" },
        // Agrega más instructores según sea necesario
    ];

    // Verificar la respuesta del usuario
    var respuestaCorrecta = instructores.some(function (instructor) {
        return (
            instructor.nombre === nombreSeleccionado &&
            instructor.apellido === apellidoSeleccionado &&
            instructor.actividad === actividadSeleccionada
        );
    });

    // Mostrar el mensaje correspondiente
    var mensaje = document.getElementById("mensajeRespuesta");
    if (respuestaCorrecta) {
        mensaje.innerHTML = "La respuesta es correcta.";
    } else {
        mensaje.innerHTML = "La respuesta es incorrecta.";
    }
}
