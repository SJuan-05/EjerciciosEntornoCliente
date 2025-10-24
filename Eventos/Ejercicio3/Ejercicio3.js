window.onload = function(){

    const tamaño = document.getElementById("tamaño");

    function tamaños(evento){

        if (evento.type == "mouseover"){

            evento.target.style.fontSize = "16pt";

        } else if (evento.type == "mouseout"){

            evento.target.style.fontSize = "12pt";

        }

    }
    
    tamaño.addEventListener("mouseover", tamaños);
    tamaño.addEventListener("mouseout", tamaños);

}