//POO

//objeto literal

const producto = {

    nombre:"Tablet",
    precio:500
}

//Object Constructor

// La clase es como está formado el objeto, los diferentes valores que forman ese objeto

// argumento(valor real), parámetro(variables)

//plano que actua como clase, se puede instanciar múltiples veces con diferentes valores

function Producto(nombre, precio){
this.nombre=nombre;
this.precio=precio;

}

function formatearProducto(producto){

    return `El producto ${producto.nombre} tiene un precio de : ${producto.precio}$`
}

const producto2 = new Producto("Monitor",800);

const producto3 = new Producto("Notebook", 1000);




console.log(producto2);
console.log(producto3);

console.log(formatearProducto(producto2))



//prototype nos va a permitir crear funciones que solo se utilitzan en un objeto determinaddo

const cliente = {

    nombre:"Maria",
    apellido:"Valle"
}

function Cliente(nombre, apellido){
    this.nombre=nombre;
    this.apellido=apellido;
    
    }

Cliente.prototype.formatearCliente = function(){

    return `El nombre del cliente es ${this.nombre} y el apellido ${this.apellido}`
}

const cliente1 = new Cliente("Julio","Boca");

console.log(cliente1);

console.log(cliente1.formatearCliente())