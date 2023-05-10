// Escribir un programa que le pida al usuario que ingrese un número entero
// positivo, y luego imprima "El número es primo" si el número es primo, o "El
// número no es primo" si el número no es primo.
const numeros_primos = () =>{
    let numero;
    let esPrimo = true;
    numero = prompt('Verifico si el numero es primo, ingrese un numero: ');
    numero = parseInt(numero);
    if(numero <= 1){
        alert('El numero NO es primo');
    }
    else if(numero === 2){
        alert('El numero es primo');
    }
    else 
    {
        for(let i = 2; i < numero; i++){
            if(numero % i === 0){
                esPrimo = false;
                break;
            }
        } 
        if(esPrimo == true){
            alert('El numero es primo');
        }
        else{
            alert('El numero NO es primo');
        }
    }
}
