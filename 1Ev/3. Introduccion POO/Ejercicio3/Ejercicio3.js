function sumarDiez(){
    let texto = document.getElementById('texto');
    let valor = parseInt(texto.value);
    valor += 10;
    texto.value = valor;
}

function inicializar(){
    valor = 0;
    texto.value = valor;
}

