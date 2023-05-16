
function sumayresta(a,b, callbackSuma, callbackResta){
    const suma = callbackSuma(a+b);
    const resta = callbackResta(a-b);
    return [suma, resta]; // devuelve una lista 
}

function suma(mensaje){
    return 'la suma es de : ' + mensaje;
}
function resta(mensaje){
    return 'la resta es de: ' + mensaje;
}

const resultado = sumayresta(4, 5, suma, resta);
console.log(resultado); // ['la suma es de: 9', 'la resta es de: -1']
console.log(resultado[0]) // la suma es de : 9
console.log(resultado[1]) // la resta es de: -1


// function sumayresta(a, b, callbackSuma, callbackResta){
//     callbackResta(a - b);
//     callbackSuma(a + b);
// }

// function suma(resultado){
//     return 'La suma es: ' + resultado;
// }

// function resta(resultado){
//     return 'La resta es: ' + resultado;
// }

// const resultado = sumayresta(3, 4, suma, resta); 
// console.log(resultado[])