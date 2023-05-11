// Crea una lista de números enteros y pide al usuario que ingrese otro número
// entero. Luego, busca el número ingresado en la lista y muestra la posición en
// la que se encuentra. Si el número no se encuentra en la lista, muestra un
// mensaje indicando que no se encontró

let lista_numeros = [12, 33, 29, 91, 32, 67];
let posicion;
let encontrado = false;

let busqueda = prompt('Ingrese un numero si esta en la lista: ');
while(isNaN(busqueda)){
    busqueda = prompt('ERROR! ingrese un numero: ');
}
for(let i = 0; i < lista_numeros.length; i++){
    if(lista_numeros[i] == busqueda){
        encontrado = true;
        posicion = i;
        break;
    }
    else{
        encontrado = false;
    }
}
if(encontrado == true){
    console.log('El numero se encontro y esta en la posicion numero: ' + posicion)
}
else{
    console.log('no se ha encontrado el numero')
}
