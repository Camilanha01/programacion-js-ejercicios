'use strict';

// Valores solicitados en ejercicio-4-0.js

// Inicio m para que no se concatenen los mensajes
m = `Por ser de la categería ${cat + sub} su sueldo es u$s `;

// Desarrollar la estructura condicional:

switch (cat){
    case 1:
        sueldo = 1000;
        break;
    case 2:
        sueldo = 1500;
        break;
    case 3:
        sueldo = 2000;
        break;
    default:
        sueldo = null;
        console.error("Categoria incorrecta");
        break;
}

switch (sub){
    case "a":
        sueldo = sueldo * 1.5;
        break;
    case "b":
        sueldo = sueldo * 2;
        break;
    case "c":
        sueldo = sueldo * 2.5;
        break;
    default:
        console.error("Sub categoria invalida");
        break;
}

if ( sueldo >= 1500 && sueldo <= 3000) {
    m+= "Inicial";
} else if ( sueldo >= 3001 && sueldo <= 4000) {
    m+= "Intermedio";
} else if (sueldo > 4000){
    m+= "Avanzado";
} else {
    m += "Fuera de rango";
}

