// Implementa una función llamada leerArchivo que tome el nombre de un archivo y una función de callback. 
// La función debe simular la lectura del archivo y pasar su contenido al callback como argumento.

function leerArchivo(nombreArchivo, callback){
    const contenido = 'Contenido del archivo';
    callback(contenido)
}

function lecturaArchivo(archivo){
    return console.log(archivo);
}

leerArchivo('arhivito', lecturaArchivo)