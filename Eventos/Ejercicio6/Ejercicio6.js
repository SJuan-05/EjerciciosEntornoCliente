document.addEventListener("DOMContentLoaded", () => {

    // Seleccionamos todos los botones de la página
    const botones = document.querySelectorAll("button");
  
    // Añadimos el evento click a cada botón
    botones.forEach(boton => {
      boton.addEventListener("click", () => {
        alert("Has pulsado sobre un botón");
      });
    });
  
  });
  