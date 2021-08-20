// Objetos

const nombreProducto = "monitor 20 pulgadas";
const precio = 300;
const disponible= true;

const producto = {
nombrePoducto: "monitor 20 pulgadas",// propiedad
precio: 300,
disponible: true,


}

console.log(producto);


//Formas de acceder a la propiedad

console.log (producto.precio)//sintaxis de punto

console.log(producto["precio"]); //sintaxis corchete

// Modificar objetos

// agregar una propiedad

producto.imagen="imagen1"

//eliminar propiedad
delete producto.imagen;