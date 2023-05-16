// Escribe una función llamada ordenarArray que tome un arreglo y una función de callback. 
// La función debe ordenar el arreglo usando el algoritmo de ordenamiento de tu elección y 
// luego pasar el arreglo ordenado al callback.

function ordenarArray(arreglo, callback){
    let arreglo_ordenado = [];
    for(let i = 0; i < arreglo.length; i++){
        arreglo_ordenado.push(callback[i]);
    }
    return arreglo_ordenado;
}

