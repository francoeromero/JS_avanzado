//metodos mas utilizados con string

//lenght el numero de elementos de un string
let str = "Hola soy un string";
console.log(str.length) //18

//slice, te imprime un fragmento del string, slice(inicial, final)
let slice_str = str.slice(0, 10)
console.log(slice_str) // Hola soy u

//substring lo mismo que el anterio imprime un fragmento  substring(inicio, final)
let substring_str = str.substring(6, 10)
console.log(substring_str) //oy u

//substr  lo mismo
let substr_str = str.substr(5, 10)
console.log(substr_str) // soy un str

//REPLACE Reemplazar parte del contenido de una cadena de texto

let cadena = "Hola mi nombre es fran";
console.log(cadena) // Hola mi nombre es fran

let reemplazo = cadena.replace('fran', 'franco');
console.log(reemplazo) //Hola mi nombre es franco

let texto_largo = "Tito no es un mono cualquiera. A tito no le gusta trepar por los arboles y odia comer bananas. El prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los arboles"
//colocando /nombre/g cambia a todo el texto global
let reemplazamos = texto_largo.replace(/los/g,'manzanas')
console.log(reemplazamos)