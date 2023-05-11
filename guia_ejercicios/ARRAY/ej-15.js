//Crea una lista de números enteros y luego encuentra la suma de los números
// en índices impares.

let numeros = [ 12, 123, 412, 43, 21, ,311]
let suma = 0
for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 != 0){
        suma += numeros[i];
    }
}
console.log(suma)