// .SORT() ORDENAR

const array = [ 2, 5, 9, 15, 1, 2, 0, 4]
console.log(array)

//sort() ordenar de mayor a menor
array.sort((a, b)=> {
    if(a < b){
        return 1 // a debe colocarse despues del b
        // cualquier numero positivo ira despues del b
    }
    else if(a > b){
        return -1 // a debe colocarse antes del b
        //cualquier numero negativo ira antes del b
    }
    else{
        return 0 // no cambie su posicion
    }
})
console.log(array) //[15, 9, 5, 4, 2, 2, 1, 0]

/// ordenar unicamente arrays numericos

const de_menor_a_mayor = [4, 1, 7, 3, 1, 3, 56, 1, 546]
de_menor_a_mayor.sort((a, b) => a - b)
console.log(de_menor_a_mayor) // [1, 1, 1, 3, 3, 4, 7, 56, 546]

const de_mayor_a_menor = [4, 1, 7, 3, 1, 3, 56, 1, 546]
de_mayor_a_menor.sort((a, b) => b - a)
console.log(de_mayor_a_menor) // [546, 56, 7, 4, 3, 3, 1, 1, 1]


const listaObjetos = [
    {nombre: "Lola", edad: 34},
    {nombre: "Victor", edad: 24},
    {nombre: "Juan", edad: 25},
    {nombre: "Miguel", edad: 31}
]
const menorMayor = listaObjetos.sort((a, b) => {
    if(a.edad < b.edad){
        return -1;
    }
    else if (a.edad > b.edad){
        return +1;
    }
    else{
        return 0;
    }
})
console.log(menorMayor) // ordena los objetos de menor a mayor

// const menorMayor = listaObjetos.sort((a, b) => a.edad - b.edad )
// console.log(menorMayor) // ordena de menor a mayor cada objeto
