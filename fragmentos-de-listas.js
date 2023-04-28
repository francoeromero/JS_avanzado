// Como obtener una lista a partir de otra con SLICE
let array1 = ['hola', 'a', 2, 3, true, null, 'adios']
console.log(array1.length) // 7 elementos
console.log(array1.slice(1, 4))
let array2 = array1.slice(2, 4)
console.log(array2)

//obtener el fragmento de 'b' y 'hola'
let arreglo = ['a', 'b', 'hola', 3, null]
fragmento = arreglo.slice(1,3)
console.log(fragmento) 

//obtener el fragmento de 'a' y 'null'
frag = (arreglo.slice(0, 1)).concat(arreglo.slice(4, 5))
console.log(frag)

