// Crea dos listas con la misma cantidad de elementos y luego crea una tercera
// lista que contenga los elementos de ambas listas intercalados. Por ejemplo,
// si las dos listas son [1, 2, 3] y ["a", "b", "c"], la tercera lista debería ser [1, "a", 2,
// "b", 3, "c"].

let primera_lista = [1, 2, 3, 4, 5];
let segunda_lista = ['a', 'b', 'c', 'd', 'e'];
let lista_intercalada = [];

for(let i = 0; i < primera_lista.length; i++){
    lista_intercalada.push(primera_lista[i])
    lista_intercalada.push(segunda_lista[i])
}
console.log(lista_intercalada) //[ 1, 'a', 2, 'b', 3, 'c', 4, 'd', 5, 'e' ]