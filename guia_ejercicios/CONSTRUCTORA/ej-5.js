function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    let dni = '12345667';

    this.getDni = function(){
        return dni;
    }

    this.saludar = function(){
        console.log(`Hola soy ${nombre} tengo ${edad} años y mi dni es ${this.getDni()}`);
    }
}

let objetoPersona1 = new Persona('Marquitos', 20);
let objetoPersona2 = new Persona('Franquito', 30);

objetoPersona1.saludar();
objetoPersona2.saludar();