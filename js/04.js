//Tipos de datos

const producto = "Monitor de 20\""; //sino se usa en este caso comilla simple para definir la variable

const producto0 = 'Monitor de 30"'

const producto2 = String("monitor de 20 pulgadas");

const producto3 = new String("Monitor de 20 pulgadas");

console.log (producto)
console.log (producto0)
console.log(producto2)
console.log (producto3)

console.log (typeof producto)

// Funciones y métodos

const parrafo = "Aprendiendo Javascript en Udemy"

// conocer extensión
console.log (parrafo.length)

// encontrar un elemento, si da menos de 0 es que no está

console.log (parrafo.indexOf("Javascript"))

// encontrar un elemento pero que da true o false en lugar de posición en el String o -1

console.log (parrafo.includes("Javascript"))