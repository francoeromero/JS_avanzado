// operador .valueOf() - obtener valores numericos a partir de literales 
let a = 2;
let b = new Number(3); // crear un objeto de js

console.log(a) // 2
console.log(b) // Number 3 {}
//si se suman es lo mismo 2 + 3, no cambian en nada 
console.log(a + b) //5
//VALUEOF se usan para obtener vvalores primitivos de un objeto de js
console.log(a.valueOf() + b.valueOf()) // 5
console.log(b.valueOf()) // 3 

let str = new String("Hola soy un string");
console.log(str)
console.log(str.valueOf()) // Hola soy un string
//NaN - infinity
let n = Number('adios');
console.log(n) // NaN porque no es un numero
console.log(isNaN(n)) // true, porq no es un numero, es un string

//infinity
let numerador = 19;
let divisor = 0;
console.log(numerador / divisor); // Infinity

//parseInt y parseFloat, numeros enteros y numeros flotantes(decimales)
let numero = '5.6'
let numero2 = 15.2;
console.log(numero + numero2) // 5.615.2
let resultado = numero + numero2;
console.log(typeof resultado) // string, error de concepto

console.log(Number(numero)) // CONVIERTO DE STRING ('5.6') A NUMBER 5.6
console.log(typeof (Number(numero) + numero2)) // number

//parseInt - numero entero
console.log(parseInt(numero)) // de 5.6 a 5
//parseFloat - numero decimal
console.log(parseFloat(numero)) // 5.6

//numeros hexadecimales base 16 
let numHex = '0x3a5b7'
console.log(parseInt(numHex, 16)); //239031

//obtener valores max y min

let min_precision = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;
console.log(min_precision) //2.220446049
console.log(min_valor_JS) //5e-324
console.log(max_valor_JS) // 1.79769313
console.log( 2 ** 1024) // infinity


