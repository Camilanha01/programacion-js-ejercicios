'use strict';

// Valores solicitados en ejercicio-1-0.js

// Inicio m para que no se concatenen los mensajes
m = 'el triángulo es ';

// Desarrollar la estructura condicional:

if (l1 == l2 && l2 == l3) {
    m = "Es equilátero";
} else if (l1 == l2 || l2 == l3 || l1 == l3) {
    m = "Es isósceles";
} else {
    m = "Es escaleno";
}