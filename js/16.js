//Funciones

//Declaración de la función

function sumar(){   //argumentos de la función
// entre llaves cuerpo de la funcion
console.log(10+10)
}

//llamar

sumar();



//IIFE (se manda a llamar o invocan solas)Sirven para que no se mezclen variables y funciones con otros archivos
(function(){
console.log("Esto es una función")
})();

//Expresión de la función

const sumar2 = function(){
    console.log(3+3)
    }
    
    //LLamar
    sumar2()