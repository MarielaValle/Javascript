
"use strict";
const producto = {
    nombreProducto: "monitor 20 pulgadas",// propiedad
    precio: 300,
    disponible: true,
    
    
    }

    producto.imagen="imagen.jpg"
    console.log(producto)
// un objeto aunque sea con const se puede modificar, para evitarlo usar freeze

Object.freeze(producto);// no te permite agregar propiedades ni eliminarlas, ni cambiar valor


//producto.cantidad= 2




console.log(Object.isFrozen(producto));

Object.seal(producto)//te permite modificar existentes