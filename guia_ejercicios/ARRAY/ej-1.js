//Crea una lista con los números del 1 al 10 e imprime solo los números impares.

const numeros = [1,2,3,4,5,6,7,8,9,10];
const impares = []

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 != 0){
        impares.push(numeros[i])
    }
}
console.log(impares) // [1,3,5,7,9]