window.onload = function(){

    const tamaño = document.getElementById("tamaño");

    function masGrande(grande){
    
        grande.target.style.fontSize = "16pt";
    
    }
    
    function masPequeño(pequeño){
    
        pequeño.target.style.fontSize = "12pt";
    
    }
    
    tamaño.addEventListener("mouseover", masGrande);
    tamaño.addEventListener("mouseout", masPequeño);

}