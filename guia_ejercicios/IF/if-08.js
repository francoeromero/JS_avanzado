// Escribir un programa que le pida al usuario que ingrese un número entero
// positivo, y luego imprima "El número es un cuadrado perfecto" si el número es
// un cuadrado perfecto, o "El número no es un cuadrado perfecto" si el número
// no es un cuadrado perfecto.

const cuadradoPerfecto = () =>{
    let numero = prompt('Verifico si es cuadrado perfecto, Ingrese un numero: ');
    let raizCuadrada = Math.sqrt(numero);
    if(Number.isInteger(raizCuadrada)){
        return alert('El numero es un cuadrado perfecto')
    }
    else{
        return alert('El numero NO es un cuadrado perfecto');
    }
}
