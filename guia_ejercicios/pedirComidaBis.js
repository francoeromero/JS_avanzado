function pedirComida(array) {
    // la funcion recibe un array de objetos en donde se detalla nombre y tipo de dieta de los integrantes de un meeting
    // debe retornar un objeto que diga cuantos menus de que tipo de dieta hay que pedir
    // (a fines practicos solo hay dieta "standard" y "vegan")
    // Por ej:
    // pedirComida([{nombre: "Harry", dieta: "standard"}, {nombre: "Luna", dieta: 'vegan'}, {nombre: "Goyle", dieta: "standard"}])
    // retorna {standard: 2, vegan: 1}
    // Tu código aca:
    let contadorStandard = 0;
    let contadorVegan = 0;
    let resultado = {};
    for(let i = 0; i < array.length;i++){
        if(array[i].dieta == 'standard'){
            contadorStandard++;
        }
        else if(array[i].dieta== 'vegan'){
            contadorVegan++;
        }
        resultado.standard = contadorStandard;
        resultado.vegan = contadorVegan;
        return resultado;
    }
}