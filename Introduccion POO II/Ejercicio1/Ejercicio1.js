// Esperamos a que toda la página esté cargada (HTML + imágenes + CSS)
window.onload = function() {

    // Seleccionamos el formulario por su ID
    const formulario = document.getElementById("formulario-dni");
  
    // Escuchamos el evento 'submit'
    formulario.addEventListener("submit", function(event) {
      event.preventDefault(); // Evita que el formulario se envíe y recargue la página
  
      // Obtenemos el valor del campo DNI
      const dni = document.getElementById("dni").value.trim();
  
      // Validamos si está vacío
      if (dni === "") {
        alert("El campo DNI no tiene datos.");
      } else {
        alert("DNI enviado correctamente: " + dni);
      }
    });
  
  };
  