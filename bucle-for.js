//for 

for(let i = 0; i < 10; i++){
    console.log(i)
}

let lista = [1, 4, 6, 2, 3]

for(let i = 0; i < lista.length; i++){
    console.log(lista[i] * 2 )
}

//Estructura for of
for(let valor of lista){
    console.log(valor)
}

//Estructura forEach
lista.forEach(valor => {console.log(valor)})

//for in 
let persona = {
    nombre : "fran",
    apellido: "romero",
    edad: 30
}

for (let propiedad in persona){
    console.log(propiedad)
    console.log(persona)
}

console.log(persona.nombre)

