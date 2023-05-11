// Crea una lista de números y encuentra el promedio de todos los números en
// la lista.

let numeros = [12, 43, 52, 21, 14]
let suma = 0
let promedio;
for(let i = 0; i < numeros.length; i++){
    suma += numeros[i];
}
promedio = suma / numeros.length;
console.log(promedio);
