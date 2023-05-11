// Crea dos listas de 10 números enteros cada una y realiza una multiplicación
// de los elementos con el mismo índice en ambas listas.

let lista_uno = [21, 34, 12, 34, 43, 21]
let lista_dos = [12, 42, 23,45 ,13 , 34]
let resultado = []
for(let i = 0; i < lista_uno.length; i++){
    resultado.push(lista_uno[i]* lista_dos[i])
}
console.log(resultado)