//- La fecha de hoy
fechaHoy = new Date();
console.log(fechaHoy);

// - La fecha de tu nacimiento
miNacimiento = new Date(1993, (3 - 1), 4);
console.log(miNacimiento);

//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const mas_tarde = fechaHoy > miNacimiento;
console.log(mas_tarde); // true

// Una variable que contenga el día de tu nacimiento
const dia_de_mi_nacimiento = miNacimiento.getDate();
console.log(dia_de_mi_nacimiento); // 4

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0) 
const mes_de_mi_nacimiento = miNacimiento.getMonth() + 1 ;
console.log(mes_de_mi_nacimiento); // 3

//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const anyo_de_mi_nacimiento = miNacimiento.getFullYear();
console.log(anyo_de_mi_nacimiento); // 1993