// Cambia el color de todos los párrafos a verde
function parrafosVerdes() {

    var parrafos = document.getElementsByTagName("p");

    for (var i = 0; i < parrafos.length; i++) {

      parrafos[i].style.color = "green";

    }

  }
  
  // Devuelve todos los párrafos a su color original
  function desactivarColor() {

    var parrafos = document.getElementsByTagName("p");

    for (var i = 0; i < parrafos.length; i++) {

      parrafos[i].style.color = "black";

    }
    
  }
  