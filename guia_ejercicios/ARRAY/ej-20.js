// A partir de la lista: [1,80,5,0,15,-5,1,79] determinar, el mayor, el menor, el
// promedio y la suma total de todos los elementos

let lista = [1,80,5,0,15,-5,1,79];
let suma = 0;
let promedio;
let el_mas_grande = lista[0];
let el_mas_chico = lista[0];
for(let i = 0; i < lista.length; i++){
    if(lista[i] > el_mas_grande){
        el_mas_grande = lista[i];
    }
    else if(lista[i] < el_mas_chico){
        el_mas_chico = lista[i];
    }
    suma += lista[i];
}

promedio = suma / lista.length;

console.log("El numero de la lista mayor de todos es: "+el_mas_grande);
console.log("El numero de la lista menor de todos es: "+el_mas_chico);
console.log("La suma de todos los numeros de la lista es: "+ suma);
console.log("El promedio de todos los numeros de la lista es: "+promedio);
