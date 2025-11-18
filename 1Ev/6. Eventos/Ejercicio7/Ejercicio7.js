/*alert("Página que contiene un reloj digital");

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


alert("Página que contiene un reloj digital");
  muestraReloj();
*/


// Cuando se abandona o cierra la página - evento en desuso
window.onbeforeunload = function() {
  console.log("Página cancelada");
};

function muestraReloj() {
    var fechaHora = new Date();
    var horas = fechaHora.getHours();
    var minutos = fechaHora.getMinutes();
    var segundos = fechaHora.getSeconds();
    
    if(horas < 10) { 
      horas = '0' + horas; }
    
    if(minutos < 10) { 
      minutos = '0' + minutos; }
    
    if(segundos < 10) { 
      segundos = '0' + segundos; }
    
    document.getElementById("reloj").innerHTML = horas+':'+minutos+':'+segundos;
  }
  window.onload = function() {
    setInterval(muestraReloj, 1000);
  }