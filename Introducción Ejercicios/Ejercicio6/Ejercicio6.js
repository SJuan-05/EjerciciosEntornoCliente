let cadena = prompt("Introduzca una cadena de palabras");

const longitudCadena = cadena.length;
alert("La longitud de la cadena tiene " + longitudCadena + " carácteres");
alert("El texto en mayusculas es: " + cadena.toUpperCase());
alert("El texto en mayusculas es: " + cadena.toLowerCase());
alert("El texto separado es: " + cadena.split(" ").join(" \n"));
alert("El texto separado al revés es: " + cadena.split(" ").reverse().join("\n"))
document.write("El texto separado al revés es: " + cadena.split(" ").reverse().join("\n"));