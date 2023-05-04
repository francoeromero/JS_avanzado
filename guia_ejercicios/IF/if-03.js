// Escribir un programa que le pida al usuario que ingrese un número entero, y luego imprima "El número ingresado es par" si el número es divisible por 2, o "El número ingresado es impar" si el número no es divisible por 2.


const par_impar = (num) =>{
    num = prompt('Ingrese un numero: ');
    num = parseInt(num)
    if(num % 2 == 0){
        return alert('es par');
    }
    else{
        return alert('es impar');
    }
}
