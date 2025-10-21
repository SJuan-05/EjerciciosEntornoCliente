function crearCaja() {
    // Creo el elemento en este caso tipo input
    var caja = document.createElement("input");
  
    // Le doy atributos
  
    // Le pongo que es de tipo texto
    caja.setAttribute("type", "text")
  
    // Le pongo ID
    caja.setAttribute("id", "elementoCaja")
  
    // Pongo el texto que quiero en el campo value
    caja.setAttribute("placeholder", "Aprobando JavaScript con Mati")
  
    // Tamaño del campo
    caja.setAttribute("size", "30")
  
    // Límite de caracteres
    caja.setAttribute("maxlength", "50")
  
    // Lo añado al body
    document.body.appendChild(caja);
  }