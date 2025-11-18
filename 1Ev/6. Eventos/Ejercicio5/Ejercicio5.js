document.addEventListener("DOMContentLoaded", () => {

    const numeroPresionado = document.getElementById("numero");

    numeroPresionado.addEventListener("keypress", (evento) => {
    
        const codigo = evento.charCode || evento.keyCode;

        if (codigo < 48 || codigo > 57) {

            evento.preventDefault();

            alert("Solo se permiten números");

        }

    });

});
