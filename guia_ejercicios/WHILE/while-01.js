// Dado un número entero n, imprimir todos los números desde n hasta 1 en orden descendente.

const contador_descendente = (n) => {
    let i = 0;
    let numeros= []
    n = prompt('Ingrese un numero: ');
    n = parseInt(n);
    while(n > 0){
        numeros.push(n)
        n--;
    }
    return alert(numeros);
}