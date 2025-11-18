let numero = [7,8,2,9,10];
let numerosSum = 0;

for (let i=0;i<numero.length;i++){

    if (numero[i] > 8){

        numerosSum += numero[i];

    }
}

alert("La suma de los números mayores de 8 son " + numerosSum);