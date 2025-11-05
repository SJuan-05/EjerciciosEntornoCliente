// Esperamos a que el DOM esté listo (útil si el script se ejecuta en head)
document.addEventListener("DOMContentLoaded", () => {
    const enlace = document.getElementById("miEnlace");
  
    enlace.addEventListener("click", function(event) {
      // Evita el comportamiento normal del enlace (navegar a href)
      event.preventDefault();
  
      // Acción alternativa: mostrar mensaje
      alert("Navegación cancelada: el enlace no te llevará a youtube.com");
    });
  });
  