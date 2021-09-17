//metodos de propiedad

const reproductor = {
 reproducir: function() {
     console.log ("Reproduciendo canción"
     )
 }


}

console.log (reproductor)

reproductor.reproducir();

const reproductor2 = {
    reproducir: function(id) {
        console.log (`Reproduciendo canción ${300}`
        )
    },
    pausar: function(){
        console.log("Pausando...")
    },
    borrar: function (id){
        console.log(`Eliminando la canción ${id}`)
    }
   
   
   }

   reproductor2.reproducir();
   reproductor2.pausar();
   reproductor2.borrar(2);