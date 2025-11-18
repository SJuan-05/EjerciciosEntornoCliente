const precioArt = parseFloat(prompt("Introduzca el precio del articulo"));

function calcularIva(precioArt) {
    const iva = 21 / 100;
    const parteIva = precioArt * iva;
    return parteIva;
}

function calcularPrecioTotal(precioArt, parteIva) {
    return precioArt + parteIva;
}

const parteIva = calcularIva(precioArt);
const precioNeto = calcularPrecioTotal(precioArt, parteIva);

alert(
  "El precio bruto del articulo es " + precioArt.toFixed(2) + "€, " +
  "el IVA del producto es " + parteIva.toFixed(2) + "€, " +
  "y el producto con el IVA incluido es " + precioNeto.toFixed(2) +  "€"
);
