// Crea una función constructora llamada Estudiante que tenga las propiedades nombre, edad y curso.
//  Añade un método llamado presentarse que imprima por consola una frase de presentación del estudiante.

function Estudiante(nombre, edad, curso){
    this.nombre = nombre;
    this.edad = edad;
    this.curso = curso;

    this.presentarse = function(){return `Hola soy ${this.nombre} tengo ${this.edad} y estoy en ${this.curso}`};
}

let estudiante1 = new Estudiante('fran', '30', 'Programacion');
console.log(estudiante1.presentarse()) // Hola soy fran tengo 30 y estoy en Programacion
console.log(estudiante1.nombre) // fran
console.log(estudiante1.edad) // 30
console.log(estudiante1.curso) // Programacion
