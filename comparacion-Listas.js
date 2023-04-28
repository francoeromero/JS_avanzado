// comparar listas .every()

const array = [4,6 ,7 ,8 ,3 ,6 ,2 ,1 ,-4 ,-7 ,12 ,5 ,-40]

// const resultado = array.every(i => {
//     if(i > 0){
//         return true;
//     }
//     else {
//         return false;
//     }
// })
// console.log(resultado) // false, osea me esta chequeando si todos son mayores a cero si no son es false si son true

// otra manera mas rapido y corta
const resultado = array.every(i => i > 0);
console.log(resultado) // false

// Comparacion de listas

const ar1 = [1,2,3,4]
const ar2 = [1,2,3,4]

console.log(ar1 == ar2) // false , sabiendo q no es asi

const comparaArrays = (array_1, array_2) => {
    if(array_1.lenght !== array_2.lenght) return false
    const res = array_1.every((valor, i) => {
        if(valor === array_2[i]) return true
    })
}

console. log(compararArrays(arl, &Fa)) //true

    const ar3 = [1, 2, 3, 9] 
    
    console. log(compararArrays(arl, ar3)) //false
    

 
