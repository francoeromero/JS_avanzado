// Escribir un programa que le pida al usuario que ingrese su edad, y luego imprima "Eres mayor de edad" si la edad es mayor o igual a 18, o "Eres menor de edad" si la edad es menor a 18.

const filtroEdades = (edadIngresada) =>{
    edadIngresada = prompt('Ingrese su edad: ');
    edadIngresada = parseInt(edadIngresada);
    while(isNaN(edadIngresada)){
        edadIngresada = prompt('ERROR!, Ingrese su edad: ');
        edadIngresada = parseInt(edadIngresada);
    }
    if(edadIngresada > 17){
        return alert(`Eres mayor a 18 porque tienes ${edadIngresada}`);
    }
    else{
        return alert(`Eres menor, porque tienes ${edadIngresada}`);
    }

}