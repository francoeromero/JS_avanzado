// Crea una función constructora llamada Libro que tenga las propiedades titulo, autor y paginas. 
// Luego, crea dos objetos libro1 y libro2 con diferentes valores para las propiedades y muestra sus detalles por consola.

function Libro(titulo, autor, paginas){
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
}

let libro1 = new Libro('El principito', 'fulano', 120);
let libro2 = new Libro('Harry pother', 'juancito', 230);

console.log(libro1);
console.log(libro2);