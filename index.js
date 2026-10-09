//Calculo de precio por edad
let precioEdad;
let edadTrue = false;
while (edadTrue == false) {
  let edad = Number(prompt("Introduce tu edad: "));
  if (edad >= 0 && edad <= 3) {
    precioEdad = 0;
    edadTrue = true;
  } else if (edad >= 4 && edad <= 12) {
    precioEdad = 15;
    edadTrue = true;
  } else if (edad >= 13 && edad <= 64) {
    precioEdad = 30;
    edadTrue = true;
  } else if (edad >= 65) {
    precioEdad = 10;
    edadTrue = true;
  } else {
    console.log("La edad introducida no es válida");
  }
}
console.log(precioEdad);

//Calculo de precio por dia de la semana
let descuentoDia;
let diaTrue = false;
while (diaTrue == false) {
  let dia = prompt("Dia de la semana (sin tildes): ".trim().toLowerCase());
  if (dia === "lunes" || dia === "martes") {
    descuentoDia = 0.8;
    diaTrue = true;
  } else if (dia === "miercoles" || dia === "jueves" || dia === "viernes") {
    descuentoDia = 1;
    diaTrue = true;
  } else if (dia === "sabado" || dia === "domingo") {
    descuentoDia = 0.9;
    diaTrue = true;
  } else {
    console.log("El día introducido no es válido");
  }
}
console.log(descuentoDia);

//Calculo del precio por el tamaño del grupo
let precioGrupo;
let grupoTrue = false;
while (grupoTrue == false) {
  let tamañoGrupo = Number(prompt("Indica el tamaño de tu grupo: "));
  if (tamañoGrupo >= 5) {
    precioGrupo = 0.85;
    grupoTrue = true;
  } else if (tamañoGrupo >= 0 && tamañoGrupo < 5) {
    precioGrupo = 1;
    grupoTrue = true;
  } else {
    console.log("El número introducido no es válido");
  }
}
console.log(precioGrupo);
//Calculo del descuento
let codigoDescuento = prompt("Código de descuento (opcional): ");
let precioDescuento;
if (codigoDescuento === "DESCUENTO10") {
  precioDescuento = 10;
} else {
  precioDescuento = 0;
}
console.log(precioDescuento);

//Calculo del precio FINAL
let precioSemiFinal = precioEdad * descuentoDia * precioGrupo;
let precioFinal;
if (precioSemiFinal > 10) {
  precioFinal = (precioSemiFinal - precioDescuento).toFixed(2);
  console.log(
    "Su precio final es de: " + precioFinal + "€ tras aplicarle el descuento",
  );
} else {
  precioFinal = precioSemiFinal.toFixed(2);
  console.log(
    "Su precio final es de: " +
      precioFinal +
      "€ tras no poder aplicarle el descuento",
  );
}
