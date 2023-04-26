// listas, arrays o arreglos
const lista_numeros = [1, 2, 3, 4, 5]
const otra_lista = new Array(2, 1, 2, 3, 4, 5)
const otra_mas = new Array(3) //tres espacios vacios
otra_mas[0] = 'Hola'
const lista_de_listas = [lista_numeros, otra_lista, otra_mas]

console.log(lista_numeros)
console.log(otra_lista)
console.log(otra_mas)
console.log(lista_de_listas)
//Objetos

const movil = {
    altura : 10,
    anchura : 4,
    marca : "xiaomi",
    isWithe: false,
    tarjeta : {
        marca: "sandiks",
        almacenamiento : 32
    }
}
movil.anyo = 2019;
movil.marca = "Samsung"
console.log(movil.anyo)
console.log(movil.marca)

// fechas
// librerias de apoto moment.js
console.log(new Date());

const fecha_milis = new Date(10); //utilizando los milisegundos
console.log(fecha_milis);

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena)

const fecha_valores = new Date(2022, 0, 15);
console.log(fecha_valores)


const dia = ahora.getDate()
const mes = ahora.getMonth() + 1
const anyo = ahora.getFullYear()

