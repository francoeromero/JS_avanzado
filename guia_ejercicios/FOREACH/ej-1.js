// Dado un array de números, crea una función llamada multiplicarPorDos que utilice el método forEach para multiplicar cada elemento del array por 2 y luego imprima los resultados por consola.
// ESTRUCTURA forEach

let miLista = [1,2,3,4,5,6,7,8,9];
miLista.forEach((e,i,a)=>{
    console.log(e);// elemento: 1,2,3,4,5,6,7,8,9
    console.log(i); // contador: 0,1,2,3,4,5,6,7,8
    console.log(a); // arrays: [1,2,3,4,5,6,7,8,9]
});

let miArray = [1,2,3,4,5,6,7,8,9,10]

const multiplicarPorDos = (a)=>{
    a.forEach((e)=>{
        console.log(e*2)
    })
};
multiplicarPorDos(miArray)

function multiplicarPorDos(a){
    a.forEach(function(elemento){
        console.log(elemento*2);
    });
}
multiplicarPorDos(miArray)

