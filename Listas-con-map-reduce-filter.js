// metodos mas avanzados 
// .map() .filter() .reduce()

const array = ['San Sebastian', 'Madrid', 'Barcelona', 'Alicante']

let val =  array.forEach(v => {
    console.log(v);
    return 4
})
console.log(val)

//--------------------------MAP---------------------------------------
const newArray = array.map((valor, indice) => {
    // return valor.concat('Hola')
    return `${indice+1}- ${valor}`
})
console.log(newArray)

const numeros = [1, 2, 3, 4, 5]

const numerosDobles = numeros.map(i => i*2);
console.log(numerosDobles) // [2, 4, 6, 8, 10]

const otros_numeros = [1, 3, 6, 9]
const triples = otros_numeros.map((i, a) => {
    console.log(a) // 0, 1, 2, 3
    return i*3
});
console.log(triples) // [3, 9, 18, 27]


// sacar los promedio de los estudiantes
const estudiantes = [
    { nombre: "Juan", matematicas: 7, historia: 8, ciencias: 6 },
    { nombre: "María", matematicas: 9, historia: 6, ciencias: 9 },
    { nombre: "Pedro", matematicas: 5, historia: 7, ciencias: 8 },
    { nombre: "Ana", matematicas: 8, historia: 9, ciencias: 7 },
];

const promedios = estudiantes.map((m) => {
    return (m.matematicas + m.historia + m.ciencias)/3;
})
console.log(promedios) // [7, 8, 6.66666, 8]

//----------------------FILTER--------------------------------------
const listaObjetos = [
    {nombre: "Lola", edad: 34},
    {nombre: "Victor", edad: 24},
    {nombre: "Juan", edad: 25},
    {nombre: "Miguel", edad: 31}
]

const personas_mayores_30 = listaObjetos.filter(obj => {
    if(obj.edad > 30){
        return true;
    }
    else {
        return false;
    }
})
console.log(personas_mayores_30) //[{nombre: "Lola", edad: 34}, {nombre: "Miguel", edad: 31} ]

//otra forma mas rapida
const otralistaObjetos = [
    {nombre: "Lola", edad: 34},
    {nombre: "Victor", edad: 24},
    {nombre: "Juan", edad: 25},
    {nombre: "Miguel", edad: 31}
]
const rta = otralistaObjetos.filter(i => i.edad > 30)
console.log(rta) //[{nombre: "Lola", edad: 34}, {nombre: "Miguel", edad: 31} ]

//------------------REDUCE--------------------------------------------

const valores = [ 3, 42, 42, 213, 34, 92]

const suma = valores.reduce((acumulado, cur, i, arrayOriginal) => {
    console.log(acumulado)
    console.log(cur)
    console.log(i)
    console.log(arrayOriginal)
    return acumulado + cur
})
console.log(suma)