
window.onload = function(){
    document.getElementById('btnAnadir').onclick = function(){

        const contenedor = document.getElementById('contenedor');
        const pAñadido = document.createElement('p');
        pAñadido.textContent = "Párrafo añadido";
        contenedor.appendChild(pAñadido);
    }


    document.getElementById('btnInsertar').onclick = function(){

        const contenedor = document.getElementById('contenedor');
        const primerP = document.querySelector('p');
        if (primerP){
            const pInsertado = document.createElement("p");
            pInsertado.textContent = "Párrafo insertado";
            primerP.insertAdjacentElement('afterend', pInsertado) ;
        }
    }


    document.getElementById('btnReemplazar').onclick = function(){

        const contenedor = document.getElementById('contenedor');
        const todosP = contenedor.querySelectorAll("p");
        if (todosP.length > 1){
            todosP[1].textContent = "Párrafo reemplazado";
        }else{
            alert("No hay un segundo párrafo para reemplazarlo");
        }
    }


    document.getElementById('btnBorrar').onclick = function(){

        const contenedor = document.getElementById('contenedor');
        const ptodosB = document.querySelectorAll('p');
        if (ptodosB.length > 1){
            contenedor.removeChild(ptodosB[1]);

        }else{
            alert("No hay un segundo párrafo para reemplazarlo");
        }

    }


    document.getElementById('btnClonar').onclick = function(){

        const contenedor = document.getElementById('contenedor');
        const clonDiv = contenedor.cloneNode(true);
        document.body.appendChild(clonDiv);
    }
}