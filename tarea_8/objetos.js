// Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const info = {
    nombre: 'Fran',
    apellido: 'Romero',
    edad: 30,
    altura: 1.78,
    eresDesarrollador: true
}
// Una variable que obtenga tu edad a partir del objeto anterior
mi_edad = info.edad;
console.log(mi_edad);
//- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const lista_info = Object.values(info);
console.log(lista_info)
const amigos = [{
    nombre: 'Joaquin',
    apellido: 'Hernandez',
    edad: 29,
    altura: 1.8,
    eresDesarrollador: false
},
{
    nombre: 'Jorge',
    apellido: 'Fernandez',
    edad: 23,
    altura: 1.9,
    eresDesarrollador: false
}];
console.log(amigos);

// Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const todos = amigos.concat(info)
console.log(todos)
todos.sort((a, b) => b.edad - a.edad)
console.log(todos)