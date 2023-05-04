// funciones asincromas
const miAsinc = () =>{
    // hace una llamada a una base de datos externa
    // puede darnos algun error
}

const miPromesa = new Promise((resolve, reject) => {
    if(true){
        resolve();
    }
    else{
        reject();
    }
})



// function miAsinc() {

// }

const sum = (a,b) => {
    return a + b;
}
console.log(sum(1, 2))