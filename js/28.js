// clases



class Producto{

constructor(nombre, precio){

this.nombre= nombre;
this.precio=precio;
}
formatearProducto(){
    return `El Producto ${this.nombre} tiene un precio de : ${this.precio}$`
}

}

const producto1 = new Producto("Monitor", 800);

console.log(producto1)

console.log(producto1.formatearProducto())







