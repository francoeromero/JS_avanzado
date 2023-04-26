// Metodos mas utilizados con cadenas de caracteres
//Longitud de string
let str_minusculas = "hola mundo"
let str_mayusculas = str_minusculas.toUpperCase();
console.log(str_mayusculas) // HOLA MUNDO

let de_mayus_a_minus = str_mayusculas.toLowerCase();
console.log(de_mayus_a_minus)

// CONCAT concatenar 
let str_1 = "Hola soy la primera cadena";
let str_2 = " Y yo soy la segunda";
let mas = "Mas strings";
console.log(str_1.concat(str_2, " " , mas))
console.log(str_1 + str_2)
console.log(`${str_1} ahora sigue ${str_2}`)


//TRIM elimina espacios del principio o final .trimStart .trimEnd o .trim
let oracion = "              " + str_1 + str_2 + " " +  mas.toLowerCase()
console.log(oracion.length) //72
console.log(oracion.trim().length) //58

//charAt() obtener un caracter
console.log(str_1.charAt(0)) // H

//indexOf te imprime el inicio de la primera palabra "soy" su primer caracter(s) en que posicion esta
console.log(str_1.indexOf("soy")) //5

//lastIndexOf si cadena es una palabra repetida entonces encontrara al que este mas cerca del final del string
console.log(str_1.lastIndexOf("cadena"))

