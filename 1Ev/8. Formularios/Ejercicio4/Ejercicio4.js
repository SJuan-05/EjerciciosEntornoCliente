document.addEventListener("DOMContentLoaded", () => {
    // Obtenemos los checkbox y el párrafo
    const chkNegrita = document.getElementById("negrita");
    const chkCursiva = document.getElementById("cursiva");
    const texto = document.getElementById("texto");

    // Función para aplicar estilos según el estado de los checkbox
    function actualizarEstilos() {
      texto.style.fontWeight = chkNegrita.checked ? "bold" : "normal";
      texto.style.fontStyle = chkCursiva.checked ? "italic" : "normal";
    }

    // Asociamos el evento "change" a ambos checkbox
    chkNegrita.addEventListener("click", actualizarEstilos);
    chkCursiva.addEventListener("click", actualizarEstilos);
  });