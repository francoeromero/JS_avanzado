//declaro la variable hr que almacena el valor de las horas transcurridas en el cronometro
let hr =(min = sec = ms = "0" + 0);
//declaro la variable startTimer para el setInterval que es una funcion que repite una ejecucion cada cierto tiempo 
let startTimer;
// seleccionando los 3 botones del cronometro
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

//agregamos los 3 listener a las 3 funciones
// cada una llama a una funcion diferente cuando se hace click
startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);

////////////////// 
//funcion start
function start() {
    // Agrego la clase "active" al botón de iniciar
    startBtn.classList.add('active');
    // Remuevo la clase "stopActive" del botón de parar
    stopBtn.classList.remove('stopActive');
    // Inicio un intervalo de tiempo que se ejecutará cada 10 milisegundos
    startTimer = setInterval(()=>{
        // MILISEGUNDOS
        // Aumenta los milisegundos en 1
        ms++;
        // Si los milisegundos son menores a 10, se agrega un cero a la izquierda
        ms = ms < 10 ? "0" + ms : ms;

        // SEGUNDOS
        // Si los milisegundos llegan a 100
        if(ms==100){
            // Aumenta los segundos en 1
            sec++;
             // Si los segundos son menores a 10, agrega un cero a la izquierda
            sec = sec < 10 ? "0" + sec : sec;
             // Resetea los milisegundos a cero
            ms = "0" + 0;
        }
        // MINUTOS
        // Si los segundos llegan a 60
        if(sec == 60){
            // Aumenta los minutos en 1
            min++;
            // Si los minutos son menores a 10, se agrega un cero a la izquierda
            min = min < 10 ? "0" + min : min;
            // Resetea los segundos a cero
            sec = "0" + 0;
        }
        // HORAS
        // Si los minutos llegan a 60
        if(min == 60){
            // Aumenta las horas en 1
            hr++;
            // Si las horas son menores a 10, se agrega un cero a la izquierda
            hr = hr < 10 ? "0" + hr : hr;
            // Resetea los minutos a cero
            min = "0" + 0;
        }
        // Actualizacion de los valores en la interfaz sin esto no funciona
        putValue();
    }, 10); //1000ms = 1s
}

////////////////// 
//funcion stop 
function stop(){
    // Se remueve la clase active del botón de inicio.
    startBtn.classList.remove("active");
    //Se agrega la clase stopActive al botón de parada.
    stopBtn.classList.add("stopActive");
    //Se borra el intervalo de tiempo que se está ejecutando.
    clearInterval(startTimer);
}
////////////////
// funcion reset
function reset(){
    // Remuevo la clase "active" del botón de inicio
    startBtn.classList.remove("active");
    // Remuevo la clase "stopActive" del botón de detener
    stopBtn.classList.remove("stopActive");
    // Detiene el temporizador
    clearInterval(startTimer);
    // Establece las variables de hora, minuto, segundo y milisegundo a "00"
    hr = min = sec = ms = "0" + 0;
    // Actualiza el valor del reloj en la página
    putValue();
}
// Esta funcion actualiza los valores de los elementos HTML, horas minutos, segundos y milisegundos
function putValue(){
    //Selecciono el elemento del documento HTML con la clase millisecond y actualiza su contenido con el valor de la variable ms.
    document.querySelector(".millisecond").innerText = ms;
    //Selecciono el elemento del documento HTML con la clase second y actualiza su contenido con el valor de la variable sec.
    document.querySelector(".second").innerText = sec;
    //Selecciono el elemento del documento HTML con la clase second y actualiza su contenido con el valor de la variable sec.
    document.querySelector(".minute").innerText = min;
    // Selecciono el elemento del documento HTML con la clase hour y actualiza su contenido con el valor de la variable hr.
    document.querySelector(".hour").innerText = hr;
}
