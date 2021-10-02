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


//---------------------------------------------

const meses = ["enero", "febrero", "marzo","abril"]

const carrito = [

{nombre:"monitor", precio: 200},
{nombre: "tablet", precio: 100}
]

// forEach

meses.forEach (mes=>console.log(mes))

meses.forEach (mes=>{

    if(mes=="marzo"){

        console.log("marzo si existe")
    }

})

const resultado = meses.includes("marzo");
console.log (resultado)

//some ideal para arrays de objetos

resultado2 = carrito.some ( producto=>  producto.precio == 100)

console.log (resultado2)

//--------------Forma corta con arrow function---------------

resultado3 =carrito.some(producto=> producto.nombre =="monitor")

console.log(resultado3);

//Reduce

resultado4 = carrito.reduce(function(total, producto){

    return total + producto.precio
},0)

console.log(resultado4)

resultado5 = carrito.reduce((total,producto) =>total + producto.precio,0);

console.log(resultado5)

//filter

resultado6 = carrito.filter(function(producto){
    return producto.precio >100
})
console.log(resultado6)

resultado7 = carrito.filter ((producto)=>producto.precio>100)

console.log(resultado7)