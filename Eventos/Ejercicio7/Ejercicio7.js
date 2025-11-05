alert("Página que contiene un reloj digital");

document.addEventListener("DOMContentLoaded", () => {

  const reloj = document.getElementById("reloj");

  // Función que actualiza la hora
  function actualizarReloj() {
    const ahora = new Date();
    const horas = String(ahora.getHours()).padStart(2, "0");
    const minutos = String(ahora.getMinutes()).padStart(2, "0");
    const segundos = String(ahora.getSeconds()).padStart(2, "0");

    reloj.textContent = `${horas}:${minutos}:${segundos}`;
  }

  // Actualizamos cada segundo
  setInterval(actualizarReloj, 1000);
  actualizarReloj(); // Mostramos inmediatamente

});

window.addEventListener("onbeforeunload", (event) => {
  alert("Página cancelada");
});
