"use strict";

// Valores solicitados en ejercicio-3-0.js

// Inicio m para que no se concatenen los mensajes
m = `La opreación ${n1} ${op} ${n2} es `;

// Desarrollar la estructura condicional:

if (op == "+") {
  r = n1 + n2;
  m = m + r;
} else if (op == "-") {
  r = n1 - n2;
  m = m + r;
} else if (op == "*") {
  r = n1 * n2;
  m = m + r;
} else if (op == "/") {
  if (n2 === 0) {
    console.error("No se puede dividir por 0");
  }else{
    r = n1 / n2;
    m = m + r;
  }
}else{
    console.error("No es un operador valido")
}

