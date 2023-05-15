// Crea una función constructora llamada Rectangulo que tenga las propiedades largo y ancho.
//  Añade un método llamado calcularArea que calcule y devuelva el área del rectángulo.

function Rectangulo(ancho, largo){
    this.ancho = ancho;
    this.largo = largo;
    this.area = function(){return "El area es de: " + (ancho * largo)};
}
const area1 = new Rectangulo(10, 30);
console.log(area1.area()) // El area es de: 300
