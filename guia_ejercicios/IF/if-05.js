// Escribir un programa que le pida al usuario que ingrese su nombre, y luego
// imprima "Hola [nombre]" si el nombre ingresado es "Juan", "María" o "Pedro", o
// "Hola desconocido" si el nombre ingresado no es uno de esos tres.

const saludar = () => {
    let nombre_ingresado;
    nombre_ingresado = prompt('Ingrese su nombre/juan/maria/pedro: ');
    if(nombre_ingresado == 'juan' || nombre_ingresado == 'maria' ||nombre_ingresado == 'pedro'){
        return alert(`Hola ${nombre_ingresado}`);
    }
    else {
        return alert(`Hola desconocido! `);
    }
}