function Paridad(num, confirm){

    if( !validar(num) ){ // si el número es inválido, no sigue ejecutando nada más
    console.log("Número inválido");
    return;
}

    if( confirm == true ){  //0 es par
        if( num % 2 == 0 ){
            console.log("Par")
        }else{
            console.log("Impar")
        }
    }else{
        if( num == 0 ){
            console.log("Sin paridad")
        }else if( num % 2 == 0 ){
            console.log("Par")
        }else{
            console.log("Impar")
        }
    }
}

function validar(num){
    if( !isNaN(num) ){
        return true
    }else{
        return false
    }
}