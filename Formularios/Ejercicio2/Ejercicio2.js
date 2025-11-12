document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("colores");
    const texto = document.getElementById("texto");

    // Evento al cambiar la opción del select
    select.addEventListener("change", () => {
      const colorSeleccionado = select.value;
      texto.style.color = colorSeleccionado; 
    });
  });