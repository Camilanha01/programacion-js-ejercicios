"use strict";

// Declaración de variables:
let m, l1, l2, l3;

// Ingreso de datos:
l1 = parseInt(prompt("Ingrese el lado 1"));
l2 = parseInt(prompt("Ingrese el lado 2"));
l3 = parseInt(prompt("Ingrese el lado 3"));

if (l1 == l2) {
  if (l1 == l3) {
    m = "Es equilátero";
  } else {
    m = "Es isosceles";
  }
} else if (l2 == l3) {
  m = "Es isosceles";
} else if (l1 == l3) {
  m = "Es isósceles";
} else {
  m = "Es escaleno";
}
