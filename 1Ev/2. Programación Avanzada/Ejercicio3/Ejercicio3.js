document.write('<h1>Bienvenido a mi página</h1>');
document.write('<h1 id="navegador"></h1>');


document.getElementById("navegador").innerHTML =
 "Estas utilizando el siguiente navegador " + navigator.platform;

let continuar = confirm("Quieres continuar adelante?");

if(continuar){
    alert("Continuamos")
}