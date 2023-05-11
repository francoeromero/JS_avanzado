// Crea una lista de palabras y muestra las palabras que tienen más de 5 letras.

let lista_palabras;
let mas_de_cinco = [];
lista_palabras = ['hola', 'gorila', 'computadora', 'musica']

for(let i = 0; i < lista_palabras.length; i++){
    if(lista_palabras[i].length > 5){
        mas_de_cinco.push(lista_palabras[i]);
    }
}
console.log(mas_de_cinco)