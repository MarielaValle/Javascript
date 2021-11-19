//---promises--

const usuarioAutenticado = new Promise( (resolve, reject)=>{
 const auth = false;

 if (auth){

resolve("Usuario autenticado")// el promise se cumple
 }else {

reject("Usuario no autenticado")// el promise no se cumple
 }
});

//console.log(usuarioAutenticado)


usuarioAutenticado
.then ( function (resultado){
    console.log (resultado)
})
.catch ( function (error){
    console.log(error)
})

//ó 
usuarioAutenticado
.then ( (resultado)=> console.log(resultado))
.catch ( (error)=>console.log (error))

//Pending: no se ha cumplido pero no se ha rechazado
//Fulfilled: ya se cumplió
//Rejected: Se ha rechazado o no se ha podido cumplir