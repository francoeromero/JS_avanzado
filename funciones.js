// funciones

function sumar(parametro_1, parametro_2){
    rta = parametro_1 + parametro_2;
    return rta;
}
console.log(sumar(1, 2)) // 3

saludar('Fran')
function saludar(nombre){
    console.log(`Hola ${nombre}`) // Hola Fran
}

/////////////
let nombre_2 = 'Pedro';
console.log(nombre_2)

despedir(nombre_2);
console.log(nombre_2)

function despedir(nombre){
    console.log(`Adios ${nombre}`)
}

let persona = { nombre: 'Fran', apellido: 'Romero'}


function saludarPersona(obj){
    console.log(`Hola ${obj.nombre} ${obj.apellido}`)
}
saludarPersona(persona)

///////////
//sin declarar una variable se puede asignar dentro del parametro
function imprimeNumero(numero = 7){
    console.log(numero); // 7
}
imprimeNumero()

///////////

function imprimir(...parametros){
    console.log(parametros); //[1, 2, 3, 4, 4, 'hola', false, 3, 2, 1, 3, 4, 4, 2 ]
}
imprimir(1, 2, 3, 4, 4, 'hola', false, 3, 2, 1, 3, 4, 4, 2 );


/////
// imprimir un numero especifico
function resta(...nums){
    console.log(nums[2]) //4 
}
resta(2, 2, 4, 4)
/////
// imprimir varios numeros
function suma(...nums){
    console.log(...nums) // 1 2 3 4
}
suma(1, 2, 3, 4)

///
// la suma de los numeros
function otra_suma(...numeros){
    console.log(numeros.reduce((a,b) => a + b)) // 35
}
otra_suma(1, 2, 3, 4, 5, 5, 5, 5, 5)

// usando return, sin return daria undefined
function suma(...nums){
    return nums.reduce((a,b)=> a+b)
}
const s = suma(1, 2, 3, 4, 5, 6)
console.log(s) //21
