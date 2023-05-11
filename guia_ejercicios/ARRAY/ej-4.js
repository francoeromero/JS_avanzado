// Crea una lista vacía y pide al usuario que ingrese una palabra. Luego, muestra
// la primera letra de la palabra. Repite este proceso hasta que el usuario
// ingrese una palabra que comience con la letra "z".

let lista = [];
let palabra_ingresada = prompt('Ingrese una palabra: ');
while(palabra_ingresada[0] != 'z'){
    palabra_ingresada = prompt('Ingrese una palabra: ')
    lista.push(palabra_ingresada[0]);
}

console.log(lista)
console.log(palabra_ingresada)
