var parrafo = document.getElementById("parrafo");
var color = document.defaultView.getComputedStyle(parrafo,
  '').getPropertyValue('color');

if (color === 'rgb(0, 0, 255)') {
    alert("El párrafo es azul");
}
