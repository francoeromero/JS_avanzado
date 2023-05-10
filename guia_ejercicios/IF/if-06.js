// Escribir un programa que le pida al usuario que ingrese su nombre y su edad,
// y luego imprima "Puedes votar" si la edad es mayor o igual a 18 y menor o
// igual a 65, o "No puedes votar" si la edad es menor a 18 o mayor a 65.

const votar = () => {
    let nombre = prompt('Ingrese su nombre: ');
    let edad = prompt('Ingrese su edad: ');
    if(edad > 17 && edad < 66){
        return alert(`Hola ${nombre} Puedes votar porque tienes ${edad}`);
    }
    else{
        return alert(`Hola ${nombre} No puedes votar`);
    }
}