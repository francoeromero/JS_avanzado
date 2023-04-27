//Una variable que contenga tu altura en centímetros (entero)
let altura_cm = 175;
// Una variable que contenga tu altura en metros (número de coma flotante)
let altura_m = 1.75;
// Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso_kg = 90.5;
// Una variable que contenga tu altura en metros redondeada hacia arriba
altura_m_redondeada_hacia_arriba = Math.round(altura_m);
console.log(altura_m_redondeada_hacia_arriba) // 2
//- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
altura_peso_kg_redondeada_hacia_abajo = Math.floor(peso_kg);
console.log(altura_peso_kg_redondeada_hacia_abajo) // 90
//- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
max_js = (Number.MAX_VALUE + 1) === Number.MAX_VALUE;
if(max_js){
    console.log("Es el maximo valor de JS")
}