// trabajando con objetos
const obj = {
    id: 4,
    nombre: 'Fran',
    apellido: 'Romero',
    isDeveloper: true,
    libros_favoritos: ['El metodo', 'El codigo de la manifestacion'],
    '4-juegos': [1, 2, 3, 4]
}
//REPASO
//imprimimos propiedades de un objeto con un PUNTO
console.log(obj.id) // 4
//o atraves de corchetes iria entre comillas
console.log(obj['id']) // [4]


const propiedad = 'isDeveloper';
console.log(obj[propiedad]) // true

const prop = 'apellido';
console.log(obj[prop]) // Romero

const obj2 = obj;
console.log(obj2)
obj2.nombre = 'Carla';
console.log(obj2.nombre) // Carla
console.log(obj.nombre) // Carla // seria un error pensar que todo el objeto fue copia y transladado a otro nuevo, sino que los dos comparte los mismo elementos y si uno cambia cambia el otro porque son objetos 

//En variables si cambian pero en objetos NO
let valor1 = 4;
let valor2 = valor1;

valor2 = 6
console.log(valor1); // 4
console.log(valor2); //6 


/////////////////////////////
//Como ordenar listas de objetos en funcion de una prop
const listaPeliculas = [
    {titulo: 'Lo que el viento se llevó ', anyo: 1939},
    {titulo: 'Titanic', anyo: 1997},
    {titulo: 'Moana', anyo: 2016},
    {titulo: 'El efecto mariposa', anyo: 2004},
    {titulo: 'TED', anyo: 2012}
]
console.log(listaPeliculas)
//.sort MUTA EL VALOR DE LA LISTA ORIGINAL (LOS ORDENA)
listaPeliculas.sort((a, b) => a.anyo - b.anyo)
console.log(listaPeliculas)
