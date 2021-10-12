// clases



class Producto{

constructor(nombre, precio){

this.nombre= nombre;
this.precio=precio;
}
formatearProducto(){
    return `El Producto ${this.nombre} tiene un precio de : ${this.precio}$`
}
formatearPrecio(){

    return `El precio del producto ${this.nombre} es de ${this.precio}$`
}
obtenerPrecio(){
    console.log(this.precio)
}

}

const producto1 = new Producto("Monitor", 800);

console.log(producto1);

console.log(producto1.formatearProducto());

console.log(producto1.formatearPrecio());


//herencia

class Libro extends Producto{

constructor (nombre, precio, isbn){
    super(nombre,precio);
    this.isbn=isbn;
}
formatearPrecio(){

    return `${super.formatearPrecio()} y su isbn es ${this.isbn}`
}
obtenerPrecio(){
    super.obtenerPrecio();
   
}
}

const libro1 = new Libro("Javascript la Revolución", 900, 99999)

console.log(libro1);
console.log(libro1.formatearPrecio());


console.log(libro1.obtenerPrecio());
