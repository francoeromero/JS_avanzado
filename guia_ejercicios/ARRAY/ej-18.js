// Solicitar al usuario números enteros hasta que ingrese el 0. Almacenar los
// números en una lista y luego imprimir el mayor (sin utilizar la función max())

let lista = []
let bandera =  0;
let mayor;
let numero_ingresado = prompt('Ingrese un numero');
numero_ingresado = parseInt(numero_ingresado)
while(numero_ingresado != 0){
    numero_ingresado = prompt('ingrese otro numero: ');
    numero_ingresado = parseInt(numero_ingresado)

    if(bandera == 0){
        mayor = numero_ingresado;
        bandera = 1;
    }
    else if(numero_ingresado > mayor){
        mayor = numero_ingresado;
    }
    lista.push(numero_ingresado)
}
console.log(`Esta es la lista ${lista}  y el numero mayor es ${mayor}`);