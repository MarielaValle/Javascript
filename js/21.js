//Arrow functions



const sumar = function (n1, n2){

    console.log (n1 + n2);
}

sumar(10,5);

const sumar2 = (n1,n2)=> console.log (n1 + n2);

sumar2(20,30)

const aprendiendo = (tecnologia) => { //parámetro, cuando hay un solo parámtro los paréntesis son opcionales
    console.log(`Aprendiendo ${tecnologia}`)
}// cuando solo es una lína, las llaves son opcionales

aprendiendo("Javascript")//argumento