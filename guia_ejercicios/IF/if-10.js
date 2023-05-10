// Escribir un programa que le pida al usuario que ingrese un número entero, y
// luego imprima "El número es positivo y par" si el número es positivo y divisible
// por 2, o "El número no cumple ninguna condición" si el número no cumple
// ninguna de las dos condiciones anteriores.

const par_positivo = () => {
    let numero = prompt('Ingrese un numero: ');
    numero = parseInt(numero);
    while(isNaN(numero)){
        numero = prompt('ERROR! Ingrese un numero: ');
        numero = parseInt(numero);
    }
    if(numero > 0 && numero % 2 == 0){
        return alert('El número es positivo y par');
    }
    else{
        return alert('El número no cumple ninguna condición');
    }
}