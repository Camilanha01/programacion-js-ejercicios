'use strict';

// Declaración de variables:
let m = '',
    n,
    cont = 0,
    contApb = 0,
    contDpb = 0,
    contPrm = 0,
    acumApb = 0,
    acumDpb = 0,
    acumPrm = 0,
    min,
    max,
    promDpb,
    promApb,
    promPrm;

// Desarrollo del algoritmo:


do{
    n = parseInt(prompt("Ingresa una nota: "));

    if( n < 4){
        contDpb++
        acumDpb += n
    }
    if( n >= 4){
        contApb++
        acumApb += n
    }
    if( n >= 7){
        contPrm++
        acumPrm += n
    }

    if(i == 0){
        min = n
    }
    if(i == 0){
        max = n
    }

    if( n > max){
        max = n
    }
    if( n < min){
        min = n
    }
}while (confirm("¿Desea ingresar una nota más?")){

}

promDpb = acumDpb / contDpb
promApb = acumApb / contApb
promPrm = acumPrm / contPrm

console.log("Contador de desaprobados: "+ contDpb);
console.log("Acumulador de desaprobados: " + acumDpb);

console.log("Contador de aprobados: "+ contApb);
console.log("Acumulador de aprobados: " + acumApb);

console.log("Contador de promocionados: "+ contPrm);
console.log("Acumulador de promocionados: " + acumPrm);

m += `
<ul>
    <li><strong>Promedio desaprobados:</strong> ${promDpb}</li>
    <li><strong>Promedio aprobados:</strong> ${promApb}</li>
    <li><strong>Promedio promocionados:</strong> ${promPrm}</li>
    <li><strong>Mínimo:</strong> ${min}</li>
    <li><strong>Máximo:</strong> ${max}</li>
</ul>`;