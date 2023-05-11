// Crea una lista con los nombres de tus 3 películas favoritas y luego imprime
// los elementos en orden inverso (sin utilizar el método reverse())

let peliculas = ['peli1', 'peli2', 'peli3', 'peli4', 'peli5'];
let lista_inversa= []
for(let i = (peliculas.length - 1); i > -1; i--){
    lista_inversa.push(peliculas[i])
}
console.log(lista_inversa) // ['peli5','peli4','peli3','peli2','peli1']

//////////////

let inverso = peliculas.reverse() // ['peli5','peli4','peli3','peli2','peli1']