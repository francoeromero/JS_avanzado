// Crear un programa que solicite al usuario ingresar precio unitario y cantidad
// de 5 productos. Almacenar cada valor en dos listas distintas. Luego imprimir
// el precio total de cada artículo.

let lista_precios_unitarios = [];
let lista_cantidad = [];
let precio_unitario;
let precios_totales = [];
let suma_precios=0;
for(let i = 0; i < 5; i++){
    precio_unitario = prompt('Ingrese el precio por unidad: ');
    lista_precios_unitarios.push(precio_unitario);

    cantidad_producto = prompt('Ingresa la cantidad: ');
    lista_cantidad.push(cantidad_producto);
    
    precios_totales.push(precio_unitario*cantidad_producto);
}
console.log(precios_totales);



