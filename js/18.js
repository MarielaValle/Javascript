
//funciones con parámetros y argumentos
function sumar(numero1, numero2){  //parámetros 
    console.log(numero1+numero2)
    }
    
    //llamar o invocar la función
    
    sumar(10,10);//argumentos o valores reales



    const sumar2 = function(n1,n2){
        console.log(n1+n2)
        }
        
        //LLamarla-invocarla
        sumar2(10,5)


        //parámetros por default
        function sumar(numero1=0, numero2=0){  //parámetros 
            console.log(numero1+numero2)
            }
            
            //llamar o invocar la función
            
            sumar(1);//no da error, sino daría error al no haber segundo parámtro