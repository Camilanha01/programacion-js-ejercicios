'use strict';

// Valores solicitados en ejercicio-3-0.js

// Inicio m para que no se concatenen los mensajes
m = `La opreación ${n1} ${op} ${n2} es`;

// Desarrollar la estructura condicional:

switch (op){
    case "+": {
        r = n1 + n2;
        m = m + r;
        break;
    }
    case "-":{
        r = n1 - n2;
        m = m + r;
        break;
    }
    case "*":{
        r = n1 * n2;
        m = m + r;
        break;
    }
    case "/":{
        if (n2 == 0){
            console.error("No se puede dividir por 0");
        }else{r = n1 / n2;
            m = m + r;
        }
        break;
    }
    default:{
        m = ("Operacion incorrecta");
    }
}