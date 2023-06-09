// Una función sin parámetros que devuelva siempre "true"
function miFuncion(){
    return true
}
// Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

async function miFuncionAsincrona(){
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log('Hola mundo!');
}
miFuncionAsincrona();

// Una función generadora de índices pares automáticos

function* generaID() {
    let id = 0;
    while(true){
        yield id;
        id += 2;
    }
}
const gen = generaID();

console.log(gen.next().value) 
console.log(gen.next().value) 
console.log(gen.next().value) 
console.log(gen.next().value) 
console.log(gen.next().value) 
console.log(gen.next().value) 
console.log(gen.next().value) 
console.log(gen.next().value) 
console.log(gen.next().value) 
console.log(gen.next().value) 