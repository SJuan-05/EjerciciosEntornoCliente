document.addEventListener("DOMContentLoaded", () => {
    const btnCrear = document.getElementById("btnCrear");
    const contenedor = document.getElementById("contenedor");
    let contador = 1; // para numerar las cajas

    btnCrear.addEventListener("click", () => {
        // Creamos un <input>
        const input = document.createElement("input");

        // Atributos
        input.setAttribute("type", "text");
        input.setAttribute("name", "campo" + contador);
        input.setAttribute("placeholder", "Caja de texto " + contador);
        input.setAttribute("maxlength", "30");

        // Clase CSS para estilos
        input.classList.add("cajaTexto");

        // Lo añadimos al contenedor
        contenedor.appendChild(input);

        contador++; // aumentamos el número para la siguiente caja
    });
});
