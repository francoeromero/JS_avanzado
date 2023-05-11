// Crear un programa que solicite al usuario ingresar: nombre del producto,
// cantidad y precio unitario. Guardar los datos en 3 listas distintas. Solicitar
// productos hasta que el nombre del producto sea ‘xxx’. Luego imprimir la lista
// de artículos con el siguiente formato:
// nombre_articulo cantidad $ precio_unitario $ total
// Ejemplo:
// alfajor capitan del espacio 6 $ 150 $ 900

let nombreProducto;
let cantidad;
let precio_unitario;
let lista_nombres_productos = [];
let lista_cantidad_productos = [];
let lista_precios_unitarios = [];
let lista_totales = [];

nombreProducto = prompt('Ingrese nombre del producto: ');
lista_nombres_productos.push(nombreProducto);

while(nombreProducto !== 'xxx'){
    
    precio_unitario = prompt('Ingrese el precio por unidad: ');
    precio_unitario = parseFloat(precio_unitario);
    lista_precios_unitarios.push(precio_unitario);

    cantidad = prompt('Ingrese la cantidad del producto: ');
    cantidad = parseInt(cantidad);
    lista_cantidad_productos.push(cantidad);

    lista_totales.push(precio_unitario*cantidad);

}

for(let i = 0; i < lista_totales.length; i++){
    console.log(`${lista_nombres_productos[i]} $${lista_cantidad_productos[i]} $${lista_precios_unitarios[i]} ${lista_totales[i]}`)
}