let numero;

function ingresarNumero(){
    do {
        numero = parseInt(prompt("Ingresar numero"))
    } while (isNaN(numero))
    console.log("El numero es: " + numero)
}

function mostrarParidad(){
    if( numero == undefined ){
        alert("Ingrese un numero")
        ingresarNumero()
    }else if( numero == 0  ) {
        alert("El numero es 0")
    }else if( numero % 2 == 0 ){
        alert("El numero es Par")
    }else{
        alert("El numero es Impar")
    }
}