document.addEventListener("DOMContentLoaded", () => {
    // Seleccionamos todos los botones de radio del grupo "color"
    const radios = document.querySelectorAll('input[name="color"]');
    const texto = document.getElementById("texto");

    // Recorremos cada radio y añadimos el evento "change"
    radios.forEach(radio => {
      radio.addEventListener("change", () => {
        texto.style.color = radio.value; // Cambia el color al valor del radio
      });
    });
  });