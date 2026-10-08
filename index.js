//Calculo de precio por edad
let edad = Number(prompt("Introduce tu edad: "));
let precioEdad;

if (edad >= 0 && edad <= 3) {
  precioEdad = 0;
} else if (edad >= 4 && edad <= 12) {
  precioEdad = 15;
} else if (edad >= 13 && edad <= 64) {
  precioEdad = 30;
} else if (edad >= 65) {
  precioEdad = 10;
} else {
  console.log("La edad introducida no es válida");
}
console.log(precioEdad);

//Calculo de precio por dia de la semana
let dia = prompt("Dia de la semana: ");
let descuentoDia;
if (dia === "Lunes" || dia === "Martes") {
  descuentoDia = 0.8;
} else if (dia === "Miercoles" || dia === "Jueves" || dia === "Viernes") {
  descuentoDia = 1;
} else if (dia === "Sábado" || dia === "Domingo") {
  descuentoDia = 0.9;
} else {
  console.log("El día introducido no es válido");
}

let tamañoGrupo = Number(prompt("Indica el tamaño de tu grupo: "));
let precioGrupo;
if (tamañoGrupo >= 5) {
  precioGrupo = 0.85;
} else if (tamañoGrupo >= 0 && tamañoGrupo < 5) {
  precioGrupo = 1;
} else {
  console.log("El número introducido no es válido");
}

let codigoDescuento = prompt("Código de descuento (opcional): ");
let precioDescuento;

if (codigoDescuento === "DESCUENTO10") {
  precioDescuento = 10;
} else {
  precioDescuento = 0;
}

let precioFinal = precioEdad * descuentoDia * precioGrupo - precioDescuento;
