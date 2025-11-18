document.addEventListener("DOMContentLoaded", () => {

  const contenedor = document.getElementById("contenedor");
  const boton1 = document.getElementById("boton1");
  const boton2 = document.getElementById("boton2");

  // Listener del contenedor
  contenedor.addEventListener("click", () => {
    alert("Clic detectado en el contenedor");
  });

  // Listener del Botón 1
  boton1.addEventListener("click", (event) => {
    alert("Botón 1 clickeado");
    event.stopPropagation(); // <-- evita que el contenedor reciba el evento
  });

  // Listener del Botón 2
  boton2.addEventListener("click", () => {
    alert("Botón 2 clickeado");
    // No usamos stopPropagation aquí
  });

});
