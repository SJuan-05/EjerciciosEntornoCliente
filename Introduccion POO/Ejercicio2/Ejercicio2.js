function comprobarCampo() {
    let dni = document.getElementById("dni").value;

    if (dni === "") {
        alert("El campo DNI está vacío, añada los datos correspondientes");
        return false; // Evita que se envíe el formulario
    }

    return true; // Permite enviar si no está vacío
}
