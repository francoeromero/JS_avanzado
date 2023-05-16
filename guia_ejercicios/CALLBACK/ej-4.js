// Crea una función llamada realizarSolicitud que tome una URL y dos funciones de callback:
//  una para manejar el éxito de la solicitud y otra para manejar el error. 
// La función debe simular una solicitud HTTP y llamar al callback correspondiente según el resultado de la solicitud.

function realizarSolicitud(url, callback_solicitud, callback_error){
    const exito = true;

    if(exito){
        callback_solicitud('Solicitud exitosa');
    }
    else{
        callback_error('Error enla solicitud');
    }
}

const urlSolicitud = 'https://ejemplo.com/solicitud';
realizarSolicitud(urlSolicitud, )



