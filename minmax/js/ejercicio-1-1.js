'use strict';

// Declaración de variables:
let m = '',
    n,
    cont = 0,
    acum = 0,
    min,
    max,
    prom;

// Desarrollo del algoritmo:

for ( let i = 0; i < 5; i++){
    let dato = parseInt(prompt("Ingresar un dato"))

    if( i == 0) {
        min = dato
    }
    if( i == 0) {
        max = dato
    }

    console.log("Dato: " + dato);

    acum = acum + dato;

    if (dato > max) {
        max = dato
    }
    
    if (dato < min) {
        min = dato
    }
    
}

console.log("Sumatoria: " + acum);

prom = acum / 5;

m += `
<ul>
    <li><strong>Promedio:</strong> ${prom}</li>
    <li><strong>Mínimo:</strong> ${min}</li>
    <li><strong>Máximo:</strong> ${max}</li>
</ul>`;