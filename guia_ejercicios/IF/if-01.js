// Escribir un programa que le pida al usuario que ingrese un número entero positivo, y luego imprima "El número ingresado es positivo" si el número es mayor que cero, o "El número ingresado es cero o negativo" si el número es menor o igual a cero.


const numerosPositivos = (num) => {
    if(num > 0){
        return `El numero ${num} es positivo`;
    }
    else{
        return `El numero ${num} es cero o negativo`
    }
}
console.log(numerosPositivos(2)) // El numero 2 es positivo