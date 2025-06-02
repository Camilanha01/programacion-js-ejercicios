'use strict';

// Declaración de variables:
let m = '',
    nombre,
    apellido,
    dni,
    edad,
    turno,
    nota;

// Desarrollo del algoritmo:


do{
    nombre = prompt('Ingrese el nombre del alumno');
}while(!isNaN(nombre))
nombre = nombre.toLowerCase();

do{
    apellido = prompt('Ingrese el apellido del alumno');
}while(!isNaN(apellido))
apellido = apellido.toUpperCase();

do{
    dni = prompt('Ingrese el DNI del alumno');
}while( !(dni.length <=8 && dni.length >=6))
console.log("DNI VALIDO!")

do{
    edad = prompt('Ingrese edad del alumno');
}while( !(edad >= 17 && edad <= 70))
console.log("EDAD VALIDA!")

do{
    turno = prompt('Ingrese el turno del alumno');
}while( !( turno.toLowerCase() == "m" || turno.toLowerCase() == "t" || turno.toLowerCase() == "n"));

do{
    nota = parseInt(prompt('Ingrese la nota del alumno'));
}while( !( nota >= 1 && nota <=10));


m += `
<ul>
    <li><strong>Nombre:</strong> ${nombre}</li>
    <li><strong>Apellido:</strong> ${apellido}</li>
    <li><strong>DNI:</strong> ${dni}</li>
    <li><strong>Edad:</strong> ${edad}</li>
    <li><strong>Turno:</strong> ${turno}</li>
    <li><strong>Nota:</strong> ${nota}</li>
</ul>`;