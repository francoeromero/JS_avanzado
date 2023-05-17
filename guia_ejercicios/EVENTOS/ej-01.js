// creamos la funcion
function clickTitulo() {
    console.log('El usuario hizo click en el titulo');
}
// asignamos el elemento del html un ID llamado "titulo"
// y lo deposito en la variable titulo
const titulo = document.getElementById('titulo');
// luego la funcion addeventListener, poner dos parametros el primero click, nombre del evento y luego la funcion 
titulo.addEventListener('click', clickTitulo);

