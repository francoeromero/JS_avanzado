// Crea una lista de palabras y pide al usuario que ingrese una palabra. Luego,
// muestra todas las palabras de la lista que tienen la misma longitud que la
// palabra ingresada.

let palabras;
let lista_misma_longitud = []
palabras = ['hola', 'holaaaaaaaaaaaa', 'buenasss', 'que tal' ]
let palabra_ingresada = prompt('ingrese una palabra: ');
for(let i = 0; i < palabras.length; i++){
    if(palabra_ingresada.length == palabras[i].length){
        lista_misma_longitud.push(palabras[i]);
    }
}
console.log('Estas son las siguientes palabras que tienen la misma longitud '+lista_misma_longitud);