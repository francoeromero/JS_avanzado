// Escribir un programa que le pida al usuario que ingrese su edad, y luego
// imprima "Eres un niño" si la edad es menor a 12, "Eres un adolescente" si la
// edad está entre 12 y 17 inclusive, "Eres un adulto" si la edad está entre 18 y 64

const rangos_edad = () =>{
    edad = prompt('ingrese edad: ');
    edad = parseInt(edad);
    while(isNaN(edad)){
        edad = prompt('ERROR! ingrese edad: ');
        edad = parseInt(edad)
    }
    if(edad < 12 ){
        return alert('Eres un niño')
    }
    else if(edad > 12 && edad < 18){
        return alert('Eres adolescente')
    }
    else if(edad > 17 && edad < 65){
        return alert('Eres adulto')
    }
    else{
        return alert('hubo un problema vuelve a escribir tu edad');
    }
}