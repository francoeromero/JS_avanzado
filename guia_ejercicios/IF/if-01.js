// Escribir un programa que le pida al usuario que ingrese un número entero positivo, y luego imprima "El número ingresado es positivo" si el número es mayor que cero, o "El número ingresado es cero o negativo" si el número es menor o igual a cero.


const numerosPositivos = (num) => {
    num = prompt('Ingrese un numero: ');
    num = parseInt(num);
    while(isNaN(num)){
        num = prompt('ERROR! no es un numero, ingrese de nuevo: ')
        num = parseInt(num);
    }
    if(num > 0){
        return alert(`El numero ${num} es positivo`);
    }
    else{
        return alert(`El numero ${num} es cero o negativo`)
    }
}
