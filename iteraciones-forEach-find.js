//iterar los valores de una lista

const array = [ "hola" , 2, 4, 3, false , undefined]
for(let i = 0; i < array.length; i++ ){
    console.log(array[i])
}

// FOREACH Forma ES6 (mas eficiente) .forEach()
array.forEach(valor => {
    console.log(valor)
})


let suma = 0;
let numeros = [1, 2, 3, 4, 5, 6, 7]
numeros.forEach(i => {
    suma += i;
    console.log(i) // 1, 2, 3, 4, 5, 6, 7
})
console.log(suma) // 28

// FIND Busqueda de un valor dentro de una lista
let otra_lista = [1, 2, 3, 4, 5, 'elemento', 2, 3]

let elemento_encontrado = otra_lista.find(i => {
    if(i == 'elemento'){
        return true;
    }
})
console.log(elemento_encontrado) // 'elemento'


// ejemplo buscar a francisco de una lista de objetos

const listaObjetos = [
    {nombre: 'Leire', edad: 35},
    {nombre: 'Fer', edad: 32},
    {nombre: 'Francisco', edad: 30},
    {nombre: 'Laura', edad: 29},
    {nombre: 'Kati', edad: 26}
]
const objeto = listaObjetos.find(i =>{
    if(i.nombre == 'Francisco'){
        return true;
    }
})
console.log(objeto) // {nombe: 'Francisco', edad: 30}
console.log(objeto.edad) //30
console.log(objeto.nombre) // Francisco

// encontrar la edad de guido
let listaObjetos1 = [
    {nombre : 'Gigolo', edad : 40},
    {nombre : 'Guido', edad : 43},
    {nombre : 'Alvaro', edad : 50},
    {nombre : 'Rodrigo', edad : 35},
    {nombre : 'Miguel', edad : 54}
]

let objeto1 = listaObjetos1.find(i =>{
    return i.nombre === 'Guido';
})
console.log(objeto1.edad) // 43

//encontrar a alvaro
let listaObjetos2 = [
    {nombre : 'Alvaro', edad : 50},
    {nombre : 'Rodrigo', edad : 35},
    {nombre : 'Miguel', edad : 54}
]

let objeto2 = listaObjetos2.find(i => i.nombre === 'Alvaro')
console.log(objeto2.edad) // 50

