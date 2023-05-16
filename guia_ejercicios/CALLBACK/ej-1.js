// Crea una función llamada filtrarArray que tome un arreglo y una función de callback como argumentos. 
// La función debe filtrar el arreglo usando el callback como criterio y devolver un nuevo arreglo con los elementos que pasen el filtro.


function filtrarArray(arreglo, callback){
    resultado = [];

    for(let i = 0; i < arreglo.length; i++){
        if(callback(arreglo[i])){
            resultado.push(arreglo[i]);
        }
    }
    return resultado;
}

const numeros = [1,2,3,4,5,6,7,8,10];
function esPar(num){
    return num % 2 === 0;
}
const filtrar_numeros = filtrarArray(numeros, esPar);
console.log(filtrar_numeros);// [2,4,6,7,10]

//El callback basicamente es poner una funcion en un parametro de otra funcion























/*
function filtrarArray(arreglo, callback){
    const resultado = [];

    for(let i = 0; i < arreglo.length; i++){
        if(callback(arreglo[i])){
            resultado.push(arreglo[i])
        }
    }
    return resultado;
}

//arreglo
const numeros = [1,2,3,4,5,6,7,8,9,10];
//callback
function esPar(numero){
    return numero % 2 === 0;
}
//llamo ala funcion filtrarArray
const numerosPares = filtrarArray(numeros, esPar);
console.log(numerosPares); // [2,4,6,7,10]

*/