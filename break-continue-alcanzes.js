//casos muy especificos

let lista = [1, 2, ,3, 4, 5, 6, 7, 8]

for (let i = 0; i < lista.length; i++){
    
    if(lista[i] === 3){
        continue;
    }
    console.log(i)


    //para sacarlo del bucle
    if(lista[i]> 5){
        break;
    }
}

//cuale es el ambito del bucle,  las variables dentro de for no tienen alcanze global

console.log(i)


let a = 0;
while(true){
    console.log(a)
    a++;
    if(a >10){
        break
    }
}