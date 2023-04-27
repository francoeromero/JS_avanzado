// principales operaciones aritmeticas

let a = 3.5;
let b = 4.8;
//suma
console.log(a + b); // 8.3
//resta
console.log(a - b) // -1.30
//multiplicacion (*)
console.log(a * b) // 16.8
//division (/)
console.log(a / b) // 0.73

// convertir de numero a cadena
console.log(typeof a); // number
let a_s = a.toString();
console.log(typeof a_s); // string
console.log(a_s); // 3.5

// Redondeo de numeros flotantes, tofixed ojo que te lo pasa a string
let c = 3.3;
let d = c * 3;
console.log(d); // 9.8999999999
console.log(d.toFixed(2)) // 9.90
console.log(typeof d.toFixed(2)) // string

let e = 1839.22121121;
let f = 23132131232123;
console.log(e.toFixed(2))
console.log(f.toFixed(2))
//.toPrecision(x) 
console.log(e.toPrecision(6)) // 1839.22
console.log(typeof e.toPrecision(6)) // string 