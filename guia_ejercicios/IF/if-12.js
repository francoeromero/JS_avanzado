// Escribir un programa que le pida al usuario que ingrese dos números enteros,
// y luego imprima "Los dos números son iguales" si los dos números son
// iguales, "El primer número es mayor" si el primer número es mayor que el
// segundo, o "El segundo número es mayor" si el segundo número es mayor
// que el primero.

const quien_es_mayor = () =>{
    let primer_numero = prompt('Ingrese un numero: ')
    let segundo_numero = prompt('Ingrese otro numero: ')
    if(primer_numero > segundo_numero){
        return alert('El primer numero es mayor')

    }
    else if(segundo_numero > primer_numero){
        return alert('El segundo numero es mayor')

    }
    else
    {
        return alert('Son iguales')
    }
}