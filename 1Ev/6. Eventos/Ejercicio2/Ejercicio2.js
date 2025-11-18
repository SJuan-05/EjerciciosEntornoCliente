window.onload = function(){

    const tamaño = document.getElementById("tamaño");
    tamaño.addEventListener("mouseover", masGrande);
    tamaño.addEventListener("mouseout", masPequeño);
}

function masGrande(){
    
    //tamaño.style.fontSize = "16pt";
    this.style.fontSize = "16pt";
}

function masPequeño(event){

    event.target.style.fontSize = "12pt";

}