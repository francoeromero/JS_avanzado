//Metodos de cadena de texto 
//https://regexr.com/

let texto_largo = "Tito no es un mono cualquiera. no A tito no le gusta trepar por los arboles y odia comer bananas. El prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los arboles"

//match, para encontrar cuantas veces se repite un elemento
palabra_repetida = texto_largo.match(/no/g)
cantidad_de_veces_repetida = palabra_repetida.length
console.log(palabra_repetida) // [ 'no', 'no', 'no', 'no']
console.log(cantidad_de_veces_repetida) // 4

//includes te devuelve un valor false o true si existe esa palabra
if(texto_largo.includes("no")){
    console.log("Existe la palabra") 
}
else{
    console.log("No existe")
}

// STARTWITH saber si un texto empieza con una palabra, devuelve valores booleanos
console.log(texto_largo.startsWith("Tito")) //true

// ENDWITH saber si un texto termina con una palabra, devuelve valores booleanos
console.log(texto_largo.endsWith("arboles")) //true