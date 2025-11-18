window.onload = function () {
    document.getElementById("btnAnadir").onclick = function(){

        const contenedorL = document.getElementById("contenedorL");
        const añadirL = document.createElement("li");
        añadirL.textContent = "Animal añadido";
        contenedorL.appendChild(añadirL);
    }


    document.getElementById("btnInsertar").onclick = function(){
        const contenedorL = document.getElementById('contenedorL');
        const primerL = contenedorL.querySelector('li');
        if (primerL){
            const insertarL = document.createElement("li");
            insertarL.textContent = "Animal insertado";
            primerL.insertAdjacentElement('beforebegin', insertarL)
        }else{
            alert ("No hay ningún animal en la lista que reemplazar");
        }
    }


    document.getElementById("btnReemplazar").onclick = function(){
        const contenedorL = document.getElementById("contenedorL");
        const todosL = contenedorL.querySelectorAll('li');
        if (todosL.length > 1){
            const insertarL = document.createElement("li");
            insertarL.textContent = "Animal reemplazado"
            todosL[0].replaceWith(insertarL);
        }else{
            alert("No hay un segundo animal para reemplazar");
        }
    }


    document.getElementById("btnBorrar").onclick = function(){
        const contenedorL = document.getElementById("contenedorL");
        const todosL = contenedorL.querySelectorAll('li');
        if (todosL.length > 1){
            contenedorL.removeChild(todosL[0])
        }else{
            alert("No hay más de un animal en la lista, por lo tanto se quedaría vacía");
        }
    }


    document.getElementById("btnClonar").onclick = function(){
        const contenedorL = document.getElementById("contenedorL");
        const todosL = contenedorL.cloneNode(true);
        document.body.appendChild(todosL);
    }


    document.getElementById("btnSublistaDOM").onclick = function(){
        const leon = document.getElementById("leon");
        const subLista = document.createElement("ul");

        let comidaAnimal1 = document.createElement("li");
        comidaAnimal1.textContent = "Comida 1";

        let comidaAnimal2 = document.createElement("li");
        comidaAnimal2.textContent = "Comida 2";

        subLista.appendChild(comidaAnimal1);
        subLista.appendChild(comidaAnimal2);

        leon.appendChild(subLista);
    }


    document.getElementById("btnSublistaHTML").onclick = function(){
        const leon = document.getElementById("leon");
        leon.innerHTML +=
            '<ul><li>Comida 1</li><li>Comida 2</li></ul>';
    }
}