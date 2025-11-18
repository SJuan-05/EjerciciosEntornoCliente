var diasA = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
var mesesA = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

function mostrarFecha() {
    let fecha = new Date();
    let diaSemanaNombre = diasA[fecha.getDay()];
    let diaNumero = fecha.getDate();
    let mesNombre = mesesA[fecha.getMonth()];
    let año = fecha.getFullYear();

    document.getElementById("texto").textContent =
    diaSemanaNombre + ", " + diaNumero + " de " + mesNombre + " de " + año;
}

    