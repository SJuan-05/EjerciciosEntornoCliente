document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.getElementById("miFormulario");
  
    formulario.addEventListener("submit", function(evento) {

      const nombre = document.getElementById("nombre").value.trim();
      const email = document.getElementById("email").value.trim();
      const edad = document.getElementById("edad").value.trim();
  
      if (nombre === "" || email === "" || edad === "") {
        evento.preventDefault();
        alert("Envío cancelado: hay campos vacíos.");
      } else {
        alert("Formulario enviado correctamente.");
      }
    });
  
  });
  