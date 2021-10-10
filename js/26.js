//This 
// ojo que el this usado dentro de un arrow function dentro de un objeto hace referencia al objeto window y no encutra el objeto
const reserva = {

nombre:"Mariela",
apellido:"Valle",
total: 5000,
pagado:false,
información:function(){
console.log(`el cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}$`)

}
}


const reserva2 = {

    nombre:"Pedro",
    apellido:"Calle",
    total: 5000,
    pagado:false,
    información:function(){
    console.log(`el cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}$`)
    
    }
    }

reserva.información();
reserva2.información();