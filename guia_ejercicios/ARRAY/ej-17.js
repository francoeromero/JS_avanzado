// Crea dos listas de números y encuentra los elementos que se encuentran en
// ambas listas.

let primera_lista = [123, 213, 2, 4213, 324, 52343]
let segunda_lista = [12 ,213 ,32 ,1 ,4213 , 2 ]
let elementos_en_comun = []
for(let i = 0; i < primera_lista.length; i++){
    for(let a = 0; a < segunda_lista.length; a++){
        if(primera_lista[i] === segunda_lista[a]){
            elementos_en_comun.push(primera_lista[i]);
        }
    }
}
console.log(elementos_en_comun) //[ 213, 2, 4213 ]