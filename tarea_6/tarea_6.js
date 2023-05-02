//Crea una variable que contenga una lista de compras
const compras = ['leche', 'manzanas', 'gaseosa', 'fosforos', 'galletas'];
//modifica la lista de la compra y añadele "Aceite de Girasol"
compras.push('Aceite de Girasol');
console.log(compras);
// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
compras.pop();
console.log(compras);
//Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculas = [
    {titulo: 'El Gran Hotel Budapest',
    director: 'Wes Anderson',
    fecha: '2014' },
    {titulo: 'El Caballero de la Noche',
    director: 'Christopher',
    fecha: '2008' },
    {titulo: 'La Forma del Agua',
    director: 'Guillermo del Toro',
    fecha: "2017" },
];
//Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const despues2010 = peliculas.filter(i => i.fecha > 2010);
console.log(despues2010);
//Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = [];
peliculas.map(i => directores.push(i.director));
console.log(directores); // ['Wes Anderson','Christopher','Guillermo del Toro']
//Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = [];
peliculas.map(i => titulos.unshift(i.titulo));
console.log(titulos);
//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const directores_titulos = titulos.concat(directores);
console.log(directores_titulos);
//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const factor_propagacion = [...directores, ...titulos];
console.log(factor_propagacion);
