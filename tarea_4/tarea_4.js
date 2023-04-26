// Una cadena de texto con tu Nombre
let nombre = "Fran";

// Otra cadena de texto con tu Apellido
let apellido = "Romero";

// Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = nombre + " " + apellido;
console.log(estudiante); //Fran Romero

// Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus); //FRAN ROMERO

// Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLowerCase(); 
console.log(estudianteMinus); //fran romero

// Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let numero_de_letras = estudiante.length
console.log(numero_de_letras) // 11

// Una variable que contenga la primera letra del Nombre
console.log(nombre.charAt(0)) // F

// Otra variable que contenga la última letra del Apellido
console.log(nombre.charAt(nombre.length - 1)) // n

// Una cadena de texto que elimine los espacios de la variable "estudiante"
console.log(estudiante.replace(/ /g,"")) //FranRomero

// Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
console.log(estudiante.includes(nombre)) //True