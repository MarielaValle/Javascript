
// Destructurin objetos

const producto = {
    nombreProducto: "monitor 20 pulgadas",// propiedad
    precio: 300,
    disponible: true,
    
    
    }


    // selecciono el precio y genero una variable

    //const precioProducto = producto.precio;

    //console.log (precioProducto);

    //Forma nueva Destructuring

    const {precio,nombreProducto} = producto //creo la variable y extraigo el valor en un solo paso
    console.log(precio);
    console.log (nombreProducto)