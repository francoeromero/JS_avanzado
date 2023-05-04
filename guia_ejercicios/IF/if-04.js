// Escribir un programa que le pida al usuario que ingrese dos números enteros,
// y luego imprima "El primer número es mayor" si el primer número es mayor
// que el segundo, "El segundo número es mayor" si el segundo número es
// mayor que el primero, o "Los dos números son iguales" si los dos números
// son iguales.

const dos_numeros = (a, b) => {
    a = prompt('Ingrese un numero: ');
    a = parseInt(a);
    b = prompt('Ingrese otro numero: ');
    b = parseInt(b);
    if(a > b){
        return alert(`El numero ${a} es mayor que ${b}`);
    }
    else{
        return alert(`El numero ${b} es mayor que ${a}`);
    }
}
