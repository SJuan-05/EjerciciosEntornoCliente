document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnImagenes").addEventListener("click", () => {
        const imagenes = document.getElementsByTagName("img");
        alert("Número total de imágenes: " + imagenes.length);
    });

    document.getElementById("btnEnlaces").addEventListener("click", () => {
        const enlaces = document.getElementsByTagName("a");
        alert("Número total de enlaces: " + enlaces.length);
    });
});