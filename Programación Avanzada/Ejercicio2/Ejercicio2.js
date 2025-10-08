let mes = prompt("Introduce el mes del año y te dire que estación");

switch(mes){
    case "diciembre": case "enero": case "febrero":
    alert("Es invierno");
    break;
    
    case "marzo": case "abril": case "mayo":
    alert("Es primavera");
    break;

    case "junio": case "julio": case "agosto":
    alert("Es verano");
    break;

    case "septiembre": case "octubre": case "noviembre":
    alert("Es otoño")
    break;
    default:
        alert("Eso no es un mes del año")
        break;
}


