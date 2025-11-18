let numero = [];
let numeros = 0;
let cantidadNum = 0;

for (let i=0;i<5;i++){

    numero[i] = parseInt(prompt("Introduce un número"));


    numeros = numeros + numero[i];

    if (numero[i] > 100){

        cantidadNum++;

    }

}

alert("La suma de todos los números da " + parseInt(numeros));

alert("Hay " + cantidadNum + " numeros mayor que 100");