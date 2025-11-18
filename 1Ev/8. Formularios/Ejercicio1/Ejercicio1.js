document.addEventListener("DOMContentLoaded", () => {
    const nombre = document.getElementById("nombre");
    const formulario = document.getElementById("miFormulario");
    const aficiones = document.getElementById("aficiones");

    // Al cargar el formulario, poner el foco en "nombre"
    nombre.focus();

    // Evento onchange del campo aficiones
    aficiones.addEventListener("change", function() {
      const longitud = this.options.length;
      const indice = this.selectedIndex;
      const valor = this.options[indice].value;

      alert(`La longitud de la lista es ${longitud}\nEl índice seleccionado es ${indice}\nEl valor del índice seleccionado es ${valor}`);
    });

    // Validación al enviar el formulario
    formulario.addEventListener("submit", function(event) {
      const dni = document.getElementById("dni").value.trim();
      const telefono = document.getElementById("telefono").value.trim();
      const regexTelefono = /^[0-9]{9}$/;

      if (dni === "") {
        alert("El campo DNI es obligatorio.");
        event.preventDefault();
        return;
      }

      if (!regexTelefono.test(telefono)) {
        alert("El teléfono debe tener 9 dígitos consecutivos sin espacios ni guiones.");
        event.preventDefault();
        return;
      }

      alert("Formulario enviado correctamente");
    });
  });