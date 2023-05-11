// Crea una lista vacía y pide al usuario que ingrese números enteros hasta que
// ingrese un número negativo. Luego, muestra la suma de todos los números
// ingresados.

let numeros = [1, 34, 92, 39 ,49 ,12];
let suma = 0;

for(let i = 0; i < numeros.length; i++){
    suma += numeros[i]
}
console.log(suma) //227