// como unir dos lista1 .concat(lista2)

const lista1 = ['hola', 2, false, null]
const lista2 = ['adios', 8, true, undefined]

let concatenar_listas = lista1.concat(lista2)
console.log(concatenar_listas) // ['hola', 2, false, null, 'adios', 8, true, undefined]

// Como unir dos listas con el factor de propagacion
const lista3 = [...lista1, ...lista2]
console.log(lista3) // ['hola', 2, false, null, 'adios', 8, true, undefined]

//ERROR! Mal entendido el concepto del factor de propagacion
const lista4 = [lista1, lista2]
console.log(lista4) //[['hola', 2, false, null],['adios', 8, true, undefined]]
