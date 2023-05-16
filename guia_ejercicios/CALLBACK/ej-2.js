// Escribe una función llamada repetirOperacion que tome un número y una función de callback. 
// La función debe llamar al callback tantas veces como indique el número, pasando el índice de la iteración como argumento en cada llamada.

function repetirOperacion(num, callback){
    for(let i = 0; i < num; i++){
        callback(i);
    }
}

function imprimirIndice(indice){
    console.log("Iteracion numero: " + indice);
}

repetirOperacion(9, imprimirIndice);
 