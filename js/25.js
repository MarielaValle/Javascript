const carrito = [

    {nombre:"monitor", precio: 200},
    {nombre: "tablet", precio: 100}
    ]


    //forEach

carrito.forEach(function(){

    console.log("Una vez por  cada elemento")
});

carrito.forEach(function(producto){// para mostrar algo en consolo o imprimir

    console.log(producto)
});


const arreglo1 =carrito.forEach(producto =>producto.nombre
);
    //map
   const arreglo2 = carrito.map(producto =>producto.nombre// para crear un nuevo array
    );
// 
    const arreglo3 = carrito.map(producto => `${producto.nombre}:${producto.precio }$` )
    console.log(arreglo1);
    console.log(arreglo2);
    console.log(arreglo3);