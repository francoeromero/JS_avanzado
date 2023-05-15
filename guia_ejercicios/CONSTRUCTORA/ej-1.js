// Crea una función constructora llamada Libro que tenga las propiedades titulo, autor y paginas. 
// Luego, crea dos objetos libro1 y libro2 con diferentes valores para las propiedades y muestra sus detalles por consola.

function Libro(titulo, autor, paginas){
    this.titulo = titulo; //nueva instancia actual igualamos al dato que proporciona en los parametros
    this.autor = autor;
    this.paginas = paginas;
}
let libro1 = new Libro('titulo1', 'autor1', 245);
let libro2 = new Libro('titulo2', 'autor2', 320)
console.log(libro1)