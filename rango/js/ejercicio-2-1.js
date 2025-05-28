'use strict';

// Valores solicitados en ejercicio-2-0.js

// Inicio m para que no se concatenen los mensajes
m = `En el rango entre ${inf} y ${sup}, ${num} `;

// Desarrollar la estructura condicional:
if (num >= inf && num <= sup) {
  console.log("Esta dentro del rango");

  if (num % 2 == 0) {
    console.log("Es par");
  }
} else {
  console.log("Esta fuera del rango");

  if (num % 2 != 0) {
    console.log("Es impar");
  }
}