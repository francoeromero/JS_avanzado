// Sesion 05 - Numbers
//declaracion numericas flotantes y enteros
let a = 5;
console.log(a)

let b = 0.1;
console.log(b)

// precision
let c = 0.2;
console.log((b + c)); // 0.300000000
let num = b + c;
//para solucionarlo
let redondeo = num.toFixed(1);
console.log(redondeo) // 0.3
