document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor");

    document.getElementById("btnAzul").addEventListener("click", () => {
        contenedor.style.backgroundColor = "blue";
        contenedor.style.color = "white"; // texto visible sobre azul
    });

    document.getElementById("btnVerde").addEventListener("click", () => {
        contenedor.style.backgroundColor = "green";
        contenedor.style.color = "white"; // texto visible sobre verde
    });

    document.getElementById("btnRestaurar").addEventListener("click", () => {
        contenedor.style.backgroundColor = "white";
        contenedor.style.color = "black";
    });
});
