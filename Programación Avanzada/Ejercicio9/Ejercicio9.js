function abrirVentana(){

    let ventana = window.open("", "ventanaSecundaria", "width=500,height=500");

    ventana.document.write(`
        <html>
          <head><title>Ventana Secundaria</title></head>
          <body>
            <button id="cerrarVentana">Cerrar</button>
          </body>
        </html>
    `);

    ventana.document.getElementById("cerrarVentana").addEventListener("click", function(){
        ventana.close();
    })
}