///FUNCIONES tipo flecha . funciones anonimas
//lo que haciamos antes
const array = [1, 5, 6, 6, 5, 4];
const array2 = array.map(function(valor){
    return valor * 2;
});
console.log(array2) // [2, 10, 12, 12, 10, 8]
// lo que se puede hacer con funcion flecha, seria despues del parametro y luego {}
const array3 = [1, 2, 3, 4, 5, 6];
const array4 = array3.map((i)=>{ 
    return i * 2
})
console.log(array4)

//tambien se puede hacerlo sin las {} ni el return
const array5 = [1,1,1,1,1,1]
const array6 = array5.map((i) => i * 2)
console.log(array6) /// [2,2,2,2,2,2]

// tambien se aplica para una variable, que el valor que seria el parametro represente un num
const dobleValor = valor => {
    return valor * 2
};
console.log(dobleValor(4)) // 8

//tambien se hace asi
const dobleDelValor = valor => valor * 2;
console.log(dobleDelValor(2)) // 4

//recomendacion: todas las funciones siempre es mejor declararlas antes al principio
