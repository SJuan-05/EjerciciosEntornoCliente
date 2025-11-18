function generarNumeroAleatorio(){
    let valor= document.getElementById('texto');
    let num = parseInt(valor.value);
    let numAleatorio = Math.floor(Math.random() * 11);
    if (numAleatorio == num) {
        alert("Felicidades, has acertado el número");
    } else {
        alert("Continua intentandolo");
    }
}


