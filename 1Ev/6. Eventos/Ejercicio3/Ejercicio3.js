window.onload = function(){

    let tamaño = document.getElementById("tamaño");
    tamaño.addEventListener("mouseover", tamaños);
    tamaño.addEventListener("mouseout", tamaños);


    function tamaños(event){

        if (event.type == "mouseover"){

            event.target.style.fontSize = "16pt";

        } else if (event.type == "mouseout"){

            event.target.style.fontSize = "12pt";

        }

    }

}