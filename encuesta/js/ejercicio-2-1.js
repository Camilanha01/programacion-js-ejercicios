'use strict';

// Declaración de variables:
let m = '',
    ciudad,
    sexo,
    edad,
    cont = 0,
    contM = 0,
    contH = 0,
    acum = 0,
    acumM = 0,
    acumH = 0,
    contM21 = 0,
    contH21 = 0,
    maxM,
    minH,
    prom,
    promM,
    promH,
    porcH,
    porcM;

// Desarrollo del algoritmo:
do{
    do{
        ciudad = prompt("Ingrese su ciudad:");
    }while(!isNaN(ciudad)) //valido que ciudad sea una cadena

    do{
        sexo = prompt("Ingrese su sexo:").toUpperCase();
    }while(!( sexo == "M" || sexo == "H" ));
    
    do{
        edad =  parseInt(prompt("Ingrese su edad: "));
    }while(!(edad >= 0 && edad <= 110))

    cont++
    acum += edad
   
    if( sexo == "M"){
        contM++
        acumM += edad
        
        if(maxM == undefined) maxM = edad;
        if(edad > maxM) maxM = edad;

        if (edad < 21){
            contM21++
        }
    }

    if( sexo == "H"){
        
        contH++
        acumH += edad

        if(minH == undefined) minH = edad
        if(edad < minH) minH = edad

        if (edad > 21){
            contH21++
        }
    }
}while( confirm("Desea ingresar mas datos"));

prom = acum/cont //promedio general
promH = acumH/contH //promedio de hombres
promM = acumM/contM //promedio de mujeres

//porcentajes
porcM = (contM21 * 100) / contM 
porcH = (contH21 * 100) / contH
m += `
<ul>
    <li>Promedio de edad general: ${prom}.</li>
    <li>Promedio de edad de las mujeres: ${promM}.</li>
    <li>Promedio de edad de los hombres: ${promH}.</li>
    <li>Porcentaje de mujeres menores a 21 años: ${porcM }.</li>
    <li>Porcentaje de hombres mayores a 21 años: ${porcH }.</li>
    <li>La mayor edad ingresada de las mujeres: ${maxM}.</li>
    <li>La menor edad ingresada de los hombres: ${minH}.</li>
</ul>`;