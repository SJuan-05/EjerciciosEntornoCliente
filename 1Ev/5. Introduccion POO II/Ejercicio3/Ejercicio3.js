// Muestra el número total de enlaces en el documento
function numEnlaces() {
    var enlaces = document.getElementsByTagName("a");
    document.getElementById("resultado").innerHTML = "Número total de enlaces: " + enlaces.length;
  }
  
  // Muestra las referencias (href) de todos los enlaces
  function refEnlaces() {
    var enlaces = document.getElementsByTagName("a");

    var texto = "Referencias de todos los enlaces:<br>";

    for (var i = 0; i < enlaces.length; i++) {

      texto += enlaces[i].href + "<br>";

    }

    document.getElementById("resultado").innerHTML = texto;
  }
  
  // Muestra las referencias de los enlaces por cada párrafo
  function refPorParrafo() {
    var parrafos = document.getElementsByTagName("p");
    var texto = "";
    for (var i = 0; i < parrafos.length; i++) {

      var enlaces = parrafos[i].getElementsByTagName("a");

      texto += "Párrafo " + (i + 1) + ":<br>";

      for (var j = 0; j < enlaces.length; j++) {

        texto += "- " + enlaces[j].href + "<br>";

      }

    }

    document.getElementById("resultado").innerHTML = texto;
    
  }
  