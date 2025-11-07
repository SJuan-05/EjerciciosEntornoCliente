document.addEventListener("DOMContentLoaded", () => {

    const tamaño = document.getElementById("tamaño");
    tamaño.addEventListener("mouseover", masGrande);
    tamaño.addEventListener("mouseout", masPequeño);

    function masGrande(event){
    
        event.target.style.fontSize = "16pt";
    
    }
    
    function masPequeño(){
    
        this.style.fontSize = "12pt";
    
    }

})