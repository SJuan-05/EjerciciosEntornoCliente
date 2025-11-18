const precioArt = parseFloat(prompt("Introduzca el precio del articulo"));

const iva = 21/100;

const precioNeto =(precioArt * iva) + precioArt;
const parteIva = precioArt * iva;

alert("El precio bruto del articulo es " + precioArt.toFixed(2) + "€, el IVA del producto es " + parteIva.toFixed(2) + "€, y el producto con el IVA incluido es " + precioNeto.toFixed(2));

