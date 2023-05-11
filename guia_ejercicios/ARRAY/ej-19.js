// Crea una lista vacía y pide al usuario que ingrese una palabra. Luego, agrega
// la palabra a la lista si no se encuentra ya en la lista. Repite este proceso hasta
// que la lista tenga al menos 5 palabras.


let lista = []
let bandera = 0;
let encontrado = false;
let palabra;
while(lista.length < 5){
    palabra = prompt('Ingrese una palabra: ');
    if(bandera==0)
    {
        lista.push(palabra);
        bandera=1;
    }
    else
    {
        for(let i = 0; i < lista.length; i++){
            if(palabra !== lista[i]){
                encontrado = false;
            }
            else{
                encontrado = true;
                break;
            }
        }
        if(encontrado==false){
            lista.push(palabra);
        }
    }
}
console.log(lista)


































// let lista = [];
// let palabra;
// let bandera=0;
// let encontrado=false;
// while(lista.length < 5){
//     palabra = prompt('Ingrese una palabra: ');
//     if(bandera==0){
//         lista.push(palabra);
//         bandera = 1; 
//     }
//     else{
//         for(let i = 0; i < lista.length; i++){
//             if(palabra !== lista[i]){
//                 encontrado=false;
//                 break
//             }
//             else{
//                 encontrado=true;
//             }
//         }
//     }
//     if(encontrado==false){
//         lista.push(palabra);
//     }
    
// }
// console.log(lista);