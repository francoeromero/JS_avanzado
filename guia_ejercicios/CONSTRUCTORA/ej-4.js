// Crear objetos personalizados a partir de una clase constructora. Dentro de la misma, incluir un método personalizado que se muestre por alerta o por consola.

class Auto {
    constructor(marca, modelo, color){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
    }
    mostrar(){
        console.log(`Marca: ${this.marca} Modelo: ${ this.modelo} Color: ${ this.color}`);
    }
}

const auto1 = new Auto('toyota', 'corolla', 'rojo');
const auto2 = new Auto('Honda', 'civic', 'blanco');

auto1.mostrar();
auto2.mostrar();