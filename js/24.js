//For Loop

for(let i=0;i<10;i++){

    console.log(i);
}

    for(let i=0;i<=10;i++){
  if(i %2 ==0) {
        console.log(`El número ${i} es Par`);
  }
    }



const meses = ["enero", "febrero", "marzo","abril"]

const carrito = [

{nombre:"monitor", precio: 200},
{nombre: "tablet", precio: 100}
]

for(let i=0; i<carrito.length;i++){

console.log(carrito[i].nombre)
}



//While Loop

let i=0; //indice

while (i<10){//condición
console.log(i);
i++;//incremento

}


//---Do While ----Ejecuta una vez y luego mira la condición

let m =100;

do{
  console.log(m);
  m++
}
while (m<=5)