// Listas (arrays, arreglos,vectores)
/*
AGREGAR = unshift - push
ELIMINAR = shift - pop
AGREGAR MODIFICAR Y ELIMINAR = splice(x, y, z)
*/
//----------------------------ACCEDER------------------------------- 
let unArray = new Array(1)

let var1 = 54;
let array = [ 1, 'hola', false, {id : 5}, null, undefined, var1]

//acceder a los valores de un array a traves de su posicion
console.log(array[0]) // 1
console.log(array[1]) // hola
console.log(array[2]) // false
console.log(array[3]) // { id:5 }
console.log(array[4]) // null
//----------------------------AGREGAR------------------------------- 
//metodos para introducir nuevos valores en nuestros arrays
//PUSH - agregar un valor al FINAL
array.push('valor agregado final')
console.log(array) // [1, 'hola', false, {id : 5}, null, undefined, var1, 'valor agregado final']

//UNSHIFT - agregar un valor al PRINCIPIO
array.unshift('valor agregado inicio')
console.log(array) // ['valor agregado inicio' ,1, 'hola', false, {id : 5}, null, undefined, var1, 'valor agregado final']


//----------------------------ELIMINAR------------------------------- 
//metodos para eliminar valores del array
// POP - eliminar valor al FINAL
let array2 = [ 'hola', 2, false]
array2.pop()
console.log(array2) // ['hola', 2]

// SHIFT - eliminar valor al PRINCIPIO
let array3 = [ 'que tal', 'buenos dias', false]
array3.shift()
console.log(array3) // ['buenos dias', false]



//-------------------AGREGAR ELIMINAR Y MODIFICAR-------------- 
//metodos para eliminar, modificar o añadir valores en nuestro array
//SPLICE(start, deleteCount, item1, item2)
// start = indice donde comenzara la modificacion (a)
// deleteCount = la cantidad de elementos a eliminar, incluyendo el inicio (a b c)
// item1, item2 = los elementos que se agregaran
const array4 = [ 'a', 'b', 'c', 'd', 'e', 'f']

array4.splice(0, 3, 'agregado1', 'agregado2')
console.log(array4) // ['agregado1', 'agregado2', 'd', 'e', 'f']

// añadir items con SPLACE y en el FINAL
let array5 = [1, 2, 3]
array5.splice(3, 0, 'item1', 'item2')
console.log(array5) // [1, 2, 3, 'item1', 'item2']

// añadir items con SPLACE y en el INICIO
let array6 = [3, 4, 5]
array6.splice(0, 0, 'item1', 'item2')
console.log(array6) // ['item1', 'item2', 3, 4, 5]

// MODIFICAR valores con SPLACE
let array7 = [6, 'a modificar', 8]
array7.splice(1, 1, 'modificado')
console.log(array7) //[6, 'modificado', 7]
