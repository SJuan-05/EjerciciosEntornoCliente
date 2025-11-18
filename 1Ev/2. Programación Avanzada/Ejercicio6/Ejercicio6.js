function mostrarFecha() {
    let fecha = new Date();
    let hora = fecha.getHours();
    let minuto = fecha.getMinutes();
    let minutosFormateados = String(minuto).padStart(2, "0");

    if (hora > 6 && hora < 14){

        document.getElementById("texto").textContent =
        "Buenos dias, son las " + hora + ":" + minutosFormateados + " horas";

    }else if (hora > 14 && hora < 24){

        document.getElementById("texto").textContent =
        "Buenos tardes, son las " + hora + ":" + minutosFormateados + " horas";

    }else{

        document.getElementById("texto").textContent =
        "Buenos noches, son las " + hora + ":" + minutosFormateados + " horas";

    }
} 
