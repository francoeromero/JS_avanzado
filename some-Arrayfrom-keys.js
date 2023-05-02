// .some()
// es para verificar si cumple con una determinada condicion
const array = [3, 7, 2, 4, 7, 9, 42, 35, 7865, 23, -2]
// verifico si son todos menores a 0, me da true
const res = array.some(valor => valor < 0)
console.log(res) // true
// el valor 90 esta en la lista?
const existe = array.some(valor => valor === 90)
console.log(existe) // false

//ESTOY EN LA LISTA?
const listaObjetos = [
    {nombre: "leire", edad: 35},
    {nombre: "lolito", edad: 25},
    {nombre: "fran", edad: 30},
    {nombre: "kati", edad: 26}
]
const existeFran = listaObjetos.some(persona => persona.nombre == "fran")
console.log(existeFran)

//ARRAY.FROM como obtener una lista a partir de un objeto iterable
const str = "Hola soy fran"
console.log(str[5])

const ar_str = Array.from(str)
console.log(ar_str) // ['H','o','l','a',' ','s','o','y',' ','f','r','a','n']
//convierte en un arreglo o array 
const set = new Set([2, 3, "hola", 4]) // nuevo objeto
const ar_set = Array.from(set) // convierte en un array
console.log(ar_set) // [2, 3, 'hola', 4]

//.KEYS devuelve objetos iterables 
const keys = array.keys()
console.log(keys) //{[Iterator]} te dice que es un objeto iterador
// lo convertimos en un nuevo array 
const ar_keys = Array.from(keys)
console.log(ar_keys) // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const miArray = ['a', 'b', 'c'];
const iterador = miArray.keys();
console.log(iterador) // {}
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())

