// SET conjunto de valores unicos 
//El set lo convierte en un objeto {} y no acepta elementos repetidos
const array = [1, 2, 3, 4, 5, 5, 5];
const miSet = new Set(array);
console.log(array); // lista [1, 2, 3, 4, 5, 5, 5]
console.log(miSet) // objeto {1, 2, 3, 4, 5}

//ADD agregar un elemento, el set no va a dejar que se repita un elemento pormas que agregues varias veces
miSet.add(9);
console.log(miSet); //{1, 2, 3, 4, 5, 9}
miSet.add(9)
console.log(miSet); //{1, 2, 3, 4, 5, 9}
miSet.add(9)
console.log(miSet); //{1, 2, 3, 4, 5, 9}

// DELETE
miSet.delete(2);
console.log(miSet); // {1, 3, 4, 5, 9}

// CLEAR limpia todo el objeto { } lo deja vacio
miSet.clear();
console.log(miSet) // Set{ }

//************* */
lista = [ 1, 3, 4]
mySet = new Set(lista);
mySet.delete(1)
console.log(mySet)
//************* */

// HAS, verifica si existe un elemento dentro del set
//console.log(array.includes(2)) // asi se verifica en una lista
verificar = mySet.has(3);
console.log(verificar); // true

//SIZE cantidad de elementos dentro del set
cantidad_elementos_ser = mySet.size; 
console.log(cantidad_elementos_ser) // 2

//ITERACION CON SET 
mySet.forEach(i => {
    console.log(i); // 3, 4
})

const it_myset = mySet.values();
console.log(it_myset) // {[Iterator]}

const ar_myset = [...mySet]
console.log(ar_myset) // [3, 4]