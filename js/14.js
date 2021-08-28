//Arrays

const numeros= [10,20,30,40,50];

console.log(numeros);

console.table(numeros);

const meses = new Array ("enero","febrero","marzo");

console.log(meses);

//Acceder a los valores de un array

console.log(numeros[0]);
console.log(numeros[200])//pone undefined porque no existe esa posción
console.log(numeros.length)

//recorrer arrays

meses.forEach(function(mes) {
    console.log(mes)
});

//agregar un elemento al array

numeros[5]= 60;// si pones una posición que si existe, lo modifica

//cuando no sabemos el lenght, con push lo pone al final
numeros.push(70);

//agrega al inicio del array

numeros.unshift(-1);
console.log(numeros);

//Eliminar ultimo elemento
numeros.pop()

console.log(numeros);

//Elimina primer elemento del array
numeros.shift()
console.log(numeros);

//Eliminar un elemento en el medio del array

console.log(meses);
meses.splice(1,1)//desde donde y cuantos

console.log(meses);

//Rest operator o Spread Operator
const nuevoArray = [...meses, "abril"]//const nuevoArray = ["abril",...meses]
console.log(nuevoArray)

