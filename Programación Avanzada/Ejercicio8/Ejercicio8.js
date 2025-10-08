window.onload = function() {
    document.getElementById("url").textContent = "URL: " + window.location.href;
    document.getElementById("pathname").textContent = "Pathname: " + window.location.pathname;
    document.getElementById("protocolo").textContent = "Protocolo: " + window.location.protocol;
  };

function abrirGoogle(){
    document.getElementById("botonGoogle").onclick = window.location.href = "https://www.google.com";
}
