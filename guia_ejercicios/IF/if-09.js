// Escribir un programa que le pida al usuario que ingrese una letra, y luego
// imprima "Es una vocal" si la letra es una vocal (a, e, i, o, u), o "Es una
// consonante" si la letra es una consonante.

const vocal = () => {
    let letra = prompt('Verifico si es vocal, Ingrese una letra: ');
    while(letra.length > 1){
        letra = prompt('ERROR!, ingrese una letra sola: ');
    }
    if(letra == 'a' || letra == 'e' ||  letra == 'i' ||letra == 'o' ||letra == 'u'){
        return alert(`La letra ${letra} es una vocal`);
    }
    else{
        return alert(`La letra ${letra} NO es una vocal`);
    }
}