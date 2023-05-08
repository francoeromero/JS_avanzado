//errores comunes 

const miFuncion = val => {
    if(typeof val === 'number'){
        return 2 * val;
    }
    throw new Error("El valor debe ser de tipo numero")
    // return false;
}
console.log(miFuncion(4))


//internalError : ejercicios de recursividad
//syntaxError: fallo de sintaxis, de 
//TypeError: error de tipos de valores 
//RangeError : error de rangos
//ReferenceError : error de una referencia de alguna variable que no tiene sentido