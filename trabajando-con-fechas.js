//trabajando con fechas 

const fecha = new Date();
console.log(fecha)
//new Date(año, mes, fecha, hora, minutos, segundos);
const fecha2 = new Date(1987, 10, 20, 23 , 52, 192);
console.log(fecha2)

const fecha3 = new Date(-100000000000); //milisegundos
console.log(fecha3)

const fecha4 = new Date('October 13, 1979 12:15:15');
console.log(fecha4)

const fecha5 = new Date(1987, 10, 20, 23 , 52, 192);

//comparacion con fechas
console.log(fecha > fecha2) // true porque es mas reciente fecha que fecha2

console.log(fecha2 === fecha5) // false, NUNCA se puede comparar asi dos fechas iguales
//se hace de la siguiente manera(a traves de milimetros):
console.log(fecha2.getTime() === fecha5.getTime()); //true 

// obtener el dia
console.log(fecha2.getDate()) // 20
// obtener el mes
console.log(fecha2.getMonth() + 1)
// obtener el año
console.log(fecha2.getFullYear())

//formato de fecha segun el pais 'en-GB' para nosotros
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
console.log(fecha2.toLocaleDateString('en-US')) // 11/20//1987 mes/fecha/año
console.log(fecha2.toLocaleDateString('en-GB')) // 20/11/1987 fecha/mes/año
console.log(fecha2.toLocaleDateString('de-DE')) // 20.11.1987 fecha.mes.año
console.log(fecha2.toLocaleDateString('ko-KR'))
console.log(fecha2.toLocaleDateString('fa-IR'))

