window.onload = function () {
    alert("¡Bienvenido a la página!");

    // Pasados 20 segundos abrir otro documento
    setTimeout(function () {
        window.open("https://www.google.com", "_blank");
        }, 20000);
};