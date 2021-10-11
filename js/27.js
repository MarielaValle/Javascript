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

const producto2 = new Producto("Monitor",800);

const producto3 = new Producto("Notebook", 1000);

console.log(producto2);
console.log(producto3);